// db.test.js

import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { addPlantToFirebase, db, deleteImageFromFirebase, isFirebaseStorageUrl, uploadImageToFirebase } from "../../config";
import { addDoc, collection } from "firebase/firestore";

jest.mock('../../config/utils.js');

jest.mock('firebase/firestore', () => ({
  getFirestore: jest.fn(() => ({})),
  addDoc: jest.fn(),
  collection: jest.fn()
}));

jest.mock('firebase/storage', () => ({
  getStorage: jest.fn(),
  ref: jest.fn(),
  uploadBytes: jest.fn(),
  getDownloadURL: jest.fn(),
  deleteObject: jest.fn()
}));

jest.mock('../../config/utils', () => {
  const originalModule = jest.requireActual('../../config/utils');
  return {
    ...originalModule,
    isFirebaseStorageUrl: jest.fn()
  };
});

describe('db', () => {
  describe('uploadImageToFirebase', () => {
    let mockStorage;
    let mockStorageRef;
    let mockImageFile;
    let folder;

    beforeEach(() => {
      jest.clearAllMocks();

      mockStorage = {};
      mockStorageRef = {};
      mockImageFile = new File(["dummy content"], "example.png", { type: "image/png" });
      folder = 'testFolder';

      getStorage.mockReturnValue(mockStorage);
      ref.mockReturnValue(mockStorageRef);
      uploadBytes.mockResolvedValue();
      getDownloadURL.mockResolvedValue('https://example.com/example.png');
    });

    test('should upload image and return download URL', async () => {
      const downloadURL = await uploadImageToFirebase(mockImageFile, folder);

      expect(getStorage).toHaveBeenCalledTimes(1);
      expect(ref).toHaveBeenCalledWith(mockStorage, `${folder}/${mockImageFile.name}`);
      expect(uploadBytes).toHaveBeenCalledWith(mockStorageRef, mockImageFile);
      expect(getDownloadURL).toHaveBeenCalledWith(mockStorageRef);
      expect(downloadURL).toBe('https://example.com/example.png');
    });

    test('should throw error if upload fails', async () => {
      const errorMessage = 'Upload failed';
      uploadBytes.mockRejectedValue(new Error(errorMessage));

      await expect(uploadImageToFirebase(mockImageFile, folder)).rejects.toThrow(errorMessage);

      expect(getStorage).toHaveBeenCalledTimes(1);
      expect(ref).toHaveBeenCalledWith(mockStorage, `${folder}/${mockImageFile.name}`);
      expect(uploadBytes).toHaveBeenCalledWith(mockStorageRef, mockImageFile);
    });
  });

  describe('deleteImageFromFirebase', () => {
    let mockStorage, mockStorageRef;
    let imageUrl, nonPermanentImageUrl;

    beforeEach(() => {
      jest.clearAllMocks();

      mockStorage = {};
      mockStorageRef = {};
      imageUrl = 'https://firebasestorage.googleapis.com/v0/b/test-bucket/o/images%2Fexample.png?alt=media';
      nonPermanentImageUrl = 'https://firebasestorage.googleapis.com/v0/b/test-bucket/o/images/original%2Foriginal%2Fexample.png?alt=media';

      getStorage.mockReturnValue(mockStorage);
      ref.mockReturnValue(mockStorageRef);
      deleteObject.mockResolvedValue();
    });

    test('should skip deletion if URL is not from Firebase Storage', async () => {
      isFirebaseStorageUrl.mockReturnValue(false);

      await deleteImageFromFirebase(imageUrl);

      expect(ref).not.toHaveBeenCalled();
      expect(deleteObject).not.toHaveBeenCalled();
    });

    test('should skip deletion if it is not a permanent delete and the URL includes /original', async () => {
      isFirebaseStorageUrl.mockReturnValue(true);

      await deleteImageFromFirebase(nonPermanentImageUrl);

      expect(ref).not.toHaveBeenCalled();
      expect(deleteObject).not.toHaveBeenCalled();
    });

    test('should delete the image from Firebase Storage', async () => {
      isFirebaseStorageUrl.mockReturnValue(true);

      await deleteImageFromFirebase(imageUrl, true);
      expect(deleteObject).toHaveBeenCalledWith(mockStorageRef);
    });

    test('should throw error if deletion fails', async () => {
      isFirebaseStorageUrl.mockReturnValue(true);
      const errorMessage = 'Deletion failed';
      deleteObject.mockRejectedValue(new Error(errorMessage));

      await expect(deleteImageFromFirebase(imageUrl, true)).rejects.toThrow(errorMessage);
      expect(deleteObject).toHaveBeenCalledWith(mockStorageRef);
    });
  });

  describe('addPlantToFirebase', () => {
    let userId, plant, dbName, mockCollectionRef

    beforeEach(() => {
      jest.clearAllMocks();

      userId = 123;
      plant = { name: 'plant' };
      dbName = 'plants';

      addDoc.mockResolvedValue( { id: 1 } );
      collection.mockReturnValue(mockCollectionRef);
    });

    test('should add new plant to firebase', async () => {
      await addPlantToFirebase(userId, plant, dbName);

      await expect(addDoc).toHaveBeenCalledWith(mockCollectionRef, {
        userId,
        ...plant,
        createdAt: new Date()
      });
    });

    test('should throw error if adding plant fails', async () => {
      const errorMessage = 'Add plant failed';
      addDoc.mockRejectedValue(new Error(errorMessage));

      await expect(addPlantToFirebase(userId, plant, dbName)).rejects.toThrow(errorMessage);
      expect(addDoc).toHaveBeenCalledWith(mockCollectionRef, {
        userId,
        ...plant,
        createdAt: (expect.any(Date))
      });
    });
  });

  describe('getUserPlantsFromFirebase', () => {
    
  });
});