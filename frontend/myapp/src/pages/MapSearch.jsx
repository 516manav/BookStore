import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Map from '../components/Map'

 const MapSearch = () => {
      const [selectPosition, setSelectPosition] = useState(null);
       const isLoaded=true;

      if (isLoaded) {
        return (
          <div className="flex w-full h-screen overflow-y-scroll flex-col ">
            <div className="w-full h-20 bg-cyan-700 z-30 ">
              <Nav
                selectPosition={selectPosition}
                setSelectPosition={setSelectPosition}
              />
            </div>
            <div className="flex w-full h-full">
              <div className="flex flex-col w-full h-full bg-slate-300 sp_list"></div>
              <div className="flex flex-col w-full h-full  sp_map">
                <Map
                  selectPosition={selectPosition}
                  setSelectPosition={setSelectPosition}
                />
              </div>
            </div>
          </div>
        );
      }
 

}

export default MapSearch
