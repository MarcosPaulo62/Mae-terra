import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import Cart from "./pages/Cart";



function App() {
  return (
    <>
      <div className="body">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/carrinho' element={<Cart />} />
            <Route path='/category/:tag' element={<Category />} /> 
            {/* <Route path='/*' element={<NotFound />} /> */}                                                                                                                   />} /> */}
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
      
    </>
  );
}

export default App;
