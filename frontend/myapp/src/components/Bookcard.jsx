import "../css/card.css";
import React, { useState } from "react";

const Card = ({ showcard }) => {
  return (
    //  <div className="main">
    //     <article className="card" >
    //     <section className="cover">
    //     <img src={image} alt={title}className="img-container"/>
    //     </section>
    //     <section className="details">
    //         <div className="category">{Category}</div>
    //         <div className="title">{title}</div>
    //         <div className="Author">{Author}</div>
    //         <div className="footer">
    //             <button className="cart"><GrCart/>Add to cart</button>
    //             <button className="info"><AiOutlineInfoCircle></AiOutlineInfoCircle></button>
    //             <button className="fav"onClick={()=>setfav(!fav)}>{fav?<AiFillHeart className="fill"/>:<AiOutlineHeart/>}</button>
    //             </div>
    //     </section>
    // </article>
    // </div>
    <>
      <article className="card">
        <section className="cover">
          <img
            src="https://th.bing.com/th/id/OIP.hnClNwesqw4d2kUL9x4PggHaHa?pid=ImgDet&rs=1"
            alt="title"
            className="img-container"
          />
        </section>
        <section className="details">
          <div className="category">Category</div>
          <div className="title">Title</div>
          <div className="Author">Author</div>
          <div className="foot">
            <button className="card-button" onClick={() => showcard(true)}>
              More info
            </button>
          </div>
        </section>
      </article>
    </>
  );
};

export default Card;
