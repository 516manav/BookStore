const bycrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const JWT_SECERT = "shivam";
const User=require("../model/user")
const Book=require("../model/book")
const cloudinary=require("../utils/cloudinary")
const SignIn = async ({ name, email, password ,}) => {
    let hashedPassword = await bycrypt.hash(password, 12);
    const person = await User.findOne({
        email: email
    })
    if(person){
        throw new Error("Email already exists")
    }
    const user = await User.create({
        name: name, email: email, password: hashedPassword
    });

    const token = jwt.sign({ userId: user._id,name:user.name,email:user.email }, JWT_SECERT);
    temp={user,token:token}
    return temp;
}
const Login = async ({ email, password }) => {
    const user = await User.findOne({
        email: email
    })
    if (!user) {
        throw new Error("User does not exists")
    }
    const matched = await bycrypt.compare(password, user.password);
    if (matched) {
        const token = jwt.sign({ userId: user._id, name: user.name, email: user.email }, JWT_SECERT);
        temp = { user, token: token }
        return temp;
    }
    else {
        throw new Error("Invalid email or password");
    }


}
const GetAllUsers = async () => {
    const Users = await User.find({});
    return Users;
}

const DonateBook = async ({ title, author, description, contact, lat, lng, genre, price, image, address, userId, rating, sellerName }) => {
  
 
    let Bookie = {
        by:userId,
        sellerName,
        title,
        author,
        genre,
        description,
        contact,
        status: "none",
        buyerId: "none",
        buyerName:"none",
        lat,
        lng,
        price,
        image,
        address,
        rating
    }
    let book = await Book.create(Bookie);
    return book

}
const RemoveBook = async ({ bookId }) => {
    const book = await Book.deleteOne({
        _id: bookId
    })
    return "Book Deleted"
}

const CreateRequest = async({ bookId, buyerId,buyerName})=>{
        let book =await Book.findOne({_id:bookId})
        book.buyerId=buyerId;
        book.buyerName=buyerName;
        book.status="pending";
        book.save();
        return "Request Created"
}

const AcceptRequest=async({bookId})=>{
    let book = await Book.findOne({ _id: bookId })
    book.status="close";
    book.save();
    return "Request Accepted";
}
const DeclineRequest=async({bookId})=>{
    let book = await Book.findOne({ _id: bookId })
    book.status = "none";
    book.buyerId="none";
    book.buyerName="none";
    book.save();
    return "Request Declined";
}



module.exports={SignIn,Login,GetAllUsers,DonateBook,RemoveBook,CreateRequest,AcceptRequest,DeclineRequest}