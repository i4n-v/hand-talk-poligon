import React from 'react';
import { render } from '@/configs/jest';
import { SpinnerLoading } from '@/components/Loadings';

describe('<SpinnerLoading />', () => {
  test('Renders loading', () => {
    const { getByTestId } = render(<SpinnerLoading />);

    const loading = getByTestId('loading');
    expect(loading).toBeOnTheScreen();
  });
});
