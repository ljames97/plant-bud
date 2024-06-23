export const localEventManager = () => {
  return {
    removeAllEventListeners: jest.fn(),
    addEventListener: jest.fn()
  }
}