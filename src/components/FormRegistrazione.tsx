import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormRegistrazione = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Registrazione riuscita!");
        navigate("/auth/login");
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
      {["nome", "cognome", "username", "email", "password"].map((field) => (
        <Form.Group className="mb-3" key={field}>
          <Form.Label>{field}</Form.Label>
          <Form.Control
            type={field === "password" ? "password" : "text"}
            name={field}
            value={(formData as any)[field]}
            onChange={handleChange}
            placeholder={`Inserisci ${field}`}
          />
        </Form.Group>
      ))}
      <Button type="submit" variant="danger" className="w-100">
        Registrati
      </Button>
    </Form>
  );
};

export default FormRegistrazione;
