import FormRegistrazione from "./FormRegistrazione";
import "./AuthLayout.css";
import { Link } from "react-router-dom";

const PaginaRegistrazione = () => {
  return (
    <div className="auth-wrapper">
      <Link to="/">
        <img src="/longLogoBianco.png" alt="Logo" className="logo-auth" />
      </Link>
      <div className="form-box">
        <h2 className="text-center mb-4">Registrazione</h2>
        <FormRegistrazione />
      </div>
    </div>
  );
};

export default PaginaRegistrazione;
