import { IconType } from 'react-icons';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { useTheme } from 'styled-components';
import { Container } from './styles';

interface AttributeProps {
  icon: IconType;
  title: string;
  value: string | 'yes' | 'no';
}

export function Attribute({ icon: Icon, title, value }: AttributeProps) {
  const { colors } = useTheme();

  return (
    <Container>
      <Icon size={24} fill={colors.orange_400} />
      <h4>{title}</h4>
      {value === 'yes' && (
        <AiOutlineCheck
          size={20}
          fill={colors.green_200}
          style={{ marginTop: '.4rem' }}
        />
      )}
      {value === 'no' && (
        <AiOutlineClose size={20} fill="red" style={{ marginTop: '.4rem' }} />
      )}
      {value !== 'yes' && value !== 'no' && <p>{value}</p>}
    </Container>
  );
}
