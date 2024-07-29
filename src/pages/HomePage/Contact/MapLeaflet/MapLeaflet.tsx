import { Icon } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import locationIcon from "../../../../assets/images/location.png";
interface HeightProps {
  height: string;
}

const MapLeaflet = ({ height }: HeightProps) => {
  const position = [23.745, 90.375];
  const customIcon = new Icon({
    iconUrl: locationIcon,
    iconSize: [47, 60],
  });

  return (
    <>
      <MapContainer
        className={`${height} rounded-lg z-20`}
        center={position}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>Dhanmondi Road No-127, Block-C Dhaka, Bangladesh</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default MapLeaflet;
