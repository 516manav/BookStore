const { SignIn, Login, GetAllUsers, DonateBook } = require("./functions/mutation");
const { GenreBooks, GetAllBooks, GetRequests, GetPendingReq, GetBooksSold, GetBookReceived, SearchBooks } = require("./functions/query");




const resolvers = {
    Query: {
        users: () => {
            return GetAllUsers();
        },
        GenreBook:(_,args)=>{
            return GenreBooks(args);
        },
        GetAllBooks:()=>{
            return GetAllBooks();
        },
        GetRequests:(_,args)=>{
            return GetRequests(args);
        },
        GetPendingReq: (_,args) => {
            return GetPendingReq(args);
        },
        GetBooksSold: (_, args) => {
            return GetBooksSold(args);
        },
        GetBookReceived: (_, args) => {
            return GetBookReceived(args)
        }
    },
    Books:{
        userD:(_,args,{name,email})=>{
            const users={
                username:name,
                userEmail:email
            }
            return users
        },
    },
 
    Mutation: {
        SignIn: (parent, args) => {
            return SignIn(args);
        },
        Login: (parent, args) => {
            return Login(args)
        },
        DonateBook: (parent, args) => {
            return DonateBook(args)
        },

        SearchBooks: (_, args) => {
            return SearchBooks(args)
        }

    }

};
module.exports = { resolvers };