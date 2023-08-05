import React, { useState } from "react";
import "./style.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const fazerLogin = () => {
    // Aqui você pode implementar a lógica para fazer a autenticação com o backend
    // por exemplo, fazer uma requisição para verificar as credenciais no servidor
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="box-formulario">
      <div className="formulario">
        <div className="box-title">
          <h1 className="title">SING IN</h1>
        </div>

        <span>
          <input
            type="text"
            className="input-hidden"
            id="usernameId"
            name="username"
            placeholder="User Name"
            autoComplete="off"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </span>

        <span>
          <input
            type="password"
            className="input-hidden"
            id="passwordId"
            name="password"
            placeholder="password"
            autoComplete="off"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </span>

        <div className="box-btn">
          <button type="submit" className="btn-submit" onClick={fazerLogin}>
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
