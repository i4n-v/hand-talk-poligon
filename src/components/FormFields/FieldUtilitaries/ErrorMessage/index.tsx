import React from 'react';
import { IErrorMessageProps } from './types';
import { ErrorMessageContainer } from './styles';

export default function ErrorMessage({ children }: IErrorMessageProps) {
  if (!children) return null;

  return <ErrorMessageContainer>{children}</ErrorMessageContainer>;
}
