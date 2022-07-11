import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Header from "./components/Header";
import { Route, Routes, Link } from "react-router-dom";
import Checkout from "./components/Checkout";
import { useState } from "react";
import Activate from "./components/Activate";
import ResetPassword from "./components/ResetPassword";
import ResetPasswordConfirm from "./components/ResetPasswordConfirm";
import Signup from "./components/Signup";

import { Provider } from "react-redux";
import store from "./store";

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

  const totalPriceCart = (cart) =>
    cart.reduce((amount, electronic) => electronic.price + amount, 0);

  return (
    <div className="App">
   
      <Provider store={store}>
      <Header count={count} />
        <Routes>
          <Route
            path="/"
            element={<Home handleAddtoCart={handleAddtoCart} />}
          />
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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route
            path="password/reset/confirm/:uid/:token"
            element={<ResetPasswordConfirm />}
          />
          <Route path="/activate/:uid/:token" element={<Activate />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
