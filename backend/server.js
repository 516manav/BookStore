const { ApolloServer } = require("apollo-server");
const mongoose=require("mongoose");
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolver");
const jwt = require("jsonwebtoken");



const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
 
    context: ({ req }) => {
        const { authorization } = req.headers;
        if (authorization) {
         
            const {userId} =jwt.verify(authorization,"shivam");
            return { userId };
        }
       
    }
});










const url = "mongodb+srv://shivampatil222004:z1RRqhaD4Pmo8DHv@cluster0.0ca0aus.mongodb.net/Book?retryWrites=true&w=majority"
mongoose
    .connect(url, {
        autoIndex: true
    })
    .then(() => {
        server.listen(3032, () => {
            console.log("Started at port 3032");
        });

    })
    .catch((err) => {
        console.log("something went wrong")
        console.log(err)
    })