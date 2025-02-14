import React, { useEffect } from 'react';
import { render } from '@/configs/jest';
import { FullPageLoading } from '@/components/Loadings';
import { useLoading } from '@/hooks';

const FullPageLoadingWithState = ({ isLoading = true }) => {
  const loading = useLoading();

  useEffect(() => {
    loading(isLoading);
  }, [isLoading]);

  return <FullPageLoading />;
};

describe('<SpinnerLoading />', () => {
  test('Renders full page loading active', () => {
    const { getByTestId } = render(<FullPageLoadingWithState isLoading={true} />);

    const loading = getByTestId('full-loading');
    expect(loading).toBeOnTheScreen();
  });

  test('Renders full page loading inactive', () => {
    const { queryByTestId } = render(<FullPageLoadingWithState isLoading={false} />);

    const loading = queryByTestId('full-loading');
    expect(loading).toBeNull();
  });
});
