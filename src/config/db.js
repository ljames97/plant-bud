// src/db.js

import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, where } from "firebase/firestore";
import { auth, db, storage } from "./firebaseConfig";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { isFirebaseStorageUrl } from "./utils";

/**
 * Uploads an image file to Firebase Storage and returns the download URL.
 * @param {File} imageFile - image file to be uploaded.
 * @param {String} folder -  folder in Firebase Storage where the image will be stored.
 * @returns Download URL of the uploaded image.
 */
export const uploadImageToFirebase = async (imageFile, folder) => {
  const user = auth.currentUser;
  if (!user) {
    throw new Error("User not authenticated");
  }

  const userId = user.uid;
  const storagePath = `${folder}/${userId}/${imageFile.name}`;
  
  try {
    const storageRef = ref(storage, storagePath);
    await uploadBytes(storageRef, imageFile);
    const downloadURL = await getDownloadURL(storageRef);
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
    return;
  }
  // Check if it's permanent delete and skip if it's not supposed to be deleted
  if (!permanentDelete && imageUrl.includes('/original')) {
    return;
  }

  try {
    const imageRef = ref(storage, imageUrl);
    await deleteObject(imageRef);
  } catch (error) {
    console.error("Error deleting image from Firebase Storage:", error);
    throw error;
  }
};

/**
 * Adds a new plant document to the specified Firestore collection.
 * @param {String} userId - user's ID.
 * @param {Object} plant - plant data to be added;
 * @param {String} dbName - name of the Firestore collection.
 * @returns ID of the newly added document.
 */
export const addPlantToFirebase = async (userId, plant, dbName) => {
  try {
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

/**
 * Fetches plants for a given user from the specified Firestore collection.
 * @param {String} userId - user's ID.
 * @param {String} dbName - name of the Firestore collection.
 * @returns An array of plant objects.
 */
export const getUserPlantsFromFirebase = async (userId, dbName) => {
  if (!userId) {
    console.error("Error: userId is undefined");
    return []; // Return an empty array if userId is undefined
  }
  
  try {
    const q = query(collection(db, dbName), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    const plants = [];
    querySnapshot.forEach((doc) => {
      plants.push({ id: doc.id, ...doc.data() });
    });
    return plants;
  } catch (error) {
    console.error("Error getting user plants:", error);
    throw error;
  }
};

/**
 * Updates a plant document in the specified Firestore collection.
 * @param {String} plantId - firestore ID of the plant to be updated.
 * @param {Object} plantData - plant object
 * @param {String} dbName - name of the Firestore collection.
 */
export const updatePlantInFirebase = async (plantId, plantData, dbName) => {
  try {
    const plantRef = doc(db, dbName, plantId);
    await updateDoc(plantRef, plantData);
  } catch (error) {
    console.error("Error updating plant:", error);
    throw error;
  }
};

/**
 * Deletes a plant document from the specified Firestore collection.
 * Optionally deletes the associated image from Firebase Storage.
 * @param {String} plantId - ID of the plant document to be updated.
 * @param {String} dbName - name of the Firestore collection.
 * @param {Object} plant - used to check if the image should be deleted.
 */
export const deletePlantFromFirebase = async (plantId, dbName, plant) => {
  try {
    await deleteDoc(doc(db, dbName, plantId));
    if (plant && dbName !== 'original') {
      await deleteImageFromFirebase(plant.image, true);
    }
  } catch (error) {
    console.error("Error deleting plant:", error);
    throw error;
  }
};