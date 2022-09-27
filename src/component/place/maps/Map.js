import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import SpinnerGrow from "../../common/SpinnerGrow";

function Map({ lat, lng, category }) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY_MAP,
  });
  const center = { lat, lng };

  if (!isLoaded) return <SpinnerGrow />;
  if (loadError)
    return (
      <div class="alert alert-danger mt-2 mx-5 fs-4 text-center" role="alert">
        Map cannot be loaded right now, sorry.
      </div>
    );
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
