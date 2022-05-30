import { Container } from './styles';

export function MapPopup() {
  return (
    <Container>
      <h2>Two-story house</h2>

      <img
        src="https://i.pinimg.com/originals/0b/7e/8a/0b7e8a02ed3c2d3611675f678fecead9.jpg"
        alt=""
      />

      <div>
        <header>
          <h3>$1.600.000</h3>
          <span>Sell/Rent</span>
        </header>

        <div className="attributes-wrapper">
          <h1>o</h1>
        </div>

        <footer>
          <h3>See more</h3>
        </footer>
      </div>
    </Container>
  );
}
