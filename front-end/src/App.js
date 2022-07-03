import "./App.css";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Header from "./components/Header"
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
   




      <Routes>
          <Route path="/" element={<Header/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
