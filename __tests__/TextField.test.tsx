import React, { useEffect } from 'react';
import { render } from '@/configs/jest';
import { TextField } from '@/components/FormFields';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ITextFieldProps } from '@/components/FormFields/TextField/types';
import { screen, waitFor } from '@testing-library/react-native';

interface ITextFieldWithHookFormProps extends Omit<ITextFieldProps, 'control'> {
  hasError?: boolean;
}

const TextFieldWithHookForm = ({
  name = 'input',
  value = '',
  hasError,
  ...props
}: ITextFieldWithHookFormProps) => {
  const { control, trigger } = useForm({
    defaultValues: {
      [name]: value,
    },
    resolver: zodResolver(z.object({ [name]: z.string().min(1, 'Error message') })),
  });

  useEffect(() => {
    if (hasError) {
      trigger();
    }
  }, []);

  return <TextField name="input" control={control} {...props} />;
};

describe('<TextField />', () => {
  test('Renders text field', () => {
    const { getByTestId } = render(<TextFieldWithHookForm name="input" label="Input" />);

    const input = getByTestId('input');
    expect(input).toBeOnTheScreen();
  });

  test('Renders text field with default value', async () => {
    const { getByTestId } = render(
      <TextFieldWithHookForm name="input" label="Input" value="Default text" />,
    );

    const input = getByTestId('input');
    expect(input.props.children[1].props.value).toBe('Default text');
  });

  test('Renders text field with error message', async () => {
    render(<TextFieldWithHookForm name="input" label="Input" hasError />);

    await waitFor(() => {
      const errorMessage = screen.getByText(/Error message/i);
      expect(errorMessage).toBeOnTheScreen();
    });
  });

  test('Renders text field disabled', async () => {
    const { getByTestId } = render(<TextFieldWithHookForm name="input" label="Input" disabled />);

    const input = getByTestId('input');
    expect(input.props.children[1].props.editable).toBe(false);
  });
});
