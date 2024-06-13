// src/db.js
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, where } from "firebase/firestore";
import { db, storage } from "./firebaseConfig";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";

export const uploadImageToFirebase = async (imageFile, folder) => {
  const storage = getStorage();
  try {
    const storageRef = ref(storage, `${folder}/${imageFile.name}`);
    console.log(`Uploading image: ${imageFile.name}`);
    await uploadBytes(storageRef, imageFile);
    const downloadURL = await getDownloadURL(storageRef);
    console.log(`Image uploaded successfully: ${downloadURL}`);
    return downloadURL;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

/**
 * Delete an image from Firebase Storage.
 * @param {string} imageUrl - URL of the image to be deleted.
 */
export const deleteImageFromFirebase = async (imageUrl, permanentDelete = false) => {
  if (!isFirebaseStorageUrl(imageUrl)) {
    console.log('Image URL is not from Firebase Storage, skipping deletion.');
    return;
  }

  console.log(imageUrl);

  // Check if it's permanent delete and skip if it's not supposed to be deleted
  if (!permanentDelete && imageUrl.includes('/original')) {
    console.log('Skipping deletion of original image.');
    return;
  }

  try {
    const imageRef = ref(storage, imageUrl);
    await deleteObject(imageRef);
    console.log('Image deleted successfully from Firebase Storage');
  } catch (error) {
    console.error("Error deleting image from Firebase Storage:", error);
    throw error;
  }
};

export const addPlantToFirebase = async (userId, plant, dbName) => {
  try {
    // Log the plant object to see its contents before adding to Firestore
    console.log('Adding plant to Firestore:', { userId, ...plant });

    // Add the plant to Firestore with the image URL
    const docRef = await addDoc(collection(db, dbName), {
      userId,
      ...plant,
      createdAt: new Date()
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding plant:", error);
    throw error;
  }
};

export const getUserPlantsFromFirebase = async (userId, dbName) => {
  if (!userId) {
    console.error("Error: userId is undefined");
    return []; // Return an empty array if userId is undefined
  }
  
  try {
    console.log("Fetching plants for user ID:", userId);
    const q = query(collection(db, dbName), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    const plants = [];
    querySnapshot.forEach((doc) => {
      plants.push({ id: doc.id, ...doc.data() });
    });
    console.log("Fetched plants:", plants);
    return plants;
  } catch (error) {
    console.error("Error getting user plants:", error);
    throw error;
  }
};

export const updatePlantInFirebase = async (plantId, plantData, dbName) => {
  try {
    const plantRef = doc(db, dbName, plantId);
    await updateDoc(plantRef, plantData);
  } catch (error) {
    console.error("Error updating plant:", error);
    throw error;
  }
};

export const deletePlantFromFirebase = async (plantId, dbName, plant) => {
  try {
    await deleteDoc(doc(db, dbName, plantId));
    if (plant && dbName !== 'original') {
      await deleteImageFromFirebase(plant.image, true);
    }
    console.log('deleted plant from firebase');
  } catch (error) {
    console.error("Error deleting plant:", error);
    throw error;
  }
};

const isFirebaseStorageUrl = (url) => {
  const firebaseStorageDomain = 'firebasestorage.googleapis.com';
  return url.includes(firebaseStorageDomain);
};