const bycrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const JWT_SECERT = "shivam";
const User=require("../model/user")
const Book=require("../model/book")
const SignIn = async ({ name, email, password ,}) => {
    let hashedPassword = await bycrypt.hash(password, 12);
    const person = await User.findOne({
        email: email
    })
    if(person){
        throw new Error("Email already exists")
    }
    const user = await User.create({
        name: name, email: email, password: hashedPassword,profilePic:"none"
    });

    const token = jwt.sign({ userId: user._id,name:user.name,email:user.email }, JWT_SECERT);
    return token;
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
        return token;
    }
    else {
        throw new Error("Invalid email or password");
    }


}
const GetAllUsers = async () => {
    const Users = await User.find({});
    return Users;
}

const DonateBook = async ({ title, author, description, contact, lat, lng, genre, price, image, address,name,email,userId }) => {
    
    let Bookie = {
        by:userId,
        title,
        author,
        genre,
        description,
        contact,
        status: "none",
        buyerId: "none",
        lat,
        lng,
        price,
        image,
        address
    }
    let book = await Book.create(Bookie);
    
    return book

}

module.exports={SignIn,Login,GetAllUsers,DonateBook}