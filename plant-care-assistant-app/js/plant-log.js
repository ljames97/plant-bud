// plant-log.js

/**
 * TODO:
 * - put functions into folders. Need a shared folder for utility functions
 * - create or find http request for plant directory with title, images etc
 * - form error and message at renderManualPlantForm error handling
 * - simple css for forms
 */

/**
 * Store userPlantLog and return utility functions related to the plant log
 * @returns functions to add, remove and retrieve plants from the userPlantLog
 */
const plantLogManager = () => {
  let userPlantLog = [];

  return {
    addToUserPlantLog: (plant) => {
      userPlantLog.push(plant);
    },
    deletePlantFromLog: (plant) => {
      const foundPlant = findItemInArray(userPlantLog, plant.id);
      if (foundPlant) {
        removeItemFromArray(userPlantLog, plant.id);
      } 
    },
    updatePlantInfo: (plant) => {
      const foundPlant = findItemInArray(userPlantLog, plant.id);
      if (foundPlant) {
        foundPlant.name = plant.name;
        foundPlant.dateAdded = plant.dateAdded;
        foundPlant.notes = plant.notes;
        foundPlant.image = plant.image;
      }
    },
    getPlant: (plant) => {
      const foundPlant = findItemInArray(userPlantLog, plant.id);
      if (foundPlant) {
        return foundPlant;
      } else {
        alert('Cannot find plant!');
      }
    },
    userPlantLog
  }
}

/**
 * Utility function to remove item from array
 * @param {any} array 
 * @param {number} itemId 
 * @returns 
 */
export const removeItemFromArray = (array, itemId) => {
  const updatedArray = array.filter(arrayItem => arrayItem.id !==itemId);
  return updatedArray;
}

/**
 * Utility function to find item in array
 * @param {any} array 
 * @param {number} itemId 
 * @returns 
 */
export const findItemInArray = (array, itemId) => {
  const foundItem = array.find(arrayItem => arrayItem.id === itemId);
  return foundItem;
}

/**
 * Utility function to remove child element(s) from parent
 * @param {HTMLElement} parent 
 * @param  {...HTMLElement} children 
 */
const removeChildren = (parent, ...children) => {
  children.forEach(child => {
    if (parent.contains(child)) {
      parent.removeChild(child);
    }
  });
}

/**
 * Create search input field for user to search for a plant
 * @returns search input field and search button
 */
const createSearchInput = () => {
  const userSearch = createElement({tagName: 'div', classEl: 'search-elements'});
  const searchForPlant = createElement({tagName: 'input', placeholder: 'Find your plant!', classEl: 'plant-search'});
  const searchButton = createElement({tagName: 'button', textContent: 'Find', classEl: 'search-btn'});
  const cancelSearchBtn = createElement({tagName: 'button', textContent: 'Cancel', classEl: 'cancel-search-btn'});

  return { userSearch, searchForPlant, searchButton, cancelSearchBtn };
}

/**
 * Utility function to append child element(s) to parent element
 * @param {HTMLElement} parent 
 * @param  {...HTMLElement} children 
 */
const appendChildren = (parent, ...children) => {
  children.forEach(child => parent.appendChild(child));
}

/**
 * Utility function to create a new html element
 * @param {HTMLElement} tagName 
 * @param {string} placeholder 
 * @param {string} textContent 
 * @param {string} id 
 * @returns html element
 */
const createElement = ( { tagName, placeholder = '', textContent = '', classEl = '', id = '', value = '' }) => {
  const element = document.createElement(tagName);
  if (placeholder) element.placeholder = placeholder;
  if (textContent) element.textContent = textContent;
  if (classEl) element.classList.add(classEl);
  if (id) element.id = id;
  if (value) element.value = value;

  return element;
}

/**
 * Render search form on screen
 */
const renderNewPlantSearch = () => {
  const { userSearch, searchForPlant, searchButton, cancelSearchBtn } = createSearchInput();
  const { mainSection, userPlantGrid } = domElements;

  hideInitialDomElements();
  hideElements(userPlantGrid);

  appendChildren(userSearch, searchForPlant, searchButton);
  appendChildren(mainSection, userSearch, cancelSearchBtn);

  localEventManager.addEventListener(searchButton, 'click', () => {
    searchButtonClickHandler(userSearch, searchForPlant, searchButton, cancelSearchBtn);
  });
  localEventManager.addEventListener(cancelSearchBtn, 'click', () => {
    cancelSearchButtonClickHandler(userSearch, mainSection, cancelSearchBtn);
  })
}

const cancelSearchButtonClickHandler = (userSearch, mainSection, cancelSearchBtn) => {
  removeChildren(mainSection, userSearch, cancelSearchBtn);
  resetDomElements();
}

const hideInitialDomElements = () => {
  const { plantLogTitle, addNewPlantBtn } = domElements;

  plantLogTitle.style.display = 'none';
  addNewPlantBtn.style.display = 'none';
}

const searchButtonClickHandler = (userSearch, searchForPlant, searchButton, cancelSearchBtn) => {
  renderPlantSearchResults(userSearch, searchForPlant, searchButton, cancelSearchBtn);
  localEventManager.removeEventListener(searchButton, 'click');
}

/**
 * Return most reused dom elements
 * @returns html elements
 */
const domElementsManager = () => {
  const mainSection = document.querySelector('main');
  const plantLogTitle = document.querySelector('.plant-log-title');
  const addNewPlantBtn = document.querySelector('.add-new-plant-btn');
  const userPlantGrid = document.querySelector('.user-plants');

  return { mainSection, plantLogTitle, addNewPlantBtn, userPlantGrid};
}

/**
 * Manage the plant directory
 */
const plantDirectoryManager = () => {
  let plantDirectory = [];
  return plantDirectory;
}

/**
 * Render results of user search
 * @param {HTMLElement} userSearchInput
 * @param {HTMLElement} mainSection
 * @returns 
 */
const renderPlantSearchResults = (userSearch, userSearchInput, searchButton, cancelSearchBtn) => {
  const foundPlant = plantDirectory.find(plant => plant.title === userSearchInput.value);
  if (foundPlant) {
    console.log('Plant found!');
    return;
  } else {
    const errorMessage = renderSearchErrorMessage('No plant found!');
    
    appendChildren(userSearch, errorMessage);
    renderManualPlantUploadBtn(userSearch, errorMessage, userSearchInput, searchButton, cancelSearchBtn);
  }
}

/**
 * Render search error message on screen
 * @param {HTMLElement} mainElement
 * @param {string} message
 */
const renderSearchErrorMessage = (message) => {
  const errorMessage = createElement({tagName:'h1', textContent: message, classEl: 'search-error-message'});
  
  return errorMessage;
}

/**
 * Render manual plant upload button on screen
 * @param {HTMLElement} mainElement 
 * @param {HTMLElement} errorMessage
 */
const renderManualPlantUploadBtn = (userSearch, errorMessage, userSearchInput, searchButton, cancelSearchBtn) => {
  const manualUploadBtn = createElement({tagName: 'button', textContent: 'Manual Upload', classEl: 'manual-upload-btn'});
  appendChildren(userSearch, manualUploadBtn);

  const manualUploadClickHandler = () => {
    renderManualPlantForm(userSearch, cancelSearchBtn);
    removeChildren(userSearch, manualUploadBtn, errorMessage, userSearchInput, searchButton);
  }

  const showButtonClickHandler = () => {
    localEventManager.addEventListener(searchButton, 'click', () => {
      showElements('block', errorMessage, manualUploadBtn);
    })
  }

  localEventManager.addEventListener(manualUploadBtn, 'click', manualUploadClickHandler);
  localEventManager.addEventListener(userSearchInput, 'click', () => {
    hideElements(errorMessage, manualUploadBtn);
    showButtonClickHandler(searchButton);
  });

  localEventManager.addEventListener(searchButton, 'click', searchButtonClickHandler)
}

/**
 * Render user plant form for manual plant entry.
 * Sets up event listeners for image upload and form submission. The image upload
 * listener reads the selected file and stores its data URL for later use.
 * @param {HTMLElement} mainElement 
 * @param {HTMLElement} manualUploadBtn
 * @param {HTMLElement} errorMessage 
 */
const renderManualPlantForm = (userSearch, cancelSearchBtn) => {
  const { plantForm, name, dateAdded, plantPhoto, notes, submitBtn } = createManualPlantForm();
  appendChildren(userSearch, plantForm);

  let imageDataUrl = [];

  localEventManager.addEventListener(plantPhoto, 'change', (event) => {
    imageChangeHandler(event, (dataUrl) => {
      imageDataUrl = dataUrl;
    })
  });

  localEventManager.addEventListener(submitBtn, 'click', (event) => {
    submitHandler(event, name, dateAdded, notes, imageDataUrl, plantLog, userSearch, plantForm, cancelSearchBtn);
  });
}

/**
 * Handle change event of user uploaded file
 * Reads the selected image file asynchronously and executes a callback with the
 * image's data URL when the read operation is complete.
 * @param {*} event 
 * @param {*} imageDataUrl 
 */
const imageChangeHandler = (event, callback) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        callback(e.target.result);
      }
      reader.readAsDataURL(file);
    };
}

/**
 * Validates the form data, creates a new plant object, adds it to the plant log,
 * and updates the UI to reflect the new addition.
 * @param {*} event 
 * @param {*} name 
 * @param {*} dateAdded 
 * @param {*} imageDataUrl 
 * @param {*} plantLog 
 * @param {*} mainElement 
 * @param {*} plantForm 
 * @returns 
 */
const submitHandler = (event, name, dateAdded, notes, imageDataUrl, plantLog, userSearch, plantForm, cancelSearchBtn) => {
  event.preventDefault();
  const { mainElement } = domElements;

  const dataValidation = validatePlantData(name.value, dateAdded.value, imageDataUrl);

  if (!dataValidation.isValid) {
    console.log(dataValidation.errors);
    return;
  }

  const newPlant = {
    name: name.value,
    dateAdded: dateAdded.value,
    notes: notes.value,
    image: imageDataUrl,
    id: Date.now()
  };

  plantLog.addToUserPlantLog(newPlant);
  addPlantToGrid(newPlant);

  removeChildren(userSearch, plantForm);
  cancelSearchBtn.remove();
  resetDomElements();
}

/**
 * Validate plant data and return error messages
 * @param {string} name 
 * @param {string} dateAdded 
 * @param {string} imageDataUrl 
 * @returns errors
 */
const validatePlantData = (name, dateAdded, imageDataUrl) => {
  let errors = [];

  if (name === '') {
    errors.push('Plant name is required.');
  } if (dateAdded === '') {
    errors.push('Date added required.');
  } if (imageDataUrl.length === 0) {
    errors.push('Upload a valid image');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Add and display a new plant on the userPlantGrid
 * @param {Object} newPlant 
 */
const addPlantToGrid = (newPlant) => {
  const { userPlantGrid } = domElements;
  const userPlantContainer = createElement({tagName: 'div', classEl: 'user-plant'});
  const plantImageContainer = createElement({tagName: 'div', classEl: 'plant-image-container'});
  const plantImage = createElement({tagName: 'img'});
  const plantTitle = createElement({tagName: 'h1', textContent: newPlant.name});
  plantImage.src = newPlant.image

  appendChildren(plantImageContainer, plantImage);
  appendChildren(userPlantContainer, plantImageContainer, plantTitle);
  appendChildren(userPlantGrid, userPlantContainer);

  localEventManager.addEventListener(plantImage, 'click', () => {
    renderPlantDetails(newPlant, userPlantGrid);
    hideElements(userPlantGrid);
    hideInitialDomElements();
  })
}

// Utility function
const hideElements = (...elements) => {
  elements.forEach(element => {
    element.style.display = 'none';
  });
}

// Utility function
const showElements = (displayType, ...elements) => {
  elements.forEach(element => {
    element.style.display = `${displayType}`;
  })
}

// const displayPlantDetails = (plant) => {
//   console.log(`${plant.name} page`);
// }

const resetDomElements = () => {
  const { plantLogTitle, addNewPlantBtn, userPlantGrid } = domElements;
  plantLogTitle.style.display = 'block';
  addNewPlantBtn.style.display = 'flex';
  userPlantGrid.style.display = 'grid';
}

/**
 * Creates form for user to upload plant manually
 * @returns user plant uplaad form
 */
const createManualPlantForm = () => {
  const plantForm = createElement({tagName: 'form', classEl: 'manual-plant-form'});
  const name = createElement({tagName: 'input', placeholder: 'Plant name'});
  const dateAdded = createElement({tagName: 'input', placeholder: 'Date added'});

  const plantPhoto = createElement({tagName: 'input', classEl: 'plant-photo-input'});
  plantPhoto.setAttribute('type', 'file');
  plantPhoto.setAttribute('accept', 'image/*');

  const submitBtn = createElement({tagName: 'button', textContent: 'Add My Plant'});
  // may add watering scheduele, similar plants etc.
  const notes = createElement({tagName: 'textarea', placeholder: 'Extra notes'})
  appendChildren(plantForm, name, dateAdded, plantPhoto, notes, submitBtn);

  return { plantForm, name, dateAdded, plantPhoto, notes, submitBtn };
}

/**
 * Centralized event manager for handling event listeners and to avoid memory leaks.
 * Allows adding and removing event listeners to elements and manages a registry of handlers.
 * @returns functions to add / remove event listeners
 */
const eventManager = () => {
  let handlers = {};

  return {
    addEventListener: (element, eventType, handler) => {
      if (!handlers[eventType]) {
        handlers[eventType] = [];
      }
      element.addEventListener(eventType, handler);
      handlers[eventType].push({ element, handler });
    },

    removeEventListener: (element, eventType) => {
      if (handlers[eventType]) {
        handlers[eventType] = handlers[eventType].filter(({ element: el, handler }) => {
          if (el === element) {
            element.removeEventListener(eventType, handler);
          }
        });
        handlers[eventType] = [];
      }
    }
  }
}

const localEventManager = eventManager();
const plantDirectory = plantDirectoryManager();
const plantLog = plantLogManager();
const domElements = domElementsManager();


/**
 * Sets up event listeners for the application. 
 * This includes listeners for searching plants, adding new plants, etc.
 */
const setUpEventListeners = () => {
  const { addNewPlantBtn } = domElements;
  localEventManager.addEventListener(addNewPlantBtn, 'click', renderNewPlantSearch);
}

const initDomElements = () => {
  setUpEventListeners();
}

initDomElements();

// plant-page.js
// TODO:
// - find btn doesnt work after typing into search box...
// - local storage
// - organise into folders
// - documentation for functions and folder introductions
// - cut down large functions
// - (plant requirements)
// - (store plant elements in plantLogManager so dont have to keep recreating them)
// - (css/UI considerations for the plant search. eg. perhaps a modal for the search instead of cancel button + animations)

const createDynamicPlantElements = () => {
  const plantTitle = createElement({tagName: 'h1', classEl: 'plant-title'});
  const plantImageContainer = createElement({tagName: 'div', classEl: 'plant-image-container'});
  const plantImage = createElement({tagName: 'img'});
  const plantDate = createElement({tagName: 'p', classEl: 'plant-date'});
  const plantNotes = createElement({tagName: 'p', classEl: 'plant-description'});

  return { plantTitle, plantImageContainer, plantImage, plantDate, plantNotes };
}

const renderPlantDetails = (plant, userPlantGrid) => {
  const { mainSection } = domElements;
  const subHeader = createElement({tagName: 'div', classEl: 'sub-header'});
  const backToDashboard = createElement({tagName: 'p', textContent: '← back to dashboard'});
  const editPlantDetailsBtn = createElement({tagName: 'button', textContent: 'Edit'});
  
  // elements could be stored in a manager function instead of beiong created again (these are same elements as in the plant grid)
  const { plantTitle, plantImageContainer, plantImage, plantDate, plantNotes } = dynamicPlantElements;
  plantTitle.textContent = plant.name;
  plantDate.textContent = plant.dateAdded;
  plantNotes.textContent = plant.notes;
  plantImage.src = plant.image;

  appendChildren(plantImageContainer, plantImage);
  appendChildren(subHeader, backToDashboard, editPlantDetailsBtn);

  appendChildren(mainSection, subHeader, plantTitle, plantDate, plantImageContainer, plantNotes);

  localEventManager.addEventListener(editPlantDetailsBtn, 'click', () => 
    toggleEditMode(plant, editPlantDetailsBtn, {plantTitle, plantDate, plantNotes, plantImageContainer, plantImage}))
  localEventManager.addEventListener(backToDashboard, 'click', () => {
    backToDashboardHandler(mainSection, userPlantGrid, subHeader, plantTitle, plantDate, plantImageContainer, plantNotes);
  })

  // add watering scheduele and other requirements (soil, light etc)
}

const dynamicPlantElements = createDynamicPlantElements();

const toggleEditMode = (plant, editBtn, elements) => {
  const isEditMode = editBtn.textContent === 'Edit';

  if (isEditMode) {
    editBtn.textContent = 'Save';

    elements.plantTitle.innerHTML = `<input type="text" class="edit-plant-title" value="${plant.name}">`;
    elements.plantDate.innerHTML = `<input type="text" class="edit-plant-date" value="${plant.dateAdded}">`;
    elements.plantNotes.innerHTML = `<textarea class="edit-plant-notes">${plant.notes}</textarea>`;

    const imageInput = document.createElement('input');
    imageInput.type = 'file';
    imageInput.classList.add('edit-plant-image');
    imageInput.accept = 'image/*';
    elements.plantImageContainer.insertBefore(imageInput, elements.plantImageContainer.firstChild);

    imageInput.addEventListener('change', (event) => {
      imageChangeHandler(event, (dataUrl) => {
        plant.image = dataUrl;
        elements.plantImage.src = dataUrl;
      });
    });

  } else {
    editBtn.textContent = 'Edit';

    const updatedName = document.querySelector('.edit-plant-title').value;
    const updatedDate = document.querySelector('.edit-plant-date').value;
    const updatedNotes = document.querySelector('.edit-plant-notes').value;
    // const updatedImageUrl = document.querySelector('edit-plant-image').value;

    plant.name = updatedName;
    plant.dateAdded = updatedDate;
    plant.notes = updatedNotes;
    // plant.imageDataUrl = updatedImageUrl;

    plantLog.updatePlantInfo(plant);
    refreshPlantGrid();

    elements.plantTitle.textContent = updatedName;
    elements.plantDate.textContent = updatedDate;
    elements.plantNotes.textContent = updatedNotes;

    const imageInput = document.querySelector('.edit-plant-image');
    if (imageInput) {
      imageInput.remove();
    }
  }
}

//   const renderDummyPlant = () => {
//   renderPlantDetails(dummyPlantData);
// }

// renderDummyPlant();

const setManualPlantRequirements = () => {

}

const backToDashboardHandler = (main, userPlantGrid, ...elements) => {
  removeChildren(main, ...elements)
  
  const displayType = 'grid';
  showElements(displayType, userPlantGrid)

  resetDomElements();
}

// dummy plants:

const dummyPlants = [
  {
    name: 'Spider Plant',
    dateAdded: '21-Jan',
    notes: 'A new plant with long spider-like leaves',
    image: '../public/dummy-plants/spider-plant.jpg',
    id: 1
  },
  {
    name: 'Apple Tree',
    dateAdded: '02-Feb',
    notes: 'An apple tree grown from seed, first time growing a real apple tree!',
    image: '../public/dummy-plants/apple-tree.jpg',
    id: 2
  },
  {
    name: 'Peace Lily',
    dateAdded: '12-Dec',
    notes: 'A peace lily with white flowers, best bloom in spring/summer',
    image: '../public/dummy-plants/peace-lily.jpg',
    id: 3
  }
]

dummyPlants.forEach(plant => {
  plantLog.addToUserPlantLog(plant);
})

plantLog.userPlantLog.forEach(plant => {
  addPlantToGrid(plant);
})

const refreshPlantGrid = () => {
  const { userPlantGrid } = domElements;
  userPlantGrid.innerHTML = '';

  plantLog.userPlantLog.forEach(plant => {
    addPlantToGrid(plant);
  })

}


