import React, { useRef, useState } from 'react'
import ImageInput from '../components/ImageInput';
import HoverRating from '../components/Rating';
import MultipleSelect from '../components/SelectGenre';

const DonateForm = () => {
    const [Details,setDetails]=useState({});
     const [image, setImage] = useState({ preview: "", raw: "" });
    const [value, setValue] = useState(2);
    const [Genre, setGenre] = useState("");
    const title=useRef();
    const author=useRef();
    const price=useRef();
    const description=useRef();
    const state=useRef();
    const city=useRef();
    const landmark=useRef();
    const HandleSubmit=()=>{
           
            const Title = title.current.value;
            const Author =author.current.value ;
            const Price = price.current.value;
            const Description = description.current.value;
            const State = state.current.value;
            const City = city.current.value;
            const Landmark = landmark.current.value;
            if(Title&&Author&&Price&&Description&&State&&City&&Landmark){
                alert("Donated")
            }
            else{
                alert("Few fields are empty")
            }
    }

  return (
    <div className="w-full h-full flex justify-center items-center sm:bg-[whitesmoke] overflow-y-scroll">
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
                name='title'
                className="outline-none rounded-lg p-2 font-medium text-lg border-slate-300 border-solid border-2 "
                placeholder="Enter Title"
              ></input>
            </div>
            <div className="w-full flex my-3">
              <input
              name='author'
              ref={author}
                className="outline-none rounded-lg p-2 font-medium text-lg border-slate-300 border-solid border-2 "
                placeholder="Enter Author"
              ></input>
            </div>
            <div className="my-3">
                <MultipleSelect Genre={Genre} setGenre={setGenre}></MultipleSelect>
              
            </div>
            <div className="w-full flex flex-col my-3">
              <div className="text-xl mb-2 font-semibold">Set Price</div>
              <input
               name='price'
                ref={price}
                className="outline-none rounded-lg p-2 sm:w-full w-1/2 font-medium text-lg border-slate-300 border-solid border-2 "
                placeholder="Price"
                type="number"
                defaultValue={0}
              ></input>
            </div>
          </div>

          <div className="w-full h-full flex flex-col p-4">
            <div className="w-full flex flex-col mt-5">
              <textarea
              name='description'
              ref={description}
                className="h-28 outline-none w-full rounded-lg p-2 font-medium text-lg border-slate-300 border-solid border-2 "
                placeholder="Enter Descirption"
              ></textarea>
              <small className='w-full text-slate-500'>Enter condition ,feature and reason for donating</small>
            </div>
            <div className="text-xl mb-4 mt-1 font-semibold">
              Confirm your Location
            </div>
            <div className="w-full flex my-3">
              <input
              name='state'
              ref={state}
                className="outline-none rounded-lg p-2 font-medium text-lg border-slate-300 border-solid border-2 "
                placeholder="State"
              ></input>
            </div>
            <div className="w-full flex my-3">
              <input
              name='city'
              ref={city}
                className="outline-none rounded-lg p-2 font-medium text-lg border-slate-300 border-solid border-2 "
                placeholder="City"
              ></input>
            </div>
            <div className="w-full flex my-3">
              <input
              name='landmark'
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
        <div className='w-full flex justify-center items-center'>
          <button className="text-white bg-[#151515] px-7 py-1 rounded-md text-2xl ">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
}

export default DonateForm
