import Head from 'next/head';
import { Mapbox } from '../components/Mapbox';
import { MapNavbar } from '../components/MapNavbar';
import { Menu } from '../components/Menu';
import { Container, Wrapper } from '../styles/mapStyles';

export default function Maps() {
  return (
    <Container>
      <Head>
        <link
          href="https://api.tiles.mapbox.com/mapbox-gl-js/v2.8.2/mapbox-gl.css"
          rel="stylesheet"
        />
        <title>Properway</title>
      </Head>
      <MapNavbar />
      <Wrapper>
        <Menu />
        <Mapbox />
      </Wrapper>
    </Container>
  );
}
