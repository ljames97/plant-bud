// auth.test.js

import { login, logout, register } from "../../config/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

jest.mock('firebase/app', () => ({
  initializeApp: jest.fn(() => ({})),
}));

jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(() => ({})),
  createUserWithEmailAndPassword: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
  signOut: jest.fn()
}));

jest.mock('firebase/firestore', () => ({
  getFirestore: jest.fn(() => ({})),
}));

jest.mock('firebase/storage', () => ({
  getStorage: jest.fn(() => ({})),
}));

describe('auth', () => {
  describe('register', () => {
    let email;
    let password;

    beforeEach(() => {
      email = '123@test.com';
      password = '123456';

      createUserWithEmailAndPassword.mockClear();
    });

    test('should return user data', async () => {
      createUserWithEmailAndPassword.mockResolvedValue({
        user: { uid: 'TEST' }
      });

      const user = await register(email, password);

      expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(expect.any(Object), email, password);
      expect(user.uid).toBe('TEST');
    });

    test('should throw error if registration fails', async () => {
      const errorMessage = 'Registration failed';

      createUserWithEmailAndPassword.mockRejectedValue(new Error(errorMessage));

      await expect(register(email, password)).rejects.toThrow(errorMessage);

      expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(expect.any(Object), email, password);
    });
  });

  describe('login', () => {
    let email;
    let password;

    beforeEach(() => {
      email = '123@test.com';
      password = '123456';

      signInWithEmailAndPassword.mockClear();
    });

    test('should return user data', async () => {
      signInWithEmailAndPassword.mockResolvedValue({
        user: { uid: 'TEST' }
      });

      const user = await login(email, password);

      expect(signInWithEmailAndPassword).toHaveBeenCalledWith(expect.any(Object),email, password);
      expect(user.uid).toBe('TEST');
    });

    test('should throw error if login fails', async () => {
      const errorMessage = 'Registration failed';

      signInWithEmailAndPassword.mockRejectedValue(new Error(errorMessage));

      await expect(login(email, password)).rejects.toThrow(errorMessage);

      expect(signInWithEmailAndPassword).toHaveBeenCalledWith(expect.any(Object), email, password);
    });
  });

  describe('logout', () => {
    test('should call signOUt with authentication', async () => {
      await logout();

      expect(signOut).toHaveBeenCalledWith(expect.any(Object));
    });

    test('should throw error if logout fails', async () => {
      const errorMessage = 'Registration failed';

      signOut.mockRejectedValue(new Error(errorMessage));

      await expect(logout()).rejects.toThrow(errorMessage);
      expect(signOut).toHaveBeenCalledWith(expect.any(Object));
    });
  });
});
