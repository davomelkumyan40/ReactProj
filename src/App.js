import React from 'react';
import  "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from 'react-router-dom';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Header />
        <Nav />
        <Content state={props.state} addPost={props.addPost} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
