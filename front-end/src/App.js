import "./App.css";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Header from "./components/Header";
import { Route, Routes, Link } from "react-router-dom";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div className="App">


      <Header/>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
    </div>
  );
}

export default App;
