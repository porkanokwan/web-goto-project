import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import SpinnerGrow from "../../common/SpinnerGrow";

function Map({ lat, lng, category }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY_MAP,
  });
  const center = { lat, lng };

  if (!isLoaded) return <SpinnerGrow />;
  return (
    <>
      <GoogleMap
        zoom={category === "Attractions" ? 15 : 20}
        center={center}
        mapContainerClassName="w-maps"
      >
        <Marker position={center} />
      </GoogleMap>
    </>
  );
}

export default Map;
