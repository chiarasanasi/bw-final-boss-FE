import { Link } from "react-router-dom"
import "./AuthLayout.css"

const Altro = () => {
  return (
    <div className="auth-wrapper">
      <Link to="/">
        <img src="/longLogoBianco.png" alt="Logo" className="logo-auth" />
      </Link>
      <div className="form-box text-center">
        <h1 className="text-white">Benvenut* nell’area riservata</h1>
        <p className="text-white">Accesso effettuato con successo.</p>
      </div>
    </div>
  )
}

export default Altro
