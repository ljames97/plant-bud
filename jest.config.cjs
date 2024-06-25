// jest.config.cjs
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  displayName: "Regular Test",
  testMatch: ["<rootDir>/src/__tests__/**/*.test.js"],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  transform: {
    '^.+\\.js$': ['babel-jest', { configFile: './babel.config.cjs' }]
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.cjs'],
};