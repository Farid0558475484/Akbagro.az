import React from "react";
import "./App.module.scss";
// import s from "./App.module.scss";
// import Servis from "./components/Servis/Servis";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Header/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
