import styled from 'styled-components/native';

interface IInputOptionContainer {
  selected: boolean;
}

const InputOptionContainer = styled.Pressable<IInputOptionContainer>`
  padding: ${({ theme }) => theme.shape.padding + 'px'};
  border-bottom-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.secondary?.[900]};
  background-color: ${({ theme, selected }) => (selected ? theme.colors.primary?.[500] : 'transparent')};
`;

const InputOptionLabel = styled.Text<IInputOptionContainer>`
  font-family: ${({ theme }) => theme.typography.fonts.secondary.regular};
  font-size: ${({ theme }) => theme.typography.size.xs + 'px'};
  color: ${({ theme }) => theme.colors.secondary?.[0]};
`;

export { InputOptionContainer, InputOptionLabel };
