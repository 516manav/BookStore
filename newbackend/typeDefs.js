const { gql } = require("apollo-server")


const typeDefs = gql`
  type Query {
    users: [User]
    GenreBook(genre:String):[Books]
    GetAllBooks:[Books]
    GetRequests(userId:ID):[Books]
    GetPendingReq(userId:ID):[Books]
    GetBooksSold(userId:ID):[Books]
    GetBookReceived(userId:ID):[Books]
  }
  type User {
    _id:String
    name: String
    email: String
    password:String
  }
  type userDetails{
    user:User,
    token:String
  }
    type Books{
    _id:ID
    by:ID
    title:String
    author:String
    genre:String
    description:String
    address:String
    contact:String
    status:String
    location:String
    price:String
    rating:Float
    userD:miniUser
    image:String
    buyerId:ID
    lng:String
    lat:String
  }
  type miniUser{
    username:String
    userEmail:String
  }
  type Register{
    status:String
    currentuser:User
  }
  type Mutation{
    SignIn(name:String,email: String,password:String):userDetails
    Login(email:String,password:String):userDetails
    DonateBook(title:String,author:String,description:String,contact:String,lat:String,lng:String,genre:String,price:String,image:String,address:String,userId:ID,rating:Float,sellerName:String):Books
    RemoveBook(bookId:ID):String
    CreateRequest(bookId:ID,buyerId:ID,buyerName:String):String
    AcceptRequest(bookId:ID):String
    DeclineRequest(bookId:ID):String
     SearchBooks(text:String):[Books]
  }
`;

module.exports = { typeDefs };