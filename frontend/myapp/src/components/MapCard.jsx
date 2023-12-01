import React from "react";
import CustomizedDialogs from "./Dialog";

const MapCard = ({book}) => {
  const content = {
    title: "Atomic Habit",
    author:"any one",
    dis: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nesciunt nemo quaerat earum repellat expedita blanditiis eaque nobis exercitationem quos alias iusto culpa ullam vel explicabo impedit, nisi suscipit eius? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consequuntur reiciendis eaque quia aliquid blanditiis aspernatur repudiandae, dolorum ratione, mollitia autem eligendi dolor magnam commodi ad eveniet non perferendis possimus!",
    img: "https://th.bing.com/th/id/OIP.hnClNwesqw4d2kUL9x4PggHaHa?pid=ImgDet&rs=1",
    owner: "Shiv",
    add: "raigad dfdffssdfsdfssf",
    contact: "964504244",
  };
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
    rating
  } = book;
  return (
    <article className="w-full flex justify-center items-center bg-slate-50 rounded-xl mapcard my-3">
      <div className="flex w-1/2 h-52 p-2 rounded-lg">
        <img
          src={image}
          className="w-full h-full object-contain rounded-2xl"
        ></img>
      </div>
      <div className="w-1/2 flex flex-col py-2">
        <span className="text-2xl font-bold">{title}</span>
        <span className="text-lg font-thin">{author}</span>
        <span className="text-lg font-semibold mt-1">{genre}</span>

        <span className="mt-1">Price:{price}rs</span>
        <div className="flex flex-col">
          <span className="font-semibold ">Address:</span>
          <span className="max-h-[3.5rem] overflow-y-scroll text-sm">
            {address}
          </span>
        </div>
        <CustomizedDialogs
          page="map"
          image={image}
          title={title}
          description={description}
          by={by}
          contact={contact}
          address={address}
          price={price}
          rating={rating}
        />
      </div>
    </article>
  );
};

export default MapCard;
