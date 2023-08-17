const { SignIn, Login, DonateBook, CreateRequest, AcceptRequest, DeclineRequest, RemoveBook } = require("./functions/mutation");
const { GetBooks,GetBook, UserD } = require("./functions/query");
const { BooksOffered, BooksDonated, BooksRecieved } = require("./functions/usersFunction");

 const resolvers={
        Query:{
            DisplayBook:()=>{
                return GetBooks();
            },
            ProfileData:(parent ,args,{userId})=>{
                return ProfileData({id:userId})
            },
            GetBook:(_,args)=>{
                return GetBook(args)
            }

        },
        User:{
            BooksOfferd:(ur,args)=>{
                return BooksOffered({id:ur._id})
            },
            BooksDonate:(ur,args)=>{
                return BooksDonated({ id: ur._id })
            },
            BooksReceived:(ur)=>{
                return BooksRecieved({ id: ur._id })
            }

        },
        Books:{
             userD:async(_,args,{username,useremail})=>{
       
                return UserD({useremail:useremail,username:username})
             }
        },
        Mutation:{
            SignIn:(_,args)=>{
                return SignIn(args)
            },
            Login:(_,args)=>{
                return Login(args)
            },
            DonateBook:(_,args,{userId})=>{
                return DonateBook({...args,userId:userId})
            },
            CreateRequest:(_,args,{userId})=>{
                return CreateRequest({...args,sellerId:userId})
            },
            AcceptRequest:(_,args)=>{
                return AcceptRequest(args)
            },
            DeclineRequest:(_,args)=>{
                return DeclineRequest(args)
            },
            RemoveBook:(_,args)=>{
                return RemoveBook(args)
            }


        }
}


module.exports={
   resolvers
}