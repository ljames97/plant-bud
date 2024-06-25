import { register, login, logout } from './auth.js';
import { uploadImageToFirebase, deleteImageFromFirebase, addPlantToFirebase, getUserPlantsFromFirebase, updatePlantInFirebase, deletePlantFromFirebase, isFirebaseStorageUrl } from './db.js';
import { firebaseConfig, auth, db, storage } from './firebaseConfig.js';

export { 
  register, login, logout,
  uploadImageToFirebase, deleteImageFromFirebase, addPlantToFirebase, getUserPlantsFromFirebase, updatePlantInFirebase, deletePlantFromFirebase, isFirebaseStorageUrl,
  firebaseConfig, auth, db, storage
}