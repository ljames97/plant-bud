// plantLogRender.test.js

import { domElements } from '../../components/global/dom-utils/elementsManager.js';
import { renderMyPlants, __RewireAPI__ as plantLogRewireAPI } from '../../components/plant-log/plantLogMain.js';

jest.mock('../../components/global/dom-utils/elementsManager.js');

describe('Plant Log Integration Tests', () => {
  let mockPlants;

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
      },
      {
        id: 2,
        name: 'Plant 2',
        description: 'Another beautiful plant',
        image: 'plant2.png'
      }
    ];

    domElements.plantLogEl = document.querySelector('.plant-log');

    const mockPlantLog = {
      getUserPlantLog: jest.fn().mockReturnValue(mockPlants),
    };

    plantLogRewireAPI.__Rewire__('plantLog', mockPlantLog)
  });

  afterEach(() => {
    jest.clearAllMocks();
    plantLogRewireAPI.__ResetDependency__('plantLog');
  });

  test('should render plants in the plant log', () => {
    renderMyPlants();

    const userPlantsContainer = document.querySelector('.user-plants');
    const plantItems = userPlantsContainer.querySelectorAll('.user-plant');

    expect(plantItems.length).toBe(mockPlants.length);

    plantItems.forEach((item, index) => {
      expect(item.querySelector('.plant-grid-title').textContent).toBe(mockPlants[index].name);
      expect(item.querySelector('.plant-image').src).toBe(`http://localhost/${mockPlants[index].image}`)    });
  });
});