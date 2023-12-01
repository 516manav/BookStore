import "../css/card.css";
import React, { useState } from "react";
import CustomizedDialogs from "./Dialog";

const Card = ({ showcard, book }) => {
  const {
    title,
    author,
    address,
    by,
    buyerId,
    contact,
    description,
    lat,
    lng,
    price,
    status,
    image,
    genre,
  } = book;

  return (
    <>
      <article className="card min-w-[12rem] max-w-[12rem] flex flex-col h-80 bg-slate-200 mx-3 rounded-xl border-solid border-2 border-slate-800">
        <section className="flex h-44">
          <img
            src={image}
            alt={title}
            className="flex w-full h-full rounded-lg object-fill"
          />
        </section>
        <section className="flex flex-col p-2">
          <div className="text-xl font-semibold">{genre}</div>
          <div className="text-xl font-extrabold max-h-[4rem]  overflow-clip">
            {title}
          </div>
          <div className="text-lg font-thin">{author}</div>
          <CustomizedDialogs
            image={image}
            title={title}
            description={description}
            by={by}
            contact={contact}
            address={address}
            price={price}
            page="home"
          />
        </section>
      </article>
    </>
  );
};

export default Card;
