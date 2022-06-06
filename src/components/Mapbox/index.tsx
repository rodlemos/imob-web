import { useState } from 'react';
import Map, { Marker, NavigationControl, Popup } from 'react-map-gl';
import { MapMarker } from '../MapMarker';
import { MapPopup } from '../MapPopup';

interface MapboxProps {
  coord: {
    latitude: number;
    longitude: number;
  };
}

export function Mapbox({ coord }: MapboxProps) {
  const [showPopup, setShowPopup] = useState(false);

  return coord.latitude ? (
    <Map
      initialViewState={{
        longitude: coord.longitude,
        latitude: coord.latitude,
        zoom: 14,
      }}
      style={{ flex: 1 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      attributionControl={false}
    >
      <NavigationControl position="bottom-right" />
      <Marker
        latitude={-29.690247375056195}
        longitude={-53.82353390526631}
        onClick={() => setShowPopup(true)}
      >
        <MapMarker />
      </Marker>

      {showPopup && (
        <Popup
          latitude={-29.690247375056195}
          longitude={-53.82353390526631}
          anchor="bottom"
          onClose={() => setShowPopup(false)}
          closeOnClick={false}
          offset={4}
          maxWidth="280px"
        >
          <MapPopup />
        </Popup>
      )}
    </Map>
  ) : (
    <div>
      <h1>Loading...</h1>
    </div>
  );
}
