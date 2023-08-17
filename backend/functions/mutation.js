const bycrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Book = require("../models/book");
const Request = require("../models/request");



const SignIn = async ({ name, email, password }) => {
    let hashedPassword = await bycrypt.hash(password, 12);
    const user = await User.create({
        name: name, email: email, password: hashedPassword
    });
    const token = jwt.sign({ userId: user._id,username:user.name,useremail:user.email }, "shivam");
    return token;
}

const Login = async ({ email, password }) => {
    try{
       
        const user = await User.findOne({
            email: email
        })
        if (!user) {
            throw new Error("User does not exists")
        }

        const matched = await bycrypt.compare(password, user.password);

        if (matched) {
          
            const token = jwt.sign({ userId: user._id, username: user.name, useremail: user.email },  "shivam");
            return token;
        }
        else {

            throw new Error("Invalid email or password");
        }
    }
    catch(e){
        console.log(e.message())
    }


}

const DonateBook=async({title,author,description,contact,lat,lng,gener,price,image,address})=>{
    console.log(6)
    let Bookie={
        title,
        author,
        gener,
        description,
        contact,
        status:"none",
        buyerId:"none",
        lat,
        lng,
        price,
        image,
        address
    }
    const book=await Book.create(Bookie);
    return book

}

const RemoveBook=async({id,bookId})=>{
    const book=await Book.deleteOne({
        by:id,
        _id:bookId
    })
    return "Book Deleted"
}


const CreateRequest=async({buyerId,sellerId,bookId})=>{
    const req=await Request.create({
        bookId:bookId,
        buyerId: buyerId,
        sellerId: sellerId,
        status:"wait"
    })
    let book =await Book.findOne({
        _id:bookId,
        by: sellerId
    })
    book.buyerId = buyerId;
    book.status="wait"
    book=await book.save();
    return "Requested Successfully"
}

const AcceptRequest=async({buyerId,bookId})=>{
    let book =await Book.findOne({
        buyerId: buyerId,
        _id:bookId
    })
    book.status="success"
    book=await book.save();
    const req=await Request.deleteOne({
        bookId:bookId,
        buyerId: buyerId
    })
    return "Request Accepted"
}

const DeclineRequest = async ({ buyerId, bookId }) => {
    let book = await Book.findOne({
        buyerId: buyerId,
        _id: bookId
    })
    book.status = "none"
    book = await book.save();
    const req = await Request.deleteOne({
        bookId: bookId,
        buyerId: buyerId
    })
    return "Request Declined"
}



module.exports={Login,SignIn,DonateBook,DeclineRequest,AcceptRequest,CreateRequest,RemoveBook}