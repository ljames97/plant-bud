import { register, login, logout, deleteAccount } from './auth.js';
import { uploadImageToFirebase, deleteImageFromFirebase, addPlantToFirebase, getUserPlantsFromFirebase, updatePlantInFirebase, deletePlantFromFirebase } from './db.js';
import { firebaseConfig, auth, db, storage } from './firebaseConfig.js';
import { isFirebaseStorageUrl } from './utils.js';

export { 
  register, login, logout, deleteAccount,
  uploadImageToFirebase, deleteImageFromFirebase, addPlantToFirebase, getUserPlantsFromFirebase, updatePlantInFirebase, deletePlantFromFirebase,
  firebaseConfig, auth, db, storage,
  isFirebaseStorageUrl
}