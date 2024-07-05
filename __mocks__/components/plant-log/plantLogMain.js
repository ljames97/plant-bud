// __mocks__/plantLogManager.js
const userPlantLog = [];
const originalPlantLog = [];
const deletedPlantLog = [];
let userId = null;

export const plantLog = {
  setUserId: jest.fn((id) => {
    userId = id;
  }),
  initialisePlantLog: jest.fn((userPlants, originalPlants) => {
    userPlantLog.length = 0;
    originalPlantLog.length = 0;
    deletedPlantLog.length = 0;

    userPlants.forEach(plant => {
      userPlantLog.push(plant);
      if (plant.archived === true) {
        deletedPlantLog.push(plant);
      }
    });

    originalPlants.forEach(plant => {
      originalPlantLog.push(plant);
    });
  }),
  addToUserPlantLog: jest.fn(async (plant) => {
    userPlantLog.push(plant);
    originalPlantLog.push({ ...plant });
    return Promise.resolve();
  }),
  deletePlantFromLog: jest.fn(async (plant) => {
    const index = userPlantLog.findIndex(p => p.id === plant.id);
    if (index !== -1) {
      userPlantLog.splice(index, 1);
      deletedPlantLog.push(plant);
    }
    return Promise.resolve();
  }),
  updatePlantInfo: jest.fn(async (plant) => {
    const index = userPlantLog.findIndex(p => p.id === plant.id);
    if (index !== -1) {
      userPlantLog[index] = plant;
    }
    return Promise.resolve();
  }),
  removeFromDeletedPlants: jest.fn(async (plant) => {
    const index = deletedPlantLog.findIndex(p => p.id === plant.id);
    if (index !== -1) {
      deletedPlantLog.splice(index, 1);
      userPlantLog.push(plant);
    }
    return Promise.resolve();
  }),
  permanentDelete: jest.fn(async (plant) => {
    const index = deletedPlantLog.findIndex(p => p.id === plant.id);
    if (index !== -1) {
      deletedPlantLog.splice(index, 1);
    }
    const originalIndex = originalPlantLog.findIndex(p => p.id === plant.id);
    if (originalIndex !== -1) {
      originalPlantLog.splice(originalIndex, 1);
    }
    return Promise.resolve();
  }),
  getPlant: jest.fn((plant) => {
    return userPlantLog.find(p => p.id === plant.id) || null;
  }),
  getOriginalPlant: jest.fn((plant) => {
    return originalPlantLog.find(p => p.id === plant.id) || null;
  }),
  getPlantById: jest.fn((plantId, plantLogType) => {
    return plantLogType.find(plant => plant.id.toString() === plantId) || null;
  }),
  getUserPlantLog: jest.fn(() => {
    return userPlantLog;
  }),
  getOriginalPlantLog: jest.fn(() => {
    return originalPlantLog;
  }),
  getDeletedPlants: jest.fn(() => {
    return deletedPlantLog;
  }),
  deletePlantTask: jest.fn((plantTaskId) => {
    userPlantLog.forEach(plant => {
      if (plant.tasks) {
        const index = plant.tasks.findIndex(task => task.id === plantTaskId);
        if (index !== -1) {
          plant.tasks.splice(index, 1);
        }
      }
    });
  })
};
