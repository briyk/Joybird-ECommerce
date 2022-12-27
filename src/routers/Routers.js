import { Routes, Route , Navigate } from 'react-router-dom'
import { Home, ProductDetails, Shop, Checkout, Cart, Login, Signup } from '../pages/index'

const Routers = () => {
  return (
      <Routes>
        <Route path='/' element={<Navigate to="home"/>} />
        <Route path='home' element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='cart' element={<Cart />} />
        <Route path='shop/:id' element={<ProductDetails />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
      </Routes>

  )
}

export default Routers