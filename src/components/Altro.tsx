import { Link } from "react-router-dom"
import "./AuthLayout.css"
import { Button, Badge } from "react-bootstrap"

const Altro = () => {
  const utente = JSON.parse(localStorage.getItem("utente") || "{}")
  const ruoli: string[] = utente.ruoli || []

  return (
    <div className="auth-wrapper">
      <Link to="/">
        <img src="/longLogoBianco.png" alt="Logo" className="logo-auth" />
      </Link>
      <div className="form-box text-center">
        {utente.avatar && (
          <>
            <div className="mb-2">
              {ruoli.includes("ADMIN") && (
                <Badge bg="danger" className="me-2">
                  ADMIN
                </Badge>
              )}
              {ruoli.includes("USER") && <Badge bg="info">USER</Badge>}
            </div>

            <img
              src={utente.avatar}
              alt="Avatar"
              style={{
                width: "100px",
                borderRadius: "50%",
                marginBottom: "1rem",
              }}
            />
          </>
        )}

        <h1 className="text-white">
          Benvenut* <br />
          {utente.nome + " " + utente.cognome} nell’area riservata
        </h1>

        <p className="text-white mt-4">Accesso effettuato con successo.</p>

        {ruoli.includes("ADMIN") && (
          // QUI BISOGNA METTERE I BUTTON CHE PORTANO AGLI ENDPOINT CHE POSSONO FARE SOLO GLI ADMIN (e ci andrebbero anche quegli degli user dato che l'ADMIN tutto può)
          <Button variant="light" className="mt-3">
            Gestisci Ruoli Utenti
          </Button>
        )}
      </div>
    </div>
  )
}

export default Altro
