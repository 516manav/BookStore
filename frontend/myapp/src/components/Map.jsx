import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { convertLength } from "@mui/material/styles/cssUtils";
import CustomizedDialogs from "./Dialog";

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
const Map = (props) => {
  const { selectPosition, setSelectPosition } = props;
  const locationSelection = [selectPosition?.lat, selectPosition?.lon];
  const content = {
    title: "Atomic Habit",
    author: "any one",
    dis: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nesciunt nemo quaerat earum repellat expedita blanditiis eaque nobis exercitationem quos alias iusto culpa ullam vel explicabo impedit, nisi suscipit eius? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consequuntur reiciendis eaque quia aliquid blanditiis aspernatur repudiandae, dolorum ratione, mollitia autem eligendi dolor magnam commodi ad eveniet non perferendis possimus!",
    img: "https://th.bing.com/th/id/OIP.hnClNwesqw4d2kUL9x4PggHaHa?pid=ImgDet&rs=1",
    owner: "Shiv",
    add: "raigad dfdffssdfsdfssf",
    contact: "964504244",
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        console.log({ latitude, longitude });
        localStorage.setItem("lat", latitude);
        localStorage.setItem("lng", longitude);
        setSelectPosition({ lat: latitude, lon: longitude });
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
                  <article className="flex flex-col w-28 justify-center items-center ">
                    <img
                      src={content.img}
                      className="object-contain max-h-32 "
                    ></img>
                    <section className="flex flex-col items-start w-full mb-2 ">
                      <span className="text-lg font-bold">{content.title}</span>
                      <span className="text-md font-semibold">{content.author}</span>
                    </section>
                    <CustomizedDialogs page={"map"}/>
                  </article>
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

export default Map;
