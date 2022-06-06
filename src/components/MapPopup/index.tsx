import { IoArrowRedoOutline } from 'react-icons/io5';
import { useTheme } from 'styled-components';
import { getAttributeIcon } from '../../util/attributeIcons';
import { data } from '../../util/data';
import { Attribute } from '../Attribute';
import { Button } from '../Button';
import { Container } from './styles';

export function MapPopup() {
  const { attributes } = data;
  const { colors } = useTheme();

  return (
    <Container>
      <h2>Two-story house</h2>

      <img
        src="https://i.pinimg.com/originals/0b/7e/8a/0b7e8a02ed3c2d3611675f678fecead9.jpg"
        alt=""
      />

      <div>
        <header>
          <span>Sell/Rent</span>
          <h3>$1.600.000</h3>
        </header>

        <div className="attributes-wrapper">
          {attributes.map((attribute) => (
            <Attribute
              key={attribute.id}
              icon={getAttributeIcon(attribute.type)}
              title={attribute.title}
              value={attribute.value}
            />
          ))}
        </div>

        <footer>
          <Button
            color={colors.green_300}
            icon={<IoArrowRedoOutline size={20} />}
          >
            View more
          </Button>
        </footer>
      </div>
    </Container>
  );
}
