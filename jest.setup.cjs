// jest.setup.cjs

jest.mock('firebase/auth', () => {
  const originalModule = jest.requireActual('firebase/auth');
  document.body.innerHTML = `
  <div class="dashboard"></div>
  <div class="plant-log"></div>
  <div class="plant-quiz"></div>
  <div class="plant-library"></div>
  <div class="home-page"></div>
  <button class="my-plants-btn"></button>
  <button class="add-new-plant-btn"></button>
  <button class="quiz-btn"></button>
  <button class="library-btn"></button>
  <button class="home-btn"></button>
  <header></header>`
  return {
    ...originalModule,
    getAuth: jest.fn(() => ({
      currentUser: { uid: 'testUserId' }
    })),
    onAuthStateChanged: jest.fn((auth, callback) => {
      callback({ uid: 'testUserId' });
    })
  };
});

const dotenv = require('dotenv');
dotenv.config();

jest.spyOn(global.console, 'error').mockImplementation(() => {});