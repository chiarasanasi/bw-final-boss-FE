import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./AuthLayout.css";

interface Cliente {
  id: number;
  ragioneSociale: string;
  partitaIva: string;
  email: string;
  dataInserimento: string;
  dataUltimoContatto: string;
  fatturatoAnnuale: number;
  pec: string;
  telefono: string;
  emailContatto: string;
  nomeContatto: string;
  cognomeContatto: string;
  telefonoContatto: string;
  logoAziendaleUrl?: string;
  tipoCliente: string;
  sedeLegaleProvincia: string;
}

const GetClienti: React.FC = () => {
  const [clienti, setClienti] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClienti = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("Token non trovato, effettua il login.");

        const res = await fetch("http://localhost:8080/clienti", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          const errText = await res.text();
          throw new Error(errText || res.statusText);
        }

        const data: Cliente[] = await res.json();
        setClienti(data);
      } catch (err: unknown) {
        if (err instanceof Error) setError(err.message);
        else setError("Errore sconosciuto");
      } finally {
        setLoading(false);
      }
    };
    fetchClienti();
  }, [navigate]);

  if (loading)
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
        <Spinner animation="border" />
      </div>
    );

  if (error)
    return (
      <Container className="mt-4">
        <Alert variant="danger">Errore: {error}</Alert>
      </Container>
    );

  return (
    <div className="auth-wrapper">
      <Link to="/">
        <img src="/longLogoBianco.png" alt="Logo" className="logo-auth" />
      </Link>
      <div className="form-box w-100" style={{ maxWidth: "1200px" }}>
        <h2 className="text-white text-center mb-4">Elenco Clienti</h2>
        <Container>
          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {clienti.map((c) => (
              <Col key={c.id}>
                <Card className="bg-transparent border-light text-white h-100">
                  {c.logoAziendaleUrl && (
                    <Card.Img
                      variant="top"
                      src={c.logoAziendaleUrl}
                      alt={`${c.ragioneSociale} logo`}
                      style={{ objectFit: "cover", height: "150px" }}
                    />
                  )}
                  <Card.Body>
                    <Card.Title className="text-white">{c.ragioneSociale}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{c.tipoCliente}</Card.Subtitle>
                    <Card.Text className="text-white small">
                      <strong>P.IVA:</strong> {c.partitaIva}
                      <br />
                      <strong>Email:</strong> {c.email}
                      <br />
                      <strong>Tel.:</strong> {c.telefono}
                      <br />
                      <strong>PEC:</strong> {c.pec}
                      <br />
                      <strong>Fatturato:</strong> €{c.fatturatoAnnuale.toLocaleString()}
                      <br />
                      <strong>Inserito:</strong> {new Date(c.dataInserimento).toLocaleDateString()}
                      <br />
                      <strong>Ult. contatto:</strong> {new Date(c.dataUltimoContatto).toLocaleDateString()}
                      <br />
                      <hr className="bg-light" />
                      <strong>Referente:</strong> {c.nomeContatto} {c.cognomeContatto}
                      <br />
                      <strong>Email contatto:</strong> {c.emailContatto}
                      <br />
                      <strong>Tel. contatto:</strong> {c.telefonoContatto}
                      <br />
                      <strong>Provincia:</strong> {c.sedeLegaleProvincia}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default GetClienti;
