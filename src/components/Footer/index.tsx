import { Container } from './styles';

export function Footer() {
  return (
    <Container>
      <div className="footer-wrapper">
        <ul>
          <li>
            <a>about us</a>
          </li>
          <li>
            <a>what we do</a>
          </li>
          <li>
            <a>company</a>
          </li>
          <li>
            <a>contact</a>
          </li>
        </ul>

        <div className="end">
          <p>© 2020 - 2022 Myself. Todos os direitos reservados.</p>
        </div>
      </div>
    </Container>
  );
}
