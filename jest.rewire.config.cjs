const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  displayName: "Rewire Test",
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ["<rootDir>/src/__tests__/**/*.rewire.test.js"],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^domElements$': '<rootDir>/__mocks__/components/global/dom-utils/elementsManager.js' // Ensure this maps correctly
  },
  transform: {
    '^.+\\.js$': ['babel-jest', { configFile: './babel.rewire.config.cjs' }]
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.cjs'],
};