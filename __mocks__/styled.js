jest.mock('styled-components', () =>
  jest.requireActual('styled-components/native/dist/styled-components.native.cjs.js'),
);
