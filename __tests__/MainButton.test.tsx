import React from 'react';
import { MainButton } from '@/components/Buttons';
import { render } from '@/configs/jest';
import { fireEvent } from '@testing-library/react-native';

describe('<MainButton />', () => {
  test('Renders button', () => {
    const { getByRole } = render(<MainButton>Botão</MainButton>);

    const button = getByRole('button');
    expect(button).toBeOnTheScreen();
  });

  test('Button is disabled', () => {
    const { getByRole } = render(<MainButton disabled>Botão</MainButton>);

    const button = getByRole('button');

    expect(button.props.accessibilityState.disabled).toBe(true);
  });

  test('Button is loading', () => {
    const { getByRole } = render(<MainButton loading>Botão</MainButton>);

    const button = getByRole('button');

    expect(button.props.accessibilityState.disabled).toBe(true);
  });

  test('Press button', () => {
    const onPress = jest.fn();
    const { getByRole } = render(<MainButton onPress={onPress} />);

    const button = getByRole('button');

    fireEvent.press(button);

    expect(onPress).toHaveBeenCalledTimes(1);
  });

  test('Press disable button', () => {
    const onPress = jest.fn();
    const { getByRole } = render(<MainButton onPress={onPress} disabled />);

    const button = getByRole('button');

    fireEvent.press(button);

    expect(onPress).toHaveBeenCalledTimes(0);
  });
});
