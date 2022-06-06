import { FaRuler } from 'react-icons/fa';
import { GiBed, GiBathtub, GiHomeGarage } from 'react-icons/gi';

export function getAttributeIcon(type: string) {
  switch (type) {
    case 'area':
      return FaRuler;
    case 'rooms':
      return GiBed;
    case 'bathrooms':
      return GiBathtub;
    case 'garage':
      return GiHomeGarage;
    default:
      return FaRuler;
  }
}
