import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const clients = new ApolloClient({
   uri:"http://localhost:3039/",
   cache:new InMemoryCache(),
   headers:{
    authorization:localStorage.getItem("token")||" "
   }
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={clients}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);



//  uri: "http://localhost:3032/",
//   cache: new InMemoryCache(),
//   headers: {
//     authorization: localStorage.getItem("token") || " ",
//   },