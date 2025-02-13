import { MainButton } from '@/components/Buttons';
import theme from '@/global/theme';
import { StyleSheet } from 'react-native';
import ColorPicker from 'reanimated-color-picker';
import styled from 'styled-components/native';

const InputWrapper = styled.View`
  width: 100%;
  row-gap: 8px;
`;

const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary?.[1000]};
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: ${({ theme }) => theme.shape.borderRadius + 'px'};
  border-width: 1.5px;
  border-color: ${({ theme }) => theme.colors.secondary?.[900]};
`;

const Picker = styled(ColorPicker)`
  width: 100%;
  gap: 12px;
`;

const SaveButton = styled(MainButton)`
  width: 150px;
  gap: 12px;
  margin-top: 32px;
`;

const styles = StyleSheet.create({
  thumb: { width: 20, height: 20 },
  panel: { height: 80 },
  preview: { height: 15 },
  previewText: {
    fontFamily: theme.typography.fonts.secondary.regular,
    fontSize: theme.typography.size.xxs,
  },
});

export default styles;

export { InputWrapper, Container, Picker, SaveButton };
