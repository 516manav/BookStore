const { ApolloServer } = require("apollo-server");

const express = require("express");
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolver");
const { default: mongoose } = require("mongoose");
const app = express();
const jwt = require("jsonwebtoken")
const JWT_SECERT = "shivam";




const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    context: ({ req }) => {
      
        const { authorization } = req.headers;
        if (authorization) {
          
            const { userId,name,email } = jwt.verify(authorization, JWT_SECERT)
           
            return { userId ,name,email};
        }
    }
});
const url = "mongodb+srv://shivampatil222004:z1RRqhaD4Pmo8DHv@cluster0.0ca0aus.mongodb.net/Book?retryWrites=true&w=majority"
mongoose
    .connect(url, {
        autoIndex: true

    })
    .then(() => {
        server.listen(3039, () => {
            console.log("Started at port 3039");
        });

    })

    .catch((err) => {
        console.log("something went wrong")
        console.log(err)
        
    })

