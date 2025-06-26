import React, { useState } from "react"
import "./AuthLayout.css"
import { Link, useNavigate } from "react-router-dom"
import { Form, Button } from "react-bootstrap"

const CreaClienti = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    ragioneSociale: "",
    partitaIva: "",
    email: "",
    pec: "",
    telefono: "",
    emailContatto: "",
    nomeContatto: "",
    cognomeContatto: "",
    telefonoContatto: "",
    tipoCliente: "SRL",
    dataInserimento: "",
    dataUltimoContatto: "",
    fatturatoAnnuale: "",
    sedeLegaleProvincia: "",
  })

  const token = localStorage.getItem("token")

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch("http://localhost:8080/clienti", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        alert("Cliente creato con successo!")
        setFormData({
          ragioneSociale: "",
          partitaIva: "",
          email: "",
          pec: "",
          telefono: "",
          emailContatto: "",
          nomeContatto: "",
          cognomeContatto: "",
          telefonoContatto: "",
          tipoCliente: "SRL",
          dataInserimento: "",
          dataUltimoContatto: "",
          fatturatoAnnuale: "",
          sedeLegaleProvincia: "",
        })
      } else {
        const err = await res.text()
        alert("❌ Errore: " + err)
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert("Errore di rete: " + err.message)
      } else {
        alert("Errore sconosciuto")
      }
    }
  }

  return (
    <div className="auth-wrapper">
      <Link to="/">
        <img src="/longLogo.png" alt="Logo" className="logo-auth" />
      </Link>

      <div className="form-box">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="form-ragioneSociale">
            <Form.Label className="form-label">Ragione Sociale</Form.Label>
            <Form.Control
              type="text"
              name="ragioneSociale"
              value={formData.ragioneSociale}
              onChange={handleChange}
              required
              placeholder="Inserisci ragione sociale"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-partitaIva">
            <Form.Label className="form-label">Partita IVA</Form.Label>
            <Form.Control
              type="text"
              name="partitaIva"
              value={formData.partitaIva}
              onChange={handleChange}
              required
              placeholder="Inserisci partita IVA"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-email">
            <Form.Label className="form-label">Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Inserisci email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-pec">
            <Form.Label className="form-label">PEC</Form.Label>
            <Form.Control
              type="email"
              name="pec"
              value={formData.pec}
              onChange={handleChange}
              required
              placeholder="Inserisci PEC"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-telefono">
            <Form.Label className="form-label">Telefono</Form.Label>
            <Form.Control
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
              placeholder="Inserisci telefono"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-emailContatto">
            <Form.Label className="form-label">Email Contatto</Form.Label>
            <Form.Control
              type="email"
              name="emailContatto"
              value={formData.emailContatto}
              onChange={handleChange}
              required
              placeholder="Inserisci email contatto"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-nomeContatto">
            <Form.Label className="form-label">Nome Contatto</Form.Label>
            <Form.Control
              type="text"
              name="nomeContatto"
              value={formData.nomeContatto}
              onChange={handleChange}
              required
              placeholder="Inserisci nome contatto"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-cognomeContatto">
            <Form.Label className="form-label">Cognome Contatto</Form.Label>
            <Form.Control
              type="text"
              name="cognomeContatto"
              value={formData.cognomeContatto}
              onChange={handleChange}
              required
              placeholder="Inserisci cognome contatto"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-telefonoContatto">
            <Form.Label className="form-label">Telefono Contatto</Form.Label>
            <Form.Control
              type="tel"
              name="telefonoContatto"
              value={formData.telefonoContatto}
              onChange={handleChange}
              required
              placeholder="Inserisci telefono contatto"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-fatturatoAnnuale">
            <Form.Label className="form-label">Fatturato Annuale</Form.Label>
            <Form.Control
              type="number"
              name="fatturatoAnnuale"
              value={formData.fatturatoAnnuale}
              onChange={handleChange}
              placeholder="Inserisci fatturato annuale"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-dataInserimento">
            <Form.Label className="form-label">Data Inserimento</Form.Label>
            <Form.Control
              type="date"
              name="dataInserimento"
              value={formData.dataInserimento}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-dataUltimoContatto">
            <Form.Label className="form-label">Data Ultimo Contatto</Form.Label>
            <Form.Control
              type="date"
              name="dataUltimoContatto"
              value={formData.dataUltimoContatto}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-tipoCliente">
            <Form.Label className="form-label">Tipo Cliente</Form.Label>
            <Form.Select
              name="tipoCliente"
              value={formData.tipoCliente}
              onChange={handleChange}
            >
              <option value="SRL">SRL</option>
              <option value="SPA">SPA</option>
              <option value="SAS">SAS</option>
              <option value="PA">PA</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-sedeLegaleProvincia">
            <Form.Label className="form-label">
              Provincia (Sede Legale)
            </Form.Label>
            <Form.Control
              type="text"
              name="sedeLegaleProvincia"
              value={formData.sedeLegaleProvincia}
              onChange={handleChange}
              required
              placeholder="Inserisci la provincia"
            />
          </Form.Group>

          <Button type="submit" variant="danger" className="w-100">
            Crea Cliente
          </Button>
          <Button
            variant="secondary"
            className="w-100 mt-3"
            onClick={() => navigate("/clienti")}
          >
            Vai all'elenco clienti
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default CreaClienti
