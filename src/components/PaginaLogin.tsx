import { Container } from "react-bootstrap"
import FormAccesso from "./FormAccesso"
import "./AuthLayout.css"
import { Link } from "react-router-dom"

const PaginaLogin = () => {
  return (
    <div className="auth-wrapper">
      <Link to="/">
        <img src="/longLogoBianco.png" alt="Logo" className="logo-auth" />
      </Link>
      <div className="form-box">
        <h2 className="text-center mb-4">Login</h2>
        <FormAccesso />
      </div>
    </div>
  )
}

export default PaginaLogin
