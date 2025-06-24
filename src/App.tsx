import { Routes, Route, Navigate } from "react-router-dom"
import PaginaIniziale from "./components/PaginaIniziale"
import PaginaRegistrazione from "./components/PaginaRegistrazione"
import PaginaLogin from "./components/PaginaLogin"
import Altro from "./components/Altro"

const App = () => {
  const isAuthenticated = !!localStorage.getItem("token")

  return (
    <Routes>
      <Route path="/" element={<PaginaIniziale />} />
      <Route path="/auth/register" element={<PaginaRegistrazione />} />
      <Route path="/auth/login" element={<PaginaLogin />} />
      <Route path="/altro" element={<Altro />} />
    </Routes>
  )
}

export default App
