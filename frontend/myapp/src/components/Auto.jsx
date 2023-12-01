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
    if (searchText.current.value) {
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
    } else {
      setListPlace([]);
    }
  };
  return (
    <div className="flex">
      <div className="relative w-56   mx-3 ">
        <input
          ref={searchText}
          className="w-full px-3 p-2 outline-none border-solid border-2 border-gray-300 inputbox rounded-lg"
          placeholder="Search city ..."
        ></input>
        <div className="bg-white  rounded-md absolute w-full max-h-52 mt-3 overflow-y-scroll flex flex-col inputbox">
          {listPlace.length > 0 && (
            <div className="flex w-full justify-end items-end ">
              <button
                className="text-xs m-2 font-semibold"
                onClick={() => {
                  setListPlace([]);
                }}
              >
                X
              </button>
            </div>
          )}
          {listPlace.map((place) => {
            return (
              <div
                onClick={() => {
                  searchText.current.value = place?.display_name;
                  setSelectPosition(place);
                }}
                key={place?.place_id}
                className="py-1 px-2 border-solid border-[1px] border-slate-300 cursor-pointer"
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
        className="bg-[#FFCE1A] px-3 rounded-lg font-thin "
      >
        Search
      </button>
    </div>
  );
};

export default Autos;
