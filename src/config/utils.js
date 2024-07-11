// utils.js

/**
 * Checks if a URL belongs to Firebase Storage.
 * @param {Stirng} url - URL to be checked.
 * @returns {Boolean} - true or false.
 */
export const isFirebaseStorageUrl = (url) => {
  const firebaseStorageDomain = 'firebasestorage.googleapis.com';
  return url.includes(firebaseStorageDomain);
}