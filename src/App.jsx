import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import AllProducts from './components/AllProducts'
import CartPage from './components/CartPage'
import Header from './components/Header'
import Footer from './components/Footer'
import Products from './components/admin/Product'
import Sidebar from './components/admin/Sidebar'
import AdminLogin from './components/admin/AdminLogin'
import AddProduct from './components/admin/AddProduct'
import AdminDashboard from './components/admin/AdminDashboard'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/allProducts" element={<AllProducts />} />
            <Route path="/cartPage" element={<CartPage />} />
            <Route path="/adminLogin" element={<AdminLogin />} />

            <Route path='/admin' element={<Sidebar />}>
              <Route index element={<AdminDashboard />} />
              <Route path='addproduct' element={<AddProduct />} />
              <Route path='addproduct/:id' element={<AddProduct />} />
              <Route path='products' element={<Products />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App