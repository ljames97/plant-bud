// Mocking DataTransfer
class DataTransfer {
  constructor() {
    this.files = [];
    this.items = {
      add: jest.fn((file) => {
        this.files.push(file);
      }),
      remove: jest.fn(),
    };
  }
}

global.DataTransfer = DataTransfer;

import { plantLog } from '../../components/plant-log';
import { uploadImageToFirebase } from '../../config';
import { renderAddPlantModal } from '../../components/add-plant';
import { localEventManager } from '../../components/global/event-handlers';
import { removeModal } from '../../components/global/dom-utils/modal.js';

jest.mock('../../config');
jest.mock('../../components/plant-log');
jest.mock('../../components/global/event-handlers/globalEventHandlers.js');
jest.mock('../../components/global/dom-utils/modal.js');

describe('Add Plant Integration Tests', () => {
  let mockImageFile;

  beforeEach(() => {
    uploadImageToFirebase.mockResolvedValue('https://example.com/example.png');
    plantLog.addToUserPlantLog.mockResolvedValue();

    document.body.innerHTML = `
      <div class="modal-overlay"></div>
      <button class="my-plants-btn"></button>
    `;

    localEventManager.addEventListener.mockImplementation((element, eventType, handler) => {
      if (element) {
        element.addEventListener(eventType, handler);
      } else {
        console.error('Element is undefined', { eventType, handler });
      }
    });

    mockImageFile = new File(['dummy content'], 'example.png', { type: 'image/png' });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should add a new plant and update the UI', async () => {
    renderAddPlantModal();

    // Step 1: Plant name
    document.querySelector('.new-input').value = 'My New Plant';
    document.querySelector('.next-button').click();
    console.log('Step 1 completed');

    // Step 2: Date added
    document.querySelector('.new-input').value = '2023-06-24';
    document.querySelector('.next-button').click();
    console.log('Step 2 completed');

    // Step 3: Description
    document.querySelector('.new-input').value = 'A beautiful plant';
    document.querySelector('.next-button').click();
    console.log('Step 3 completed');

    const fileInput = document.querySelector('.new-modal input[type="file"]');
    const dataTransfer = {
      files: [mockImageFile],
      items: {
        add: jest.fn()
      }
    };
    Object.defineProperty(fileInput, 'files', {
      value: dataTransfer.files,
      writable: true
    });
    fileInput.dispatchEvent(new Event('change'));
    console.log('Image upload step completed');

    // Mock file reader
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageInputImg = document.querySelector('.image-input-img');
      imageInputImg.src = e.target.result;
      imageInputImg.classList.add('large-image');
      document.querySelector('.upload-image-heading').classList.add('hidden');
      console.log('File read completed:', imageInputImg.src);
    };
    reader.readAsDataURL(mockImageFile);

    // Simulate form submission
    document.querySelector('.next-button').click();
    console.log('Form submitted');

    expect(removeModal).toHaveBeenCalled();

    // Verify that the plant was added to the user plant log
    expect(plantLog.addToUserPlantLog).toHaveBeenCalledWith(expect.objectContaining({
      name: 'My New Plant',
      dateAdded: '2023-06-24',
      description: 'A beautiful plant',
      image: 'https://example.com/example.png'
    }));
    console.log('addToUserPlantLog was called');

    // Verify that the modal was closed
    expect(document.querySelector('.new-modal')).toBeNull();
    console.log('Modal was closed');
  });
});
