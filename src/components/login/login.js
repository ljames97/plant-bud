// login.js

import { auth } from '../../config';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { appendChildren } from '../global/utils';
import { createElement } from '../global/dom-utils';
import { localEventManager } from '../global/event-handlers';
import { setUpViewHeightListeners } from '../global/utils/gobalUtility';

/**
 * Initializes login.
 */
export const initLogin = () => {
  setUpLoginEventListeners();
  setUpViewHeightListeners();
}

/**
 * Sets up event listeners for login and sign-up buttons.
 */
const setUpLoginEventListeners = () => {
  const loginButton = document.getElementById('login-button');
  const signupButton = document.getElementById('signup-button');
  const portfolioButton = document.getElementById('portfolio-button')
  localEventManager.addEventListener(loginButton, 'click', (event) => {
    loginButtonHandler(event);
  });
  localEventManager.addEventListener(signupButton, 'click', (event) => {
    signupButtonHandler(event);
  });
  localEventManager.addEventListener(portfolioButton, 'click', () => {
    portfolioButtonHandler();
  })
}

/**
 * Handles the login button click event.
 */
export const loginButtonHandler = (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      window.location.href = '/index.html'; // Redirect to main app
    })
    .catch((error) => {
      console.error('Error logging in: ', error);
      renderErrorMessage(error);
    });
}

/**
 * Handles the sign-up button click event.
 */
const signupButtonHandler = (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      window.location.href = '/index.html'; // Redirect to main app
    })
    .catch((error) => {
      console.error('Error signing up: ', error);
      renderErrorMessage(error);
    });
}

/**
 * Opens link to portfolio.
 */
const portfolioButtonHandler = () => {
  window.open('https://ljames97.github.io/portfolio', '_self', 'noopener,noreferrer');
}

/**
 * Renders an error message below the logo in the login form.
 * @param {Object} loginError - The error object received from Firebase authentication.
 */
const renderErrorMessage = (loginError) => {
  clearErrorMessage();

  const logo = document.querySelector('.plantbud-logo')
  const errorText = createErrorMessage(loginError.code)
  const errorMessage = createElement({tagName: 'p', textContent: errorText, classEl: ['login-error-message']});
  appendChildren(logo, errorMessage);
}

/**
 * Clears any existing error messages from the login form.
 */
const clearErrorMessage = () => {
  const existingError = document.querySelector('.login-error-message');
  if (existingError) {
    existingError.remove();
  }
};

/**
 * Creates a user-friendly error message based on the provided Firebase authentication error code.
 * @param {string} errorCode - error code received from Firebase authentication.
 * @returns {string} - A user-friendly error message.
 */
const createErrorMessage = (errorCode) => {
  const errorMessages = {
    'auth/invalid-email': 'Invalid email address',
    'auth/invalid-credential': 'Incorrect password',
    'auth/user-disabled': 'User account is disabled',
    'auth/user-not-found': 'No user found with this email',
    'auth/wrong-password': 'Incorrect password',
    'auth/email-already-in-use': 'Email is already in use',
    'auth/weak-password': 'Password is too weak',
    'auth/missing-password': 'Please enter password',
    'auth/missing-email': 'Please enter email address'
  };

  return errorMessages[errorCode] || 'An unknown error occurred. Please try again.';
}