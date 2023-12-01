import { useQuery } from "@apollo/client";
import "../css/list.css";
import Card from "./bookcard";
import { GENRE_BOOKS } from "../queries/querey";

const List = ({genre,showcard }) => {
   const {data,loading,error}=useQuery(GENRE_BOOKS,{
    variables:{
      genre:genre
    }
   })
   
 if(data){
  const list=data.GenreBook;


   return (
     <div className="w-full h-max flex flex-col ">
       <section className="text-[2.5rem] font-bold py-2 border-solid border-slate-300  border-b-2">{genre}</section>
       <section className="w-full h-max flex py-3 overflow-x-scroll scroll-smooth">
         {list.map((book) => {

           return (
             <>
               <Card showcard={showcard} book={book} />
             </>
           );
         })}
       </section>
     </div>
   );
 }
 
};
export default List;
