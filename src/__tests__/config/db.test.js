// db.test.js

import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { addPlantToFirebase, deleteImageFromFirebase, deletePlantFromFirebase, getUserPlantsFromFirebase, updatePlantInFirebase, uploadImageToFirebase, __RewireAPI__ as dbRewireAPI } from "../../config/db.js";
import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { isFirebaseStorageUrl } from "../../config/utils.js";

jest.mock('../../config/utils.js');

jest.mock('firebase/firestore', () => ({
  getFirestore: jest.fn(() => ({})),
  addDoc: jest.fn(),
  collection: jest.fn(),
  getDocs: jest.fn(),
  query: jest.fn(),
  where: jest.fn(),
  updateDoc: jest.fn(),
  doc: jest.fn(),
  deleteDoc: jest.fn()
}));

jest.mock('firebase/storage', () => ({
  getStorage: jest.fn(),
  ref: jest.fn(),
  uploadBytes: jest.fn(),
  getDownloadURL: jest.fn(),
  deleteObject: jest.fn()
}));

describe('db', () => {
  let mockDeleteImageFromFirebase;

  beforeEach(() => {
    mockDeleteImageFromFirebase = jest.fn();
    dbRewireAPI.__Rewire__('deleteImageFromFirebase', mockDeleteImageFromFirebase);
  });

  afterEach(() => {
    dbRewireAPI.__ResetDependency__('deleteImageFromFirebase');
    jest.clearAllMocks();
  });

  describe('uploadImageToFirebase', () => {
    let mockStorage;
    let mockStorageRef;
    let mockImageFile;
    let folder;

    beforeEach(() => {
      mockStorage = {};
      mockStorageRef = {};
      mockImageFile = new File(["dummy content"], "example.png", { type: "image/png" });
      folder = 'testFolder';

      getStorage.mockReturnValue(mockStorage);
      ref.mockReturnValue(mockStorageRef);
      uploadBytes.mockResolvedValue();
      getDownloadURL.mockResolvedValue('https://example.com/example.png');
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    test('should upload image and return download URL', async () => {
      const downloadURL = await uploadImageToFirebase(mockImageFile, folder);

      expect(getStorage).toHaveBeenCalledTimes(2);
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
      mockStorage = {};
      mockStorageRef = {};
      imageUrl = 'https://firebasestorage.googleapis.com/v0/b/test-bucket/o/images%2Fexample.png?alt=media';
      nonPermanentImageUrl = 'https://firebasestorage.googleapis.com/v0/b/test-bucket/o/images/original%2Foriginal%2Fexample.png?alt=media';

      getStorage.mockReturnValue(mockStorage);
      ref.mockReturnValue(mockStorageRef);
      deleteObject.mockResolvedValue();
    });

    afterEach(() => {
      jest.clearAllMocks();
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
      userId = 123;
      plant = { name: 'plant' };
      dbName = 'plants';

      addDoc.mockResolvedValue( { id: 1 } );
      collection.mockReturnValue(mockCollectionRef);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    test('should add new plant to firebase', async () => {
      await addPlantToFirebase(userId, plant, dbName);

      await expect(addDoc).toHaveBeenCalledWith(mockCollectionRef, {
        userId,
        ...plant,
        createdAt: (expect.any(Date))
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
    let userId, dbName;
    const plant = {plantID: 1, name: 'snake plant', dificulty: 'beginner'};
    const docs = [{id: 12345, data: jest.fn().mockReturnValue(plant)}];

    beforeEach(() => {
      userId = 123,
      dbName = 'plants'

      getDocs.mockResolvedValue(docs);
      query.mockReturnValue(true);
      where.mockReturnValue(true);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    test('should throw error if userId is undefined and retur empty array', async () => {
      userId = null;

      const plants = await getUserPlantsFromFirebase(userId, dbName);

      expect(plants.length).toBe(0);
    });

    test('should return array of plants', async () => {
      const plants = await getUserPlantsFromFirebase(userId, dbName);
      expect(plants.length).toBe(1);
    });

    test('should throw error if fetching plants failed', async () => {
      const errorMessage = 'Failed to fetch docs';
      getDocs.mockRejectedValue(new Error(errorMessage));

      await expect(getUserPlantsFromFirebase(userId, dbName)).rejects.toThrow(errorMessage);
    });
  });

  describe('updatePlantInFirebase', () => {
    let plantId, plantData, dbName, mockPlantRef

    beforeEach(() => {
      plantId = 1;
      plantData = {
        name: 'snake plant',
        dificulty: 'beginner'
      };
      dbName = 'plants';

      mockPlantRef = 123;
      doc.mockReturnValue(mockPlantRef);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    test('should update plant data', async () => {
      await updatePlantInFirebase(plantId, plantData, dbName);

      await expect(updateDoc).toHaveBeenCalledWith(mockPlantRef, plantData);
    });
  });

  describe('deletePlantFromFirebase', () => {
    let plantId, dbName, plant;

    beforeEach(() => {
      plantId = 1;
      plant = {
        name: 'snake plant',
        dificulty: 'beginner',
        image: '123.png'
      };
      dbName = 'plants';

    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    test('should delete plant from firebase', async () => {
      await deletePlantFromFirebase(plantId, dbName, plant);

      expect(deleteDoc).toHaveBeenCalled;
      expect(mockDeleteImageFromFirebase).toHaveBeenCalledWith(plant.image, true);
    });

    test('should not delete if dbName is original', async () => {
      dbName = 'original';
      await deletePlantFromFirebase(plantId, dbName, plant);

      expect(deleteDoc).toHaveBeenCalled;
      expect(mockDeleteImageFromFirebase).not.toHaveBeenCalled();
    });
  });
});