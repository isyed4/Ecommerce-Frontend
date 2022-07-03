import "./App.css";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/Login"
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/login">
          <li>Login</li>
          </Link>
          <Link to="/cart">
          <li>Shopping Cart</li>
          </Link>
        </ul>
      </nav>

      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
