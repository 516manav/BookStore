import React from 'react'
import Carousel from "./carousal";
import List from "./List";
import { countries } from "../utils/data";
const HomeMain = () => {
  return (
    <>
      <div className="car-sec">
        <Carousel images={countries} />
      </div>
      <div className="main">
        <List genre={"Drama"} />
        <List genre={"Thriller"} />
        <List genre={"Comedey"} />
      </div>
    </>
  );
}

export default HomeMain
