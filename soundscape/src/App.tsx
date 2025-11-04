import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Checkout from "./pages/Checkout";
import Products from "./pages/Products";
import SingleProductPage from "./pages/SingleProductPage";
import Support from "./pages/Support";
import WishList from "./pages/WishList";
function App() {
  return (
    <>
     
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="/Checkout" element={<Checkout/>}/>
      <Route path="/Products" element={<Products/>}/>
      <Route path="/SingleProduct" element={<SingleProductPage/>}/>
      <Route path="/Support" element={<Support/>}/>
      <Route path="/WishList" element={<WishList/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
