import { StyleSheet } from 'react-native';
import styled, { useTheme } from 'styled-components/native';

const Backdrop = styled.Pressable`
  background-color: "rgba(0, 0, 0, 0.4)";
`;

export { Backdrop };

const styles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.secondary?.[1000],
      borderRadius: 12,
      ...theme.shadows[0],
    },
    contentContainer: {
      backgroundColor: theme.colors.secondary?.[1000],
    },
    indicatorContainer: {
      backgroundColor: theme.colors.secondary?.[1000],
    },
    indicator: {
      backgroundColor: theme.colors.primary?.[500],
    },
  });
};

export default styles;
