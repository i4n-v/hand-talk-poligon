import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import { useTheme } from 'styled-components/native';

function SpinnerLoading({ ...props }: ActivityIndicatorProps) {
  const theme = useTheme();

  return (
    <ActivityIndicator testID="loading" color={theme.colors.secondary?.[0]} size={32} {...props} />
  );
}

export default SpinnerLoading;
