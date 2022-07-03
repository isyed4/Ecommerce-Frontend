import "./App.css";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Header from "./components/Header";
import { Route, Routes, Link } from "react-router-dom";
import Checkout from "./components/Checkout";
import { useState } from "react";

function App() {

 const [cartItem, setCartItem] = useState([])

 const handleAddtoCart = (electronic) => {
   copy = [...cartItem]
   copy.push(electronic)
   setCartItem(copy)
 }



  return (
    <div className="App">


      <Header/>

      <Routes>
        <Route path="/" element={<Home />} handleAddtoCart={handleAddtoCart}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/checkout" element={<Checkout/>} cartItem = {cartItem} />
      </Routes>
    </div>
  );
}

export default App;
