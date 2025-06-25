import { Form, Button } from "react-bootstrap";
//import { useState } from "react"
//import { useNavigate } from "react-router-dom"

const GetClienti = () => {
  //   const navigate = useNavigate()
  //   const [formData, setFormData] = useState({
  //     username: "",
  //     email: "",
  //     password: "",
  //   })

  //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const { name, value } = e.target
  //     setFormData((prev) => ({ ...prev, [name]: value }))
  //   }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/clienti", {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("token")}` },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const token = await res.text();
        // QUI IL TOKEN VIENE SALVATO NEL LOCALSTORAGE
        localStorage.setItem("token", token);
        navigate("/altro");
      } else {
        const err = await res.text();
        alert("Errore: " + err);
      }
    } catch (err: any) {
      alert("Errore di rete: " + err.message);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default GetClienti;
