
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Cart from './pages/cart'
import Header from './components/header'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
