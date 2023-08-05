import React, { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const signUp = () => {
    // Aqui você pode implementar a lógica para fazer o cadastro com o backend
    // por exemplo, fazer uma requisição para enviar os dados para o servidor
    console.log("Username:", username);
    console.log("Name:", name);
    console.log("Password:", password);
  };

  return (
    <div className="box-formulario">
      <div className="formulario">
        <div className="box-title">
          <h1 className="title">Formulário de Cadastro</h1>
        </div>
        <form id="form">
          <span>
            <input
              type="text"
              className="input-hidden"
              id="usernameRegistrationId"
              name="username"
              placeholder="UserName"
              autoComplete="off"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </span>

          <span>
            <input
              type="text"
              className="input-hidden"
              id="nameRegistrationId"
              name="name"
              placeholder="Nome"
              autoComplete="off"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </span>

          <span>
            <input
              type="password"
              className="input-hidden"
              id="passwordRegistrationId"
              name="password"
              placeholder="Senha"
              autoComplete="off"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </span>

          <div className="box-btn">
            <button type="submit" className="btn-submit" onClick={signUp}>
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
