import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import { CartProvider } from "./components/CartContext";
import Home from "./branches/Home";
import Electronics from "./branches/electronics";
import Clothes from "./branches/clothes";
import ElectricalDevices from "./branches/electrical_devices";
import ElectricalTools from "./branches/electrical_tools";
import SuperMarket from "./branches/super_market";
import Watches from "./branches/watches";
import BabyToys from "./branches/baby_toys";
import Furniture from "./branches/furniture";
import Hairdressing from "./branches/hairdressing";
import Login from "./components/login";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<CartProvider>
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/components/Cart' element={<Cart/>}/>
      <Route path='/components/login' element={<Login/>}/>
      <Route path="branches/electronics" element={<Electronics/>}/>
      <Route path='branches/clothes' element={<Clothes/>}/>
      <Route path='branches/electrical_devices' element={<ElectricalDevices/>}/>
      <Route path='branches/electrical_tools' element={<ElectricalTools/>}/>
      <Route path='branches/super_market' element={<SuperMarket/>}/>
      <Route path='branches/watches' element={<Watches/>}/>
      <Route path='branches/baby_toys' element={<BabyToys/>}/>
      <Route path='branches/furniture' element={<Furniture/>}/>
      <Route path='branches/hairdressing' element={<Hairdressing/>}/>
    </Routes>
  </Router>
</CartProvider>
);
