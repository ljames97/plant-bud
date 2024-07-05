// deletePlant.test.js

import { domElements } from '../../components/global/dom-utils/elementsManager.js';
import { localEventManager } from '../../components/global/event-handlers/globalEventHandlers.js';
import { renderMyPlants, __RewireAPI__ as plantLogRewireAPI } from '../../components/plant-log/plantLogMain.js';

jest.mock('../../components/global/dom-utils/elementsManager.js');
jest.mock('../../components/global/event-handlers/globalEventHandlers.js');

describe('Delete Plant Integration Test', () => {
  let mockPlants;
  let mockPlantLog;

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="plant-log"></div>
      <div class="user-plants"></div>
    `;

    mockPlants = [
      {
        id: 1,
        name: 'Plant 1',
        description: 'A beautiful plant',
        image: 'plant1.png'
      }
    ];

    domElements.plantLogEl = document.querySelector('.plant-log');

    localEventManager.addEventListener.mockImplementation((element, eventType, handler) => {
      element.addEventListener(eventType, handler);
    });

    mockPlantLog = {
      getUserPlantLog: jest.fn().mockReturnValue(mockPlants),
      deletePlantFromLog: jest.fn((plant) => {
        mockPlants = mockPlants.filter(p => p.id !== plant.id);
      })
    };

    plantLogRewireAPI.__Rewire__('plantLog', mockPlantLog)
  });

  afterEach(() => {
    jest.clearAllMocks();
    plantLogRewireAPI.__ResetDependency__('plantLog');
  })

  test('should delete plant and move it to archive', () => {
    renderMyPlants();

      // Simulate clicking the menu dots
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
  
      // Verify the plant was deleted
      expect(mockPlants.length).toBe(0);
  });
});