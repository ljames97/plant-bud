import { initApp } from '../app';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config';

jest.mock('firebase/auth');
jest.mock('../config/firebaseConfig.js');
jest.mock('../app.js');

describe('index.js', () => {
  let dashboard;

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="dashboard-page hidden"></div>
    `;
    dashboard = document.querySelector('.dashboard-page');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should show dashboard and initialize app if user is logged in', async () => {
    const mockUser = { uid: '123' };
    onAuthStateChanged.mockImplementation((auth, callback) => callback(mockUser));

    await import('../index.js');
    document.dispatchEvent(new Event('DOMContentLoaded'));

    expect(dashboard.classList.contains('hidden')).toBe(false);
    expect(initApp).toHaveBeenCalledWith(mockUser.uid);
  });

  test('should hide dashboard and redirect to login if user is not logged in', async () => {
    onAuthStateChanged.mockImplementation((auth, callback) => callback(null));

    delete window.location;
    window.location = { href: '' };

    await import('../index.js');
    document.dispatchEvent(new Event('DOMContentLoaded'));

    expect(dashboard.classList.contains('hidden')).toBe(true);
  });
});
