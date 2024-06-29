import { initApp } from '../app';
import { dashboardInit } from '../components/global/event-handlers';
import { plantLog } from '../components/plant-log';
import { getUserPlantsFromFirebase } from '../config';

// Mock the dependencies
jest.mock('../components/global/event-handlers', () => ({
  dashboardInit: jest.fn(),
}));

jest.mock('../components/plant-log', () => ({
  plantLog: {
    setUserId: jest.fn(),
    initialisePlantLog: jest.fn(),
  },
}));

jest.mock('../config', () => ({
  getUserPlantsFromFirebase: jest.fn(),
}));

describe('initApp', () => {
  const userId = '12345';
  const userPlants = [{ id: 1, name: 'Plant 1' }];
  const originalPlants = [{ id: 2, name: 'Original Plant 1' }];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should initialize dashboard, set user ID, fetch user plants, and initialize plant log', async () => {
    getUserPlantsFromFirebase
      .mockResolvedValueOnce(userPlants)
      .mockResolvedValueOnce(originalPlants);

    await initApp(userId);

    expect(dashboardInit).toHaveBeenCalled();
    expect(plantLog.setUserId).toHaveBeenCalledWith(userId);
    expect(getUserPlantsFromFirebase).toHaveBeenCalledWith(userId, 'plants');
    expect(getUserPlantsFromFirebase).toHaveBeenCalledWith(userId, 'original');
    expect(plantLog.initialisePlantLog).toHaveBeenCalledWith(userPlants, originalPlants);
  });

  test('should handle error if fetching user plants fails', async () => {
    const errorMessage = 'Failed to fetch user plants';
    getUserPlantsFromFirebase
      .mockRejectedValueOnce(new Error(errorMessage))
      .mockResolvedValueOnce(originalPlants);

    await expect(initApp(userId)).rejects.toThrow(errorMessage);

    expect(dashboardInit).toHaveBeenCalled();
    expect(plantLog.setUserId).toHaveBeenCalledWith(userId);
    expect(getUserPlantsFromFirebase).toHaveBeenCalledWith(userId, 'plants');
    expect(getUserPlantsFromFirebase).not.toHaveBeenCalledWith(userId, 'original');
    expect(plantLog.initialisePlantLog).not.toHaveBeenCalled();
  });
});