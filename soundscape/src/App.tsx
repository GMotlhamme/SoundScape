import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Checkout from "./pages/Checkout";
import Products from "./pages/Products";
import SingleProductPage from "./pages/SingleProductPage";
import Support from "./pages/Support";
import WishList from "./pages/WishList";
import Community from "./pages/Community";
import ProductCategory from "./pages/ProductCategory";
import Register from "./pages/Register";
import UploadProduct from "./pages/UploadProduct";
import ProtectedRoute from "./lib/ProtectedRoute";
function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          
            <Route path="/Profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/Checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
            <Route path="/WishList" element={<ProtectedRoute><WishList /></ProtectedRoute>} />
            <Route path="/UploadProducts" element={<ProtectedRoute><UploadProduct /></ProtectedRoute>} />

          <Route path="/Products" element={<Products />} />
          <Route path="/ProductCategory" element={<ProductCategory />} />
          <Route path="/SingleProduct" element={<SingleProductPage />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/Community" element={<Community />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
