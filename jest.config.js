module.exports = {
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/__mocks__/fileMock.js', // Добавляем маппинг для .svg
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect', // Подключение расширений для тестов
  ],
};
