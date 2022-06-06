import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Mapbox } from '../components/Mapbox';
import { MapNavbar } from '../components/MapNavbar';
import { Menu } from '../components/Menu';
import { Container, Wrapper } from '../styles/mapStyles';

export default function Maps() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((location) => {
          setLatitude(location.coords.latitude);
          setLongitude(location.coords.longitude);
        });
      }
    }
    getLocation();
  }, []);

  return (
    <Container>
      <Head>
        <title>Properway</title>
      </Head>
      <MapNavbar />
      <Wrapper>
        <Menu />
        <Mapbox coord={{ latitude, longitude }} />
      </Wrapper>
    </Container>
  );
}
