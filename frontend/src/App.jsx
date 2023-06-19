import MainPage from './pages/MainPage/MainPage'
import RegistrarPage from './pages/RegistrarPage/RegistrarPage'
import LoginPage from './pages/LoginPage/LoginPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import VitimaPage from './pages/VitimaPage/VitimaPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/vitima' element={<VitimaPage />} />
      <Route path='/registrar' element={<RegistrarPage />} />
      <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
