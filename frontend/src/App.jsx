import MainPage from './pages/MainPage/MainPage'
import RegistrarPage from './pages/RegistrarPage/RegistrarPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/registrar' element={<RegistrarPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
