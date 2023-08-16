import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { convertLength } from "@mui/material/styles/cssUtils";


function ResetCenterView(props) {
  const { selectPosition } = props;
  const map = useMap();

  useEffect(() => {
    if (selectPosition) {
      map.setView(
        L.latLng(selectPosition?.lat, selectPosition?.lon),
        map.getZoom(),
        {
          animate: true,
        }
      );
    }
  }, [selectPosition]);

  return null;
}
const Mapi = (props) => {
    const {selectPosition,setSelectPosition}=props
  const locationSelection = [selectPosition?.lat, selectPosition?.lon];
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        console.log({ latitude, longitude });
        localStorage.setItem("lat",latitude);
        localStorage.setItem("lng",longitude);
        setSelectPosition({lat:latitude, lon:longitude});
      }
    );
  }, []);
  const marker = [
    { geocode: [26.2, 80.51], text: "one" },
    { geocode: [26, 80.51], text: "two" },
    { geocode: [26.4, 80.51], text: "three" },
  ];
  if (!selectPosition) {
    return <div>Loading...</div>;
  }
  if (selectPosition) {
    return (
      <div className="h-full w-full">
        <MapContainer center={locationSelection} zoom={10}>
         
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=lcW7S6blUsW126CTGnQ0"
          />
          <Marker position={locationSelection} key={5}>
            <Popup>
              <h2>{"its me"}</h2>
            </Popup>
          </Marker>
          {marker.map((mark, index) => {
            return (
              <Marker position={mark.geocode} key={index}>
                <Popup>
                  <h2>{mark.text}</h2>
                </Popup>
              </Marker>
            );
          })}
          <ResetCenterView selectPosition={selectPosition} />
        </MapContainer>
      </div>
    );
  }
};

export default Mapi;
