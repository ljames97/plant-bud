// plant-log.js



/**
 * Utility function to remove child element(s) from parent
 * @param {HTMLElement} parent 
 * @param  {...HTMLElement} children 
 */
const removeChildren = (parent, ...children) => {
  children.forEach(child => parent.removeChild(child));
}

/**
 * 
 * @returns search input field and search button
 */
const createSearchInput = () => {
  const searchForPlant = createElement('input', 'Find your plant!', null, 'plant-search', null);
  const searchButton = createElement('button', null, 'Find', 'search-btn', null);

  return { searchForPlant, searchButton };
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
 * Utility function to create a html element
 * @param {HTMLElement} type 
 * @param {string} placeholder 
 * @param {string} textContent 
 * @param {string} id 
 * @returns html element
 */
const createElement = (type, placeholder = '', textContent = '', classEl = '', id = '') => {
  const element = document.createElement(type);
  if (placeholder) element.placeholder = placeholder;
  if (textContent) element.textContent = textContent;
  if (classEl) element.classList.add(classEl);
  if (id) element.id = id;

  return element;
}

const renderNewPlantForm = () => {
  const { searchForPlant, searchButton } = createSearchInput();
  const main = document.querySelector('main');
  const plantLogTitle = document.querySelector('.plant-log-title');
  const addNewPlantBtn = document.querySelector('.add-new-plant-btn');

  removeChildren(main, plantLogTitle, addNewPlantBtn);
  appendChildren(main, searchForPlant, searchButton);

  searchButton.addEventListener('click', () => {
    renderPlantSearchResults(main);
    
  });
}

renderNewPlantForm();

const plantDirectoryManager = () => {
  let plantDirectory = [];
  return plantDirectory;
}

const renderPlantSearchResults = (userSearchInput) => {
  removeChildren()
  const foundPlant = plantDirectory.find(plant => plant.title === userSearchInput);
  if (foundPlant) {
    console.log('Plant found!');
    return;
  }
  if (!foundPlant) {
    console.log('No plant found!');
    return;
  }
}

const plantDirectory = plantDirectoryManager();


