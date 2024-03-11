import React from "react";
import Nav from "./component/Nav";
import {Routes, Route } from "react-router-dom";
import About from './component/About'
import { Home } from "./component/Home";
import { Projects } from "./component/Projects";
import Contact from "./component/Contact";
import './index.css'
import Footer from "./component/Footer";
const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/projects" element={<Projects/>} />
        <Route exact path="/contact" element={<Contact/>} />

      </Routes>
      <Footer/>
    </>
  );
};
export default App;
