const {gql}=require("apollo-server")




 const typeDefs=gql`
  type Query{
    DisplayBook:[Books]
    ProfileData(id:ID):User
    GetBook(id:ID):Books
  }
   type User {
    _id:ID
    name: String
    email: String
    password:String  
    BooksOfferd:[Books] 
    BooksDonate:[Books]
    BooksReceived:[Books]
    myrequest:[Request]

  }
  type Request{
    buyer:User
    book:Books
  }
  type Books{
    _id:ID
    by:ID
    title:String
    author:String
    gener:String
    description:String
    address:String
    contact:String
    status:String
    location:String
    price:String
    userD:miniUser
    image:String
    buyerId:ID
  }
  type miniUser{
    username:String
    userEmail:String
  }
  type Mutation{
    SignIn(name:String,email: String,password:String):String
    Login(email:String,password:String):String
    DonateBook(title:String,author:String,description:String,contact:String,lat:String,lng:String,price:String,image:String,address:String):Books
    CreateRequest(bookId:ID,buyerId:ID,sellerId:ID):String
    AcceptRequest(bookId:ID,buyerId:ID):String
    DeclineRequest(bookId:ID,buyerId:ID):String
    RemoveBook(bookId:ID):String
  }

 `



 module.exports={typeDefs}