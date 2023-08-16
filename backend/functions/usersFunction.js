const book = require("../models/book");
const request = require("../models/request");
const { GetBook, GetUser } = require("./query");



const BooksOffered=async({id})=>{
    const List=await book.find({
        by:id,
        status:"none"
    })
    return List;
}

const BooksDonated=async({id})=>{
    let List=await book.find({
        by:id,
        status:"sold"
    });
    return List;
}
const BooksRecieved = async ({ id }) => {
    let List = await book.find({
       recieverId : id,
        status: "sold"
    });
    return List;
}
const myrequest=async({id})=>{
    let List =[];
    let reqestList=await request.find({
        recieverId:id,
        status:"wait"
    }) 
    reqestList.map((req)=>{

        const sender = GetUser({id:req.senderId})
        const book=GetBook({id:req.bookId})
        List.push({
            sender:sender,
            book:book
        })
    })
    return List;
    

}

module.exports={BooksRecieved,BooksDonated,BooksOffered,myrequest}