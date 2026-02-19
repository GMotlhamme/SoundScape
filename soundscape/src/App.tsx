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
import SearchResults from "./pages/SearchResults";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <>
<div className="App">
    <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
          <Route path="/Register" element={<Register />} />
          
            <Route path="/Profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/Checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
            <Route path="/WishList" element={<ProtectedRoute><WishList /></ProtectedRoute>} />
            <Route path="/UploadProducts" element={<ProtectedRoute><UploadProduct /></ProtectedRoute>} />

          <Route path="/Products" element={<Products />} />
          <Route path="/ProductCategory" element={<ProductCategory />} />
          <Route path="/SingleProduct" element={<SingleProductPage />} />
          <Route path="/SearchResults" element={<SearchResults />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/Community" element={<Community />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
