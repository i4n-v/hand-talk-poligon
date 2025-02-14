import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { GlobalProvider } from '@/contexts/GlobalContext';
import theme from '@/global/theme';

const customRender: typeof render = (ui, renderOptions) => {
  return render(
    <GlobalProvider>
      <ThemeProvider theme={theme}>{ui}</ThemeProvider>
    </GlobalProvider>,
    renderOptions,
  );
};

export { customRender as render };
