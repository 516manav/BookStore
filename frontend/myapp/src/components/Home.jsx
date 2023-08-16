import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import "./main.css"
import Mapi from './Mapi'

const Home = () => {

   
      const [selectPosition, setSelectPosition] = useState(null);
      const Asign=(text)=>{
        setSelectPosition(text)
      }
 

       const isLoaded=true;

      if (isLoaded) {
        return (
          <div className="flex w-full h-full overflow-y-scroll flex-col ">
            <div className="w-full h-20 bg-cyan-700 z-30 ">
              <Nav
                selectPosition={selectPosition}
                setSelectPosition={setSelectPosition}
              />
            </div>
            <div className="flex w-full h-full">
              <div className="flex flex-col w-full h-full bg-slate-300 sp_list"></div>
              <div className="flex flex-col w-full h-full  sp_map">
                {/* <Gmap coord={coord}></Gmap> *
                {/* <Map coord={coord}></Map> */}
                <Mapi
                  selectPosition={selectPosition}
                  setSelectPosition={setSelectPosition}
                />
              </div>
            </div>
          </div>
        );
      }
    //  const onLoad = (autoC) => setAutocomplete(autoC);

    //  const onPlaceChanged = () => {
    //    const lat = autocomplete.getPlace().geometry.location.lat();
    //    const lng = autocomplete.getPlace().geometry.location.lng();

    //    setcoord({ lat, lng });
    //  };

}

export default Home
