import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Header from "./components/Header";
import { Route, Routes, Link } from "react-router-dom";
import Checkout from "./components/Checkout";
import { useState } from "react";
import Subtotal from "./components/Subtotal";

function App() {
  const [cartItem, setCartItem] = useState([]);
  const [count, setCount] = useState(0);


  const handleAddtoCart = (electronic) => {
    let copy = [...cartItem];
    copy.push(electronic);
    setCartItem(copy);

    let cartCount = count + 1;
    setCount(cartCount);


  };

  const handleRemoveItem = (electronicId) => {
    let filteredArr = cartItem.filter((electronic, index) => {
      return index !== electronicId;
    });
    setCartItem(filteredArr);

    setCount(count - 1);
  };

   const totalPriceCart = (cart) => cart.reduce((amount, electronic) => electronic.price + amount, 0);

  return (
    <div className="App">
      <Header count={count} />

      <Routes>
        <Route path="/" element={<Home handleAddtoCart={handleAddtoCart} />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/checkout"
          element={
            <Checkout
              cartItem={cartItem}
              count={count}
              handleRemoveItem={handleRemoveItem}
              totalPriceCart={totalPriceCart} 
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
