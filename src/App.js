import React from "react";
import "./App.module.scss";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Menu from "./components/Header/Menu";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          {/* <Route path="/Products" element={<Products />} />
          <Route path="/about-us" element={<ContactUs />} />
          <Route path="/contacts" element={<Map />} />
          <Route path="/ProductDetails" element={<ProductDetails />} /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
