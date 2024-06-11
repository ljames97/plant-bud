// src/db.js
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, where } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const addPlantToFirebase = async (userId, plant) => {
  try {
    const docRef = await addDoc(collection(db, "plants"), {
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

export const getUserPlantsFromFirebase = async (userId) => {
  if (!userId) {
    console.error("Error: userId is undefined");
    return []; // Return an empty array if userId is undefined
  }
  
  try {
    console.log("Fetching plants for user ID:", userId);
    const q = query(collection(db, "plants"), where("userId", "==", userId));
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

export const updatePlantInFirebase = async (plantId, plantData) => {
  try {
    const plantRef = doc(db, "plants", plantId);
    await updateDoc(plantRef, plantData);
  } catch (error) {
    console.error("Error updating plant:", error);
    throw error;
  }
};

export const deletePlantFromFirebase = async (plantId) => {
  try {
    await deleteDoc(doc(db, "plants", plantId));
  } catch (error) {
    console.error("Error deleting plant:", error);
    throw error;
  }
};