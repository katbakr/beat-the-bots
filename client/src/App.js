import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import "./App.css";

import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Battle from "./components/pages/Battle";
import Bye from "./components/pages/Bye";
import Dashboard from "./components/pages/Dashboard";

import io from 'socket.io-client';
// connect to SERVER port
const socket = io();

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (

    <div  className="base">
      <div className='gameBox'>
        <div className='displayBox'>
          <ApolloProvider client={client}>
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/battle" element={<Battle socket={socket} />} />
                <Route path="*" element={<Bye />} />
              </Routes>
            </Router>
          </ApolloProvider>
        </div>
      </div>
  </div>
  );
}

export default App;
