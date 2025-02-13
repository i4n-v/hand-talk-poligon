import React, { ReactNode, useCallback, useState } from 'react';
import { useController } from 'react-hook-form';
import { useTheme } from 'styled-components/native';
import { InputContainer, InputIconButton, TextInput } from './styles';
import { ErrorMessage, Label } from '../FieldUtilitaries';
import { ITextFieldProps } from './types';
import { CloseEye, Eye } from '@/components/Icons';

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
}: ITextFieldProps) {
  const theme = useTheme();
  const [focused, setFocused] = useState(false);
  const [hidden, setHidden] = useState(password);

  const {
    field,
    formState: { errors },
  } = useController({ name, control });
  const error = errors[field.name]?.message;

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
        selectionColor={theme.colors.primary?.[300]}
        secureTextEntry={hidden}
        editable={!disabled}
        focused={focused}
        error={!!error}
        leftIcon={leftIcon as any}
        rightIcon={leftIcon as any}
        password={password}
        onChangeText={field.onChange}
        onBlur={toggleFocus}
        onFocus={toggleFocus}
      />
      {leftIcon && (
        <InputIconButton
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
      <ErrorMessage>{error as ReactNode}</ErrorMessage>
    </InputContainer>
  );
}

export default TextField;
