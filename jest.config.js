module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: [ "<rootDir>/app/__tests__/**/*.spec.ts"],
  testPathIgnorePatterns: [ "/cypress/"]
};