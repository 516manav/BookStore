import React, { useRef, useState } from "react";

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
const params = {
  q: "",
  format: "json",
  addressdetails: "addressdetails",
};
const Autos = ({ selectPosition, setSelectPosition }) => {
  const searchText = useRef();
  const [listPlace, setListPlace] = useState([]);
  const search = () => {
    const params = {
      q: searchText.current.value,
      format: "json",
      addressdetails: 1,
      polygon_geojson: 0,
    };
    const queryString = new URLSearchParams(params).toString();
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setListPlace(JSON.parse(result));
      })
      .catch((err) => alert("Unable to get the location"));
  };
  return (
    <div className="flex">
      <div className="relative w-56  bg-slate-500 mx-3 ">
        <input
          ref={searchText}
          className="w-full px-3 p-2 outline-none"
          placeholder="Search"
        ></input>
        <div className="bg-blue-100 absolute w-full max-h-52  overflow-y-scroll flex flex-col">
          {listPlace.map((place) => {
            return (
              <div
                onClick={() => {
                searchText.current.value = place?.display_name;
                  setSelectPosition(place);
                }}
                key={place?.place_id}
              >
                {place?.display_name}
              </div>
            );
          })}
        </div>
      </div>
      <button
        onClick={() => {
          search();
        }}
        className="bg-green-500 "
      >
        Search
      </button>
    </div>
  );
};

export default Autos;
