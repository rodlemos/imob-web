import { Button } from '../Button';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <div className="logo">
        <img src="/logo.png" alt="logo" />
        <p>ProperWay</p>
      </div>
      <Button>
        <img src="/login.svg" style={{ width: 20, height: 20 }} alt="" />
        Sign In
      </Button>
    </Container>
  );
}
