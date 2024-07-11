// src/auth.js

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";

/**
 * Registers a new user with the provided email and password using Firebase Authentication.
 * @param {String} email - user's email address.
 * @param {String} password - user's password.
 * @returns Returns the user object if the registration is successful.
 */
export const register = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error registering:", error);
    throw error;
  }
};

/**
 * Logs in a user with the provided email and password using Firebase Authentication.
 * @param {String} email - user's email address.
 * @param {String} password - user's password.
 * @returns Returns the user object if the login is successful.
 */
export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

/**
 * Logs out the currently authenticated user using Firebase Authentication.
 */
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error logging out:", error);
    throw error;
  }
};