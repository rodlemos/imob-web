import { useState } from 'react';
import Map, { Marker, NavigationControl, Popup } from 'react-map-gl';
import { MapMarker } from '../MapMarker';
import { MapPopup } from '../MapPopup';

export function Mapbox() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <Map
      initialViewState={{
        longitude: -53.8122900851903,
        latitude: -29.69013553138882,
        zoom: 14,
      }}
      style={{ flex: 1 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      attributionControl={false}
    >
      <NavigationControl />
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
        >
          <MapPopup />
        </Popup>
      )}
    </Map>
  );
}
