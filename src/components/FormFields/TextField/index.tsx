import React, { useCallback, useState } from 'react';
import { useController } from 'react-hook-form';
import Icon from '@react-native-vector-icons/material-icons';
import { useTheme } from 'styled-components/native';
import { InputContainer, InputIconButton, TextInput } from './styles';
import { ErrorMessage, Label } from '../FieldUtilitaries';
import { IIconPassword, ITextFieldProps } from './types';

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
  textArea,
  numberOfLines = 10,
  password = false,
  errorMessage,
  showErrorMessage = true,
  selectionColor,
  leftIcon,
  rightIcon,
  placeholder,
  required,
  disabled,
  customOnChange,
  containerProps,
  inputProps,
  onChangeText,
  onBlur,
  onEndEditing,
  onFocus,
}: ITextFieldProps) {
  const theme = useTheme();
  const [focused, setFocused] = useState(false);
  const [visibility, setVisibility] = useState<IIconPassword>(() =>
    password ? 'visibility' : 'visibility-off',
  );

  const {
    field,
    formState: { errors },
  } = name && control ? useController({ name, control }) : defaultController;
  const error = errorMessage || errors[field.name]?.message;

  const toggleFocus = useCallback(() => {
    setFocused((focused) => !focused);
  }, []);

  const toggleVisibility = useCallback(() => {
    setVisibility((visibility) => (visibility === 'visibility' ? 'visibility-off' : 'visibility'));
  }, []);

  return (
    <InputContainer {...containerProps}>
      <Label error={error} disabled={disabled} required={required}>
        {label}
      </Label>
      <TextInput
        multiline={textArea}
        {...inputProps}
        style={[
          textArea && {
            verticalAlign: 'top',
          },
          inputProps?.style,
        ]}
        numberOfLines={numberOfLines}
        value={value ?? field.value ?? undefined}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.secondary?.[300]}
        selectionColor={selectionColor || theme.colors.primary?.[300]}
        secureTextEntry={visibility === 'visibility'}
        editable={!disabled}
        focused={focused}
        error={!!error}
        leftIcon={leftIcon as any}
        rightIcon={leftIcon as any}
        password={password}
        textArea={textArea}
        onEndEditing={onEndEditing}
        onChangeText={(value) => {
          let newValue = value;

          if (onChangeText instanceof Function) {
            onChangeText(newValue);

            if (customOnChange instanceof Function) {
              customOnChange(newValue);
            }
          } else {
            field.onChange(newValue);

            if (customOnChange instanceof Function) {
              customOnChange(newValue);
            }
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
          error={showErrorMessage && error}
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
          error={!!(showErrorMessage && error)}
          direction="right"
          activeOpacity={rightIcon?.onPress ? 0.7 : 1}
          onPress={password ? toggleVisibility : rightIcon!.onPress}
        >
          {password ? (
            <Icon name={visibility} size={32} color={theme.colors.primary?.[300]} />
          ) : (
            rightIcon!.icon
          )}
        </InputIconButton>
      )}
      <ErrorMessage>{showErrorMessage ? error : null}</ErrorMessage>
    </InputContainer>
  );
}

export default TextField;
