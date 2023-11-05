const { gql } = require("apollo-server")


const typeDefs = gql`
  type Query {
    users: [User]
  }
  type User {
    _id:String
    name: String
    email: String
    password:String
    profilePic:String
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
    SignIn(name:String,email: String,password:String):String
    Login(email:String,password:String):String
    DonateBook(title:String,author:String,description:String,contact:String,lat:String,lng:String,price:String,image:String,address:String,genre:String):Books

  }
`;

module.exports = { typeDefs };