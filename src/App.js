import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/about";
import Card from "./components/card";
import Contacts from "./components/contacts";

function App(){
  return(
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home />} />  
        <Route path="/about" element={<About />} />  
        <Route path="/contacts" element={<Contacts />} />  
        <Route path="/card/:user" element={<Card/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App;