# Test Documentation

## Overview
This document provides an overview of the testing strategy, implamented tests and plans for future testing. The primary goal of testing in this application is to demonstate testing knowledge and skills.


## Table of Contents
1. [Unit Tests](#unit-tests)
  - [Global Utilities](#global-utilities)
  - [App Initialisation](#component-tests)
2. [Integration Tests](#integration-tests)
3. [Testing Tools and Libraries](#testing-tools-and-libraries)
  - [Jest](#jest)
  - [Babel Rewire](#babel-rewire)
5. [Future Testing Plans](#future-testing-plans)

## Unit Tests

### Global Utilites

**Purpose:** Ensure core utility functions used throughout the application work correctly.

1. **DOM Utils:**
  - Functions for DOM manipulation.
  - Example:
    ```javascript
    test('should create a new HTML element with the specified tag name', () => {
      const element = createElement({tagName: 'div'});
      expect(element.tagName).toBe('DIV');
    });
    ```

2. **Event Handlers:**
  - Functions for global event handling.
  - Example:
    ```javascript
    test('should call prepareDashboard for button without active/dormant class', () => {
      const sectionName = 'MY_PLANTS';
      domElements.myPlantsBtn.classList.remove('dormant');

      sectionInit(sectionName);

      expect(prepareDashboard).toHaveBeenCalledWith(
        domElements.myPlantsBtn,
        expect.any(Function),
        domElements.quizBtn,
        domElements.addNewPlantBtn,
        domElements.libraryBtn,
        domElements.homeBtn
      );
      expect(domElements.myPlantsBtn.classList.contains('dormant')).toBe(true);
    });
    ```

3. **Utils:**
  - Functions for global utils not directly related to DOM manipulation.
  - Example:
    ```javascript
    describe('roundToNearestWhole', () => {
      test('should round a number to the nearest whole number', () => {
        expect(roundToNearestWhole(4.6)).toBe(5);
        expect(roundToNearestWhole(4.4)).toBe(4);
      });
    });
    ```

### App Initialisation

**Purpose:** Ensure app initialisation functions work correctly.

1. **Configuration:**
  - Functions for configuring firebase storage/authentication
  - Example:
    ```javascript
    test('should return user data', async () => {
      createUserWithEmailAndPassword.mockResolvedValue({
        user: { uid: 'TEST' }
      });

      const user = await register(email, password);

      expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(expect.any(Object), email, password);
      expect(user.uid).toBe('TEST');
    });
    ```

2. **App & Index:**
  - Functions for app initialisation after successful user login.
  - Example:
    ```javascript
    test('should show dashboard and initialize app if user is logged in', async () => {
      const mockUser = { uid: '123' };
      onAuthStateChanged.mockImplementation((auth, callback) => callback(mockUser));

      await import('../index.js');
      document.dispatchEvent(new Event('DOMContentLoaded'));

      expect(dashboard.classList.contains('hidden')).toBe(false);
      expect(initApp).toHaveBeenCalledWith(mockUser.uid);
    });
    ```

## Integration Tests

**Purpose:** Verify the interaction between different modules and components to ensure they work together as expected.

**Implemented Test Examples:**

1. **Login Integration Test:**
  - Tests user login and error handling
  - Example:
    ```javascript
    test('should authenticate user and redirect to app homePage on login', async () => {
      emailInput.value = 'test@email.com';
      passwordInput.value = '123456';
      
      loginButton.click();

      expect(mockLoginHandler).toHaveBeenCalled();
      expect(signInWithEmailAndPassword).toHaveBeenCalledWith(auth, 'test@email.com', '123456');
      expect(window.location.href).toBe('/index.html');
    });
    ```

2. **Delete Plant Integration Test**
  - Test deletion of plant from the userPlantLog and Firestore database.
  - Example: 
    ```javascript
    test('should delete plant and move it to archive', () => {
      renderMyPlants();

        const menuDots = document.querySelector('.plant-menu');
        if (menuDots) {
          menuDots.click();
        }
    
        const deleteButton = document.createElement('button');
        deleteButton.id = 'delete-plant-btn';
        deleteButton.textContent = 'Delete';
        document.body.appendChild(deleteButton);
    
        deleteButton.addEventListener('click', () => {
          const plant = mockPlants[0];
          mockPlantLog.deletePlantFromLog(plant);
        });
    
        deleteButton.click();
    
        expect(mockPlants.length).toBe(0);
    });
    ```
    
## Testing Tools and Libraries

### Jest

**Purpose:** Used for writing and running unit and integration tests.

**Usage:**
- **Running Tests:** Use the command `npm test` to run all tests.
- **Configuration:** Jest configuration can be found in the `jest.config.js` file.

### Babel Rewire

**Purpose:** Used for mocking functions in tests where two or more functions from the same module need to be mocked. There were issues with mocking multiple functions from same module using jest.

**Usage:**
- **Rewiring Dependencies:** The `__Rewire__` and `__ResetDependency__` methods are used to mock and reset dependencies for functions from the same module.
- **Configuration:** Babel configuration can be found in the `babel.config.js` file.
- **Example:**
    ```javascript
    import { resetSection, clearSection, __RewireAPI__ as sectionRewireAPI } from '../../../../components/global/dom-utils/sectionManipulation.js';

    describe('resetSection', () => {
      let mockClearSection;

      beforeEach(() => {
        mockClearSection = jest.fn();
        sectionRewireAPI.__Rewire__('clearSection', mockClearSection);
        document.body.innerHTML = `
          <div class="section"></div>
        `;
      });
    
      afterEach(() => {
        sectionRewireAPI.__ResetDependency__('clearSection');
        document.body.innerHTML = '';
        jest.clearAllMocks();
      });
    
      test('should call clear section with correct arguments and renderSection', () => {
        const renderSection = jest.fn();
    
        resetSection('.section', renderSection, 'PLANT_LOG');
    
        const section = document.querySelector('.section');
        expect(mockClearSection).toHaveBeenCalledWith(section, 'PLANT_LOG');
        expect(renderSection).toHaveBeenCalled();
      });
    });  
    ```

## Future Testing Plans

**Goals:**
- Complete the remaining unit tests for all functions and components.
- Develop more comprehensive integration tests covering all major interactions.
- Implement end-to-end tests to simulate full user journeys, eg. app initialisation using jest puppeteer.