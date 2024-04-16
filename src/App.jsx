import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeScreen from './pages/home/HomeScreen'
import CartScreen from './pages/cart/CartScreen'
import RootLayout from './layout/RootLayout'
import AboutScreen from './pages/AboutScreen'
import ContactScreen from './pages/ContactScreen'
import LoginScreen from './pages/login/LoginScreen'
import RegisterScreen from './pages/login/RegisterScreen'
import FAQScreen from './pages/FAQScreen'
import ShopScreen from './pages/shop/ShopScreen'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/cart' element={<CartScreen />} />
          <Route path='/about' element={<AboutScreen />} />
          <Route path='/contact' element={<ContactScreen />} />
          <Route path='/faq' element={<FAQScreen />} />
          <Route path='/shop' element={<ShopScreen />} />
        </Route>
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
      </Routes>
    </Router>
  )
}

export default App
