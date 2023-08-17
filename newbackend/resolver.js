const { SignIn, Login, GetAllUsers, DonateBook } = require("./functions/mutation");




const resolvers = {
    Query: {
        users: () => {
            return GetAllUsers();
        },
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
        DonateBook: (_, args, { userId }) => {
            return DonateBook({ ...args, userId: userId })
        }

    }

};
module.exports = { resolvers };