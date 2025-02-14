module.exports = {
  preset: 'react-native',
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-native-reanimated|@react-navigation|react-native-reanimated)/)',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/__mocks__/firebase.js',
    '<rootDir>/__mocks__/three.js',
    '<rootDir>/__mocks__/bottomsheet.js',
    '<rootDir>/__mocks__/styled.js',
  ],
};
