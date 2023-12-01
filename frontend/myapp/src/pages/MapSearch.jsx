import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Map from '../components/Map'
import CustomizedDialogs from '../components/Dialog';
import MapList from '../components/mapList';
import FilterDialogs from '../components/FilterDialog';
import { useQuery } from '@apollo/client';
import { GET_ALL_BOOKS } from '../queries/querey';

 const MapSearch = () => {
      const [selectPosition, setSelectPosition] = useState(null);
       const isLoaded=true;
      const {data,loading,error}=useQuery(GET_ALL_BOOKS)
      const [bookList,setBookList]=useState([]);
      useEffect(()=>{
        if(data){
          setBookList(data.GetAllBooks);
        }
        
      },[data])
      function filterBooks(category, maxPrice, minRating) {
        let filteredBooks = data.GetAllBooks;

        if (category!="All") {
          console.log(category);
          filteredBooks = filteredBooks.filter(
            (book) =>book.genre == category
          );
        }
        
        if (maxPrice>0) {
          filteredBooks = filteredBooks.filter(
            (book) => parseInt(book.price)<= maxPrice
          );
        }

        if (minRating<5) {
          filteredBooks = filteredBooks.filter(
            (book) => book.rating >= minRating
          );
        }

         setBookList(filteredBooks)
      }
      const  RemoveFilter=()=>{
        setBookList(data.GetAllBooks);
      }
      if (data) {
        return (
          <div className="flex w-full h-screen overflow-y-scroll flex-col ">
            <div className="w-full h-20  z-30 ">
              <Nav
                selectPosition={selectPosition}
                setSelectPosition={setSelectPosition}
                page="map"
              />
            </div>
            <div className="flex w-full h-full">
              <div className="flex flex-col w-full h-full  sp_list">
                <FilterDialogs
                  filterBooks={filterBooks}
                  RemoveFilter={RemoveFilter}
                />
                <MapList bookList={bookList} />
              </div>
              <div className="flex flex-col w-full h-full  sp_map">
                <Map
                  selectPosition={selectPosition}
                  setSelectPosition={setSelectPosition}
                  bookList={bookList}
                />
              </div>
            </div>
          </div>
        );
      }
 

}

export default MapSearch
