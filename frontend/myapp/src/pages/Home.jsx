
import React, { useState } from "react";

import Foot from "../components/footer";
import "../css/Singlecards.css"

import Nav from "../components/Nav";
import HomeMain from "../components/HomeMain";
import HomeSearch from "../components/HomeSearch";

function Home() {
  const [search,setSearch]=useState(false);
  const [bookList,setBookList]=useState([]);
  return (
    <div>
      <div className="nav-contain">
        <Nav page="home" setSearch={setSearch} />
      </div>
      {search?<HomeSearch bookList={bookList}/>:<HomeMain/>}
  
      <Foot />
    </div>
  );
}

export default Home;

