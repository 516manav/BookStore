import React, { useState } from "react";

import { BsImage} from "react-icons/bs";
export default function ImageInput({image,setImage}) {
 

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };



  return (
    <div >
      <label htmlFor="upload-button">
        {image.preview ? (
          <img src={image.preview} alt="dummy"  className="sp_imgfit w-48 h-48" />
        ) : (
          <>
            <div className="flex w-full h-full justify-center cursor-pointer items-center">
              <div className="border-slate-500 border-solid border-2 h-36 w-36 rounded-lg flex flex-col justify-center items-center">
                 <BsImage className="text-3xl"/>
                <span className="text-sm">Add Photo</span>
              </div>
            </div>
            <small className="text-red-500 text-[0.8rem]">This field is mandatory*</small>
          </>
        )}
      </label>
      <input
        type="file"
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleChange}
      />
      {/* <br /> */}
      {/* <button onClick={handleUpload}>Upload</button> */}
    </div>
  );
}
