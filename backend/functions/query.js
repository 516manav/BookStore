
const book = require("../models/book");
const User = require("../models/user");

const GetBooks=async()=>{
    const List=await book.find({
        status:"none"
    });
    return List;
}

const GetUser=async({id})=>{
    const user=await User.findOne({
        _id:id
    })
    return user;
}

const GetBook=async({id})=>{
    const SingleBook=await book.findOne({
        _id:id
    })
    return SingleBook;
}

const UserD=async({username,useremail})=>{
  
    const miniUser={
        username:username,
        useremail:useremail
    }
    return miniUser;
}

module.exports={GetBook,GetBooks,GetUser,UserD}