import Header from "./components/Header";
import "./scss/app.scss";

import React from "react";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import { Routes, Route} from "react-router-dom";
import Cart from "./components/pages/Cart";

function App() {
  return (
    <div class="wrapper">
      <Header />

      <div class="content">
        <div class="container">
         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<NotFound/>}/>
          <Route path="cart" element={<Cart/>}/>
          
         </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
