// globalUtility.test.js

import { appendChildren, findItemInArray, getDate, getUserLocation, hideElements, isFile, randomiseArray, removeChildren, removeItemFromArray, roundToNearestWhole, showElements } from "../../../../components/global/utils";

describe('globalUtility', () => {

  describe('removeItemFromArray', () => {
    test('should remove item from array by id', () => {
      const array = [{ id: 1 }, { id: 2 }, { id: 3 }];
      const itemId = 2;
      const updatedArray = removeItemFromArray(array, itemId);
      expect(updatedArray).toEqual([{ id: 1 }, { id: 3 }]);
    });
  });

  describe('findItemInArray', () => {
    test('should find item in array by id', () => {
      const array = [{ id: 1 }, { id: 2 }, { id: 3 }];
      const itemId = 2;
      const foundItem = findItemInArray(array, itemId);
      expect(foundItem).toEqual({ id: 2 });
    });
  });

  describe('removeChildren', () => {
    test('should remove child elements from parent', () => {
      document.body.innerHTML = `
        <div id="parent">
          <div id="child1"></div>
          <div id="child2"></div>
        </div>
      `;
      const parent = document.getElementById('parent');
      const child1 = document.getElementById('child1');
      const child2 = document.getElementById('child2');
      removeChildren(parent, child1, child2);
      expect(parent.children.length).toBe(0);
    });
  });

  describe('appendChildren', () => {
    test('should append child elements to parent', () => {
      document.body.innerHTML = `<div id="parent"></div>`;
      const parent = document.getElementById('parent');
      const child1 = document.createElement('div');
      const child2 = document.createElement('div');
      appendChildren(parent, child1, child2);
      expect(parent.children.length).toBe(2);
    });
  });

  describe('hideElements', () => {
    test('should hide elements from the DOM', () => {
      document.body.innerHTML = `
        <div id="element1"></div>
        <div id="element2"></div>
      `;
      const element1 = document.getElementById('element1');
      const element2 = document.getElementById('element2');
      hideElements(element1, element2);
      expect(element1.style.display).toBe('none');
      expect(element2.style.display).toBe('none');
    });
  });

  describe('showElements', () => {
    test('should show hidden elements with specified display type', () => {
      document.body.innerHTML = `
        <div id="element1" style="display: none;"></div>
        <div id="element2" style="display: none;"></div>
      `;
      const element1 = document.getElementById('element1');
      const element2 = document.getElementById('element2');
      showElements('block', element1, element2);
      expect(element1.style.display).toBe('block');
      expect(element2.style.display).toBe('block');
    });
  });

  describe('randomiseArray', () => {
    test('should return a new array with specified number of random items', () => {
      const array = [1, 2, 3, 4, 5];
      const size = 2;
      const randomArray = randomiseArray(array, size);
      expect(randomArray.length).toBe(size);
      randomArray.forEach(item => expect(array).toContain(item));
    });
  });

  describe('getDate', () => {
    test('should return formatted date in dd/mm/yyyy format', () => {
      const formattedDate = getDate();
      const now = new Date();
      const day = String(now.getDate()).padStart(2, '0');
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const year = now.getFullYear();
      const expectedDate = `${day}/${month}/${year}`;
      expect(formattedDate).toBe(expectedDate);
    });
  });

  describe('getUserLocation', () => {
    test('should return user latitude and longitude', async () => {
      global.navigator.geolocation = {
        getCurrentPosition: jest.fn((success) => success({
          coords: {
            latitude: 51.1,
            longitude: 45.3
          }
        }))
      };
      const position = await getUserLocation();
      expect(position).toEqual({ latitude: 51.1, longitude: 45.3 });
    });

    it('should handle geolocation error', async () => {
      const error = new Error('Geolocation error');
      global.navigator.geolocation = {
        getCurrentPosition: jest.fn((success, failure) => failure(error))
      };
      await expect(getUserLocation()).rejects.toThrow('Geolocation error');
    });
  });

  describe('roundToNearestWhole', () => {
    test('should round a number to the nearest whole number', () => {
      expect(roundToNearestWhole(4.6)).toBe(5);
      expect(roundToNearestWhole(4.4)).toBe(4);
    });
  });

  describe('isFile', () => {
    test('should return true if the image is a File object', () => {
      const file = new File([''], 'filename.png', { type: 'image/png' });
      expect(isFile(file)).toBe(true);
    });

    test('should return false if the image is not a File object', () => {
      const imageUrl = 'http://example.com/image.png';
      expect(isFile(imageUrl)).toBe(false);
    });
  });
});
