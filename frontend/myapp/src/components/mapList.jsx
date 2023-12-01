import React from 'react'
import MapCard from './MapCard'


const MapList = ({bookList}) => {


 
  return (
    <div className=" w-full flex flex-col h-full overflow-y-scroll scroll-smooth px-5 py-2">
      {bookList.map((book) => {
        return (
          <>
            <MapCard book={book} />
          </>
        );
      })}
    </div>
  );
}

export default MapList
