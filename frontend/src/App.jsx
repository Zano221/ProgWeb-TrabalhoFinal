import MainPage from './pages/MainPage/MainPage'
import RegistrarPage from './pages/RegistrarPage/RegistrarPage'
import LoginPage from './pages/LoginPage/LoginPage'
import FuncionarioPage from './pages/FuncionarioPage/FuncionarioPage'
import FuncionarioEditarPage from './pages/FuncionarioEditarPage/FuncionarioEditarPage'
import FuncionarioDeletarPage from './pages/FuncionarioDeletarPage/FuncionarioDeletarPage'
import VitimaAdicionarPage from './pages/VitimaAdicionarPage/VitimaAdicionarPage'
import Logout from './pages/LogoutPage/LogoutPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import VitimaPage from './pages/VitimaPage/VitimaPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/home' element={<MainPage />} />
      <Route path='/vitima' element={<VitimaPage />} />
      <Route path='/registrar' element={<RegistrarPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/funcionario-page' element={<FuncionarioPage />} />
      <Route path='/funcionario-editar-page' element={<FuncionarioEditarPage />} />
      <Route path='/funcionario-deletar-page' element={<FuncionarioDeletarPage />} />
      <Route path='/vitima-adicionar' element={<VitimaAdicionarPage />} />
      <Route path='/logout' element={<Logout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
