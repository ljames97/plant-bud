// jest.mock('firebase/auth', () => {
//   const originalModule = jest.requireActual('firebase/auth');
//   return {
//     ...originalModule,
//     getAuth: jest.fn(() => ({
//       currentUser: { uid: 'testUserId' }
//     })),
//     onAuthStateChanged: jest.fn((auth, callback) => {
//       callback({ uid: 'testUserId' });
//     })
//   };
// });