// public/login.js
import { auth } from '../../config';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

document.getElementById('login-button').addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      window.location.href = '/index.html'; // Redirect to main app
    })
    .catch((error) => {
      console.error('Error logging in: ', error);
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
    });
});