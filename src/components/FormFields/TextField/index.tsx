import React, { ReactNode, useCallback, useState } from 'react';
import { useController } from 'react-hook-form';
import { useTheme } from 'styled-components/native';
import { InputContainer, InputIconButton, TextInput } from './styles';
import { ErrorMessage, Label } from '../FieldUtilitaries';
import { ITextFieldProps } from './types';
import { CloseEye, Eye } from '@/components/Icons';

const defaultController: any = {
  field: {},
  formState: {
    errors: {},
  },
};

function TextField({
  name,
  value,
  control,
  label,
  password = false,
  leftIcon,
  rightIcon,
  placeholder,
  required,
  disabled,
  containerProps,
  inputProps,
  showErrorMessage,
  errorMessage,
  selectionColor,
  onChangeText,
  onBlur,
  onFocus,
}: ITextFieldProps) {
  const theme = useTheme();
  const [focused, setFocused] = useState(false);
  const [hidden, setHidden] = useState(password);

  const {
    field,
    formState: { errors },
  } = name && control ? useController({ name, control }) : defaultController;
  const error = !showErrorMessage ? null : (errorMessage ?? errors[field.name]?.message);

  const toggleFocus = useCallback(() => {
    setFocused((focused) => !focused);
  }, []);

  const toggleVisibility = useCallback(() => {
    setHidden((hidden) => !hidden);
  }, []);

  return (
    <InputContainer {...containerProps}>
      <Label error={!!error} disabled={disabled} required={required}>
        {label}
      </Label>
      <TextInput
        {...inputProps}
        style={inputProps?.style}
        value={value ?? field.value ?? undefined}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.secondary?.[300]}
        selectionColor={selectionColor ?? theme.colors.primary?.[300]}
        secureTextEntry={hidden}
        editable={!disabled}
        aria-disabled={disabled}
        focused={focused}
        error={!!error}
        leftIcon={!!leftIcon}
        rightIcon={!!rightIcon}
        password={password}
        accessibilityLabel={label}
        accessibilityLabelledBy={label}
        onChangeText={(value) => {
          if (onChangeText instanceof Function) {
            onChangeText(value);
          } else {
            field.onChange(value);
          }
        }}
        onBlur={(event) => {
          toggleFocus();

          if (onBlur instanceof Function) {
            onBlur(event);
          }
        }}
        onFocus={(event) => {
          toggleFocus();

          if (onFocus instanceof Function) {
            onFocus(event);
          }
        }}
      />
      {leftIcon && (
        <InputIconButton
          accessible
          accessibilityLabel="Ícone"
          accessibilityRole="button"
          error={!!error}
          direction="left"
          icon={leftIcon.icon}
          activeOpacity={leftIcon.onPress ? 0.7 : 1}
          onPress={leftIcon.onPress}
        >
          {leftIcon.icon}
        </InputIconButton>
      )}
      {(rightIcon || password) && (
        <InputIconButton
          accessible
          accessibilityLabel="Ícone"
          accessibilityRole="button"
          error={!!error}
          direction="right"
          activeOpacity={rightIcon?.onPress ? 0.7 : 1}
          onPress={password ? toggleVisibility : rightIcon!.onPress}
        >
          {password && !hidden && <Eye />}
          {password && hidden && <CloseEye />}
          {!password && rightIcon!.icon}
        </InputIconButton>
      )}
      <ErrorMessage>{error}</ErrorMessage>
    </InputContainer>
  );
}

export default TextField;
