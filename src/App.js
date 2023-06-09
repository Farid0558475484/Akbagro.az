import React, { useState, useEffect } from "react";
import "./App.module.scss";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Menu from "./components/Header/Menu";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Servis from "./components/Servis/Servis";
import About from "./components/About/About";
import Product from "./components/Product/Product";
import Logo from "./components/Logo/Logo";

function App() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowLogo(false);
    }, 4000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        {showLogo && <Logo />}
        <Navbar />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/products" element={<Product />} />
          <Route path="/services" element={<Servis />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
