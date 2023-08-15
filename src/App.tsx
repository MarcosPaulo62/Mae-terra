import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/home";
import Category from "./pages/Category/Category";
import Cart from "./pages/Cart";
import User from "./pages/User/User";
import Login from "./pages/Login/login";
import Payment from "./pages/Payment/payment";
import Success from "./pages/Success/success";

function App() {
  return (
    <>
      <div className="body">
        <p>ola</p>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/category/:tag" element={<Category />} />
            <Route path="/login" element={<Login />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/success" element={<Success />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </BrowserRouter>
        <Footer />
                
      </div>
    </>
  );
}

export default App;
