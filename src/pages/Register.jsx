// Register.js
import React, { useState } from "react";
import "<div styleName={} />
<styles></styles>/Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle register request
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email"
        />
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-label="Senha"
        />
        <button type="submit">Criar Conta</button>
      </form>
    </div>
  );
};

export default Register;
