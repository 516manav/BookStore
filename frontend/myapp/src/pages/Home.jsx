
import React, { useState } from "react";
import List from "../components/List";
import Foot from "../components/footer";
import "../css/Singlecards.css"
import { MdCancel } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { FcContacts } from "react-icons/fc";
import Carousel from "../components/carousal";
import { countries } from "../utils/data"
import {
  AiOutlineInfoCircle,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import Nav from "../components/Nav";

function Home() {
  const [feature, setfeature] = useState({
    title: "Atomic Habit",
    dis: "shivam sdad asdd sd d dd asd da dsa d dd",
    img: "https://th.bing.com/th/id/OIP.hnClNwesqw4d2kUL9x4PggHaHa?pid=ImgDet&rs=1",
    owner: "Shiv",
    add: "raigad dfdffssdfsdfssf",
    contact: "964504244",
  });
  const [access, setaccess] = useState(false);
  const showcard = (allow) => {
    setaccess(allow);
  };

  return (
    <div>
      <div className="nav-contain">
       <Nav/>
      </div>
      <div className="car-sec">
        <Carousel images={countries} />
      </div>
      {access && <Infocard showcard={showcard} {...feature} />}
      <div className="main">
        <List showcard={showcard} />
        <List showcard={showcard} />
        <List showcard={showcard} />
        <List showcard={showcard} />
        <List showcard={showcard} />
        <List showcard={showcard} />
      </div>
      <Foot />
    </div>
  );
}

export default Home;
const Infocard = ({ title, dis, img, owner, add, contact, showcard }) => {
  const [fav, setfav] = useState(false);
  return (
    <article className="body scale-in-ver-top ">
      <section className="top">
        <section className="img-sec">
          <img src={img} alt="title" />
        </section>
        <div className="claim-gicft-sec">
          <button className="cart">Claim a gift</button>
          <button className="fav" onClick={() => setfav(!fav)}>
            {fav ? <AiFillHeart className="fill" /> : <AiOutlineHeart />}
          </button>
        </div>
      </section>
      <section className="bottom">
        <div className="x-btn-div">
          <button className="x-btn" onClick={() => showcard(false)}>
            <MdCancel />
          </button>
        </div>
        <section className="basic-details">
          <div className="sig-title">{title}</div>
          <div className="sig-author">
            <span className="dis">Description:</span>
            <br></br>
            {dis}
          </div>
        </section>
        <div className="owner-details">
          <section className="owner">
            <span className="icon">
              <BsFillPersonLinesFill />
            </span>
            <div className="box">
              <div className="up">Owner</div>
              <div className="down">{owner}</div>
            </div>
          </section>
          <section className="contact">
            <span className="icon">
              <FcContacts />
            </span>
            <div className="box">
              <div className="up">contact</div>
              <div className="down">{contact}</div>
            </div>
          </section>
          <section className="add">
            <span className="icon">
              <ImLocation />
            </span>
            <div className="box">
              <div className="up">Address</div>
              <div className="down">{add}</div>
            </div>
          </section>
        </div>
      </section>
    </article>
  );
};
