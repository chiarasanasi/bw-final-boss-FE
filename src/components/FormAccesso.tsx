import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormAccesso = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const token = await res.text();
        // QUI IL TOKEN VIENE SALVATO NEL LOCALSTORAGE
        localStorage.setItem("token", token);

        //richiamo l'utente per andare a prendere l'avatar che mi servirà in Altro
        const userRes = await fetch("http://localhost:8080/utente", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (userRes.ok) {
          const user = await userRes.json();
          localStorage.setItem("utente", JSON.stringify(user));
        }
        navigate("/altro");
      } else {
        const err = await res.text();
        alert("Errore: " + err);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert("Errore di rete: " + err.message);
      } else {
        alert("Errore di rete: " + String(err));
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {["username", "email", "password"].map((field) => (
        <Form.Group className="mb-3" controlId={`form-${field}`} key={field}>
          <Form.Label className="text-capitalize">{field}</Form.Label>
          <Form.Control
            type={field === "password" ? "password" : "text"}
            name={field}
            value={formData[field as keyof typeof formData]}
            onChange={handleChange}
            placeholder={`Inserisci ${field}`}
            required
          />
        </Form.Group>
      ))}
      <Button type="submit" variant="danger" className="w-100">
        Accedi
      </Button>
    </Form>
  );
};

export default FormAccesso;
