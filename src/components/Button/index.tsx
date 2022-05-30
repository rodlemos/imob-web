import { ReactElement, ReactNode } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface ButtonProps {
  children: ReactNode;
  color?: string;
  icon?: ReactElement<IconBaseProps>;
}

export function Button({ children, color, icon }: ButtonProps) {
  return (
    <Container color={color}>
      {icon}
      {children}
    </Container>
  );
}
