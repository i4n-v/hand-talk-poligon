import React, { act } from 'react';
import { render, screen } from '@testing-library/react-native';
import { App } from '@/screens';

describe('<App />', () => {
  test('Renders App component', async () => {
    render(<App />);

    await act(async () => {
      const app = screen.getByTestId('app');
      expect(app).toBeTruthy();
    });
  });
});

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.clearAllTimers();
  jest.useRealTimers();
});
