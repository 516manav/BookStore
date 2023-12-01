import React, { useRef, useState } from "react";

import ImageInput from "../components/ImageInput";
import HoverRating from "../components/Rating";
import MultipleSelect from "../components/SelectGenre";
import axios from "axios";

import { toast } from "react-toastify";
import Nav from "../components/Nav";
import { useMutation } from "@apollo/client";
import { DONATE_BOOK } from "../queries/querey";

const DonateForm = () => {
  const [donateBook, { data, loading, error }] = useMutation(DONATE_BOOK);
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [value, setValue] = useState(2);
  const [Genre, setGenre] = useState("");
  const [imgurl, setImageUrl] = useState("");
  const[loader,setLoader]=useState(false)
  const title = useRef();
  const author = useRef();
  const price = useRef();
  const description = useRef();
  const state = useRef();
  const city = useRef();
  const landmark = useRef();
  const contact = useRef();
  const uploadImage = async () => {
    try {
      if (image.raw) {
        let img = new FormData();
        img.append("file", image.raw),
          img.append("cloud_name", "dum5yprjm"),
          img.append("upload_preset", "sucmb5lu");
        let response = await fetch(
          "https://api.cloudinary.com/v1_1/dum5yprjm/image/upload",
          {
            method: "post",
            body: img,
          }
        );
        response = await response.json();
        return response.url;
      }
    } catch (e) {
      console.log(e.message);
       toast.error(e.message, {
         position: "top-center",
         autoClose: 2000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "light",
       });
    }
  };

  const HandleSubmit = async () => {
    setLoader(true);
    const Title = title.current.value;
    const Author = author.current.value;
    const Price = price.current.value;
    const Description = description.current.value;
    const State = state.current.value;
    const City = city.current.value;
    const Landmark = landmark.current.value;
    const Phone = contact.current.value;
    const lat = localStorage.getItem("lat");
    const lng = localStorage.getItem("lng");
    const tempname = localStorage.getItem("name");
    const sellerId = localStorage.getItem("user");
    
    if (
      Title &&
      Author &&
      Price &&
      Description &&
      State &&
      City &&
      Landmark &&
      image.raw &&
      value &&
      Genre &&
      Phone
    ) {
      const imgs = await uploadImage();
      let tempAddress = `${Landmark},${City},${State}`;
      let tempPrice = Price.toString();
      let tempPhone = Phone.toString();
      if (Phone.length == 10) {
        donateBook({
          variables: {
            genre: Genre,
            title: Title,
            author: Author,
            description: Description,
            contact: tempPhone,
            lat: lat,
            lng: lng,
            price: tempPrice,
            image: imgs,
            address: tempAddress,
            userId: sellerId,
            rating: value,
            sellerName: tempname,
          },
        });
       
        if (data) {
         
          toast.success("Book Registered", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
           setLoader(false);
          
        }
      } else {
        toast.error("Invaild contact", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      toast.error("Few feilds are empty", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="w-full h-max flex flex-col justify-center items-center sm:bg-[whitesmoke] overflow-y-scroll">
      <div className="h-16 w-full">
        <Nav></Nav>
      </div>

      <div className="flex flex-col p-7 bg-white sm:w-max sm:h-max w-full h-screen rounded-xl">
        <div className="font-semibold text-3xl flex items-center justify-center">
          Donate Book
        </div>
        <div className="w-full  flex sm:flex-row flex-col">
          <div className="w-full h-full flex flex-col p-4">
            <div className="w-full flex my-3 mb-10">
              <ImageInput image={image} setImage={setImage} />
            </div>
            <div className="w-full flex my-3">
              <input
                ref={title}
                name="title"
                className="outline-none rounded-lg p-2 font-medium text-lg border-slate-300 border-solid border-2 "
                placeholder="Enter Title"
              ></input>
            </div>
            <div className="w-full flex my-3">
              <input
                name="author"
                ref={author}
                className="outline-none rounded-lg p-2 font-medium text-lg border-slate-300 border-solid border-2 "
                placeholder="Enter Author"
              ></input>
            </div>
            <div className="my-3">
              <MultipleSelect
                Genre={Genre}
                setGenre={setGenre}
                GenreList={["Thriller", "Comedey", "Romantic", "Drama"]}
              ></MultipleSelect>
            </div>
            <div className="w-full flex flex-col my-3">
              <div className="text-xl mb-2 font-semibold">Set Price</div>
              <input
                name="price"
                ref={price}
                className="outline-none rounded-lg p-1 w-1/2 sm:w-[95%]  font-medium text-lg border-slate-300 border-solid border-2 "
                placeholder="Price"
                type="number"
                defaultValue={0}
              ></input>
            </div>
            <div className="w-full flex my-3">
              <input
                ref={contact}
                name="contact"
                type="tel"
                className="outline-none rounded-lg p-2 w-[95%] font-medium text-lg border-slate-300 border-solid border-2 "
                placeholder="Contact no."
              ></input>
            </div>
          </div>

          <div className="w-full h-full flex flex-col p-4">
            <div className="w-full flex flex-col mt-5">
              <textarea
                name="description"
                ref={description}
                className="h-28 outline-none w-full rounded-lg p-2 font-medium text-lg border-slate-300 border-solid border-2 "
                placeholder="Enter Descirption"
              ></textarea>
              <small className="w-full text-slate-500">
                Enter condition ,feature and reason for donating
              </small>
            </div>
            <div className="text-xl mb-4 mt-1 font-semibold">
              Confirm your Location
            </div>
            <div className="w-full flex my-3">
              <input
                name="state"
                ref={state}
                className="outline-none rounded-lg p-2 font-medium text-lg border-slate-300 border-solid border-2 "
                placeholder="State"
              ></input>
            </div>
            <div className="w-full flex my-3">
              <input
                name="city"
                ref={city}
                className="outline-none rounded-lg p-2 font-medium text-lg border-slate-300 border-solid border-2 "
                placeholder="City"
              ></input>
            </div>
            <div className="w-full flex my-3">
              <input
                name="landmark"
                ref={landmark}
                className="outline-none rounded-lg p-2 font-medium text-lg border-slate-300 border-solid border-2 "
                placeholder="Landmark"
              ></input>
            </div>
            <div className="w-full flex flex-col my-3">
              <div className="text-xl mb-2 font-semibold">
                Rate Book condition
              </div>
              <HoverRating setValue={setValue} value={value}></HoverRating>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <button
            onClick={() => {
              HandleSubmit();
            }}
            className="text-white bg-[#151515] px-7 py-1 rounded-md text-2xl "
          >
            {loader?"Loading":"Donate"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonateForm;
