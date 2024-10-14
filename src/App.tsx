//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { ProtectedRoute } from '@/protected-route'
import { AuthProvider } from '@/context/auth-context'
import { Landing } from '@/pages/landing'
import { Login } from '@/pages/login'
import { Register } from '@/pages/register'
import { Home } from '@/pages/home'

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route element={<ProtectedRoute />}>
            <Route path='/home' element={<Home />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
