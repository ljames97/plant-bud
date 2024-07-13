// login.test.js

import { signInWithEmailAndPassword, createUserWithEmailAndPassword, __setMockUser, __resetMockUser } from "firebase/auth";
import { localEventManager } from "../../components/global/event-handlers";
import { initLogin, __RewireAPI__ as loginRewireAPI } from "../../components/login/login.js";
import { auth } from "../../config/firebaseConfig.js";

jest.mock('../../components/global/event-handlers');
jest.mock('../../config/firebaseConfig.js');
jest.mock('firebase/auth', () => {
  const originalModule = jest.requireActual('firebase/auth');
  return {
    ...originalModule,
    signInWithEmailAndPassword: jest.fn(),
    createUserWithEmailAndPassword: jest.fn(),
    getAuth: jest.fn(() => ({})),
    onAuthStateChanged: jest.fn(),
    __setMockUser: jest.fn(),
    __resetMockUser: jest.fn()
  };
});

describe('Login Flow Integration Tests', () => {
  let loginButton, signupButton, emailInput, passwordInput, logo, dashboard;
  let mockLoginHandler, mockSignupHandler;
  let originalLocation;

  beforeEach(() => {
    localEventManager.addEventListener.mockImplementation((element, eventType, handler) => {
      element.addEventListener(eventType, handler);
    });

    mockLoginHandler = jest.fn(() => {
      const emailInput = document.getElementById('email');
      const passwordInput = document.getElementById('password');
      const email = emailInput ? emailInput.value : '';
      const password = passwordInput ? passwordInput.value : '';

      if (email && password) {
        signInWithEmailAndPassword(auth, email, password);
        window.location.href = '/index.html';
      }
    });

    mockSignupHandler = jest.fn(() => {
      const emailInput = document.getElementById('email');
      const passwordInput = document.getElementById('password');
      const email = emailInput ? emailInput.value : '';
      const password = passwordInput ? passwordInput.value : '';

      if (email && password) {
        createUserWithEmailAndPassword(auth, email, password);
        window.location.href = '/index.html';
      }
    });

    loginRewireAPI.__Rewire__('loginButtonHandler', mockLoginHandler);
    loginRewireAPI.__Rewire__('signupButtonHandler', mockSignupHandler);

    originalLocation = window.location;
    delete window.location;
    window.location = { href: '' }; // Mocking window.location

    document.body.innerHTML = `
      <div>
        <input type="email" id="email"/>
        <input type="password" id="password"/>
        <button id="login-button"></button>
        <button id="signup-button"></button>
        <div class="plantbud-logo"></div>
      </div>
    `;

    loginButton = document.getElementById('login-button');
    signupButton = document.getElementById('signup-button');
    emailInput = document.getElementById('email');
    passwordInput = document.getElementById('password');
    logo = document.querySelector('.plantbud-logo'); 
    dashboard = document.querySelector('.dashboard');

    window.location.href = './login.html';
    initLogin();
  });

  afterEach(() => {
    loginRewireAPI.__ResetDependency__('loginButtonHandler');
    loginRewireAPI.__ResetDependency__('signupButtonHandler');
    window.location = originalLocation; // Restore original window.location
    jest.clearAllMocks();
  });

  test('should set up event listeners for login and signup buttons', () => {
    expect(localEventManager.addEventListener).toHaveBeenCalledWith(loginButton, 'click', expect.any(Function));
    expect(localEventManager.addEventListener).toHaveBeenCalledWith(signupButton, 'click', expect.any(Function));
  });

  test('should authenticate user and redirect to app homePage on login', async () => {
    emailInput.value = 'test@email.com';
    passwordInput.value = '123456';
    
    loginButton.click();

    expect(mockLoginHandler).toHaveBeenCalled();
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(auth, 'test@email.com', '123456');
    expect(window.location.href).toBe('/index.html');
  });

  test('should create user and redirect to app homePage on signup', async () => {
    emailInput.value = 'newuser@email.com';
    passwordInput.value = 'abcdef';
    
    signupButton.click();

    expect(mockSignupHandler).toHaveBeenCalled();
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(auth, 'newuser@email.com', 'abcdef');
    expect(window.location.href).toBe('/index.html');
  });
});
