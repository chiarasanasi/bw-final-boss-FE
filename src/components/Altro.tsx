import { Link } from "react-router-dom";
import "./AuthLayout.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Altro = () => {
  const navigate = useNavigate();
  return (
    <div className="auth-wrapper">
      <Link to="/">
        <img src="/longLogoBianco.png" alt="Logo" className="logo-auth" />
      </Link>
      <div className="form-box text-center">
        <h1 className="text-white">Benvenut* nell’area riservata</h1>
        <p className="text-white">Accesso effettuato con successo.</p>
      </div>
      <Button className="m-3 w-50" onClick={() => navigate("/clienti")}></Button>
    </div>
  );
};

export default Altro;
