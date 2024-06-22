/**
 * Project: Plant Care Assistant App - Draft Portfolio Project (PlantBud)
 *
 * Description:
 * A plant care assistant application for discovering suitable plants for the user's home as well as learning about and keeping track of their plants. 
 *
 * Version: 1.0.0
 * Author: Luke James
 * Created on: 09/01/2024
 * 
 */

import './components/global/global.css';
import { initApp } from "./app.js";
import { auth } from './config';
import { onAuthStateChanged } from 'firebase/auth';
import { initLogin } from './components/login/login';

onAuthStateChanged(auth, (user) => {
  const dashboard = document.querySelector('.dashboard-page')
  if (user) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        dashboard.classList.remove('hidden');
        initApp(user.uid);
      });
    } else {
      dashboard.classList.remove('hidden');
      initApp(user.uid);
    }
  } else {
    dashboard.classList.add('hidden');
    window.location.href = '/login.html';
  }
});