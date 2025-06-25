import { Link } from "react-router-dom"
import "./AuthLayout.css"

const Altro = () => {
  const utente = JSON.parse(localStorage.getItem("utente") || "{}")
  return (
    <div className="auth-wrapper">
      <Link to="/">
        <img src="/longLogoBianco.png" alt="Logo" className="logo-auth" />
      </Link>
      <div className="form-box text-center">
        {utente.avatar && (
          <img
            src={utente.avatar}
            alt="Avatar"
            style={{
              width: "100px",
              borderRadius: "50%",
              marginBottom: "1rem",
            }}
          />
        )}

        <h1 className="text-white">
          Ciao
          {" " + utente.nome + " " + utente.cognome} <br />
          Benvenut* nell’area riservata
        </h1>
        <p className="text-white">Accesso effettuato con successo.</p>
      </div>
    </div>
  )
}

export default Altro
