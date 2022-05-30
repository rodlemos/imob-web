import styled from 'styled-components';

interface ButtonProps {
  color?: string;
}

export const Container = styled.button<ButtonProps>`
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 0.6em 1.2em;
  background-color: ${({ color, theme }) => color ?? theme.colors.orange_400};
  border: transparent;
  border-radius: 60px;
  color: white;
`;
