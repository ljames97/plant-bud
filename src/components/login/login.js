// public/login.js
import { auth } from '../../config';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { appendChildren, createElement } from '../global';

document.getElementById('login-button').addEventListener('click', () => {
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
});

document.getElementById('signup-button').addEventListener('click', () => {
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
});

const renderErrorMessage = (loginError) => {
  clearErrorMessage();

  const logo = document.querySelector('.plantbud-logo')
  const errorText = createErrorMessage(loginError.code)
  const errorMessage = createElement({tagName: 'p', textContent: errorText, classEl: ['login-error-message']});
  appendChildren(logo, errorMessage);
}

const clearErrorMessage = () => {
  const existingError = document.querySelector('.login-error-message');
  if (existingError) {
    existingError.remove();
  }
};

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