const babelJest = require('babel-jest');


const root = "<rootDir>/src";

module.exports = {
  roots: [root],

  collectCoverageFrom: [`${root}/**/*.{js,jsx,ts,tsx}`],

  setupFilesAfterEnv: [`<rootDir>/setupTests.ts`],


  testMatch: [
    `${root}/**/__tests__/**/*.{js,jsx,ts,tsx}`,
    `${root}/**/*.{spec,test}.{js,jsx,ts,tsx}`,
  ],

  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },

  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
};
