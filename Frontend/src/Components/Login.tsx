import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import './userComponents/Login.css'
import axios from "axios";

const Login: React.FC = () => {
  const [username, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:9082/user/signin", {
        username,
        password,
      });
      console.log("Form data submitted:", response.data);

      // Assuming the token is inside response.data.token
      localStorage.setItem("token", response.data);
      if (role === "user") {
        navigate("/viewbook");
      } else if (role === "admin") {
        navigate("/admindashboard");
      }
    } catch (error) {
      alert("wrong username or password");
      console.error("login failed", error);
    }
  };

  return (
    <div className="login-container mt-5">
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>User Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the name"
            value={username}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter the Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicName">
          <Form.Label>Role:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the role user or admin"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  ); 
};

export default Login;
