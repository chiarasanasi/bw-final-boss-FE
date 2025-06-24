import { Button, Col } from "react-bootstrap"
import { useNavigate, Link } from "react-router-dom"
import "./AuthLayout.css"

const PaginaIniziale = () => {
  const navigate = useNavigate()

  return (
    <div className="auth-wrapper">
      <Link to="/">
        <img src="/longLogoBianco.png" alt="Logo" className="logo-auth" />
      </Link>

      <Col>
        <div className="form-box text-center">
          <h2 className="mb-4 d-flex justify-content-center">BENVENUT*!</h2>
          <Button
            className="m-3 w-50"
            onClick={() => navigate("/auth/register")}
          >
            Registrazione
          </Button>
          <Button
            variant="outline-light"
            className="m-3 w-50"
            onClick={() => navigate("/auth/login")}
          >
            Login
          </Button>
        </div>
      </Col>
    </div>
  )
}

export default PaginaIniziale
