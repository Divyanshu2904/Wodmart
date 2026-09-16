import { BrowserRouter, Routes, Route } from 'react-router-dom'
import usePlugins from './hooks/usePlugins'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import ShopDetails from './pages/ShopDetails'
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetails'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import Verification from './pages/Verification'
import NewPassword from './pages/NewPassword'
import Checkout from './pages/Checkout'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import OrderTrack from './pages/OrderTrack'
import Faq from './pages/Faq'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsCondition from './pages/TermsCondition'

function AppRoutes() {
  usePlugins()
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home2" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop-details" element={<ShopDetails />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog-details" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/new-password" element={<NewPassword />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/order-track" element={<OrderTrack />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-condition" element={<TermsCondition />} />
    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
