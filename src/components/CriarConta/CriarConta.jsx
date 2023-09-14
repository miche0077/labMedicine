import { useState } from "react";
import "./CriarConta.css";
import { Link } from "react-router-dom";
import heart from "../../assets/images/heart.png";

function CriarConta() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confSenha, setconfSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const dadosRegistro = {
      email,
      senha,
      confSenha,
    };

    let users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((u) => u.email === email && u.senha === senha);
    if (user) {
      alert("usuario ja cadastrado");
    } else {
      users.push(dadosRegistro);
      localStorage.setItem("users", JSON.stringify(users));
      setEmail("");
      setSenha("");
      setconfSenha("");
    }
  };

  return (
    <div className="criarConta-container">
      <div>
        <img src={heart} alt="coração" className="heart-image"></img>
      </div>
      <div className="linha"></div>

      <form onSubmit={handleSubmit} className="form-criarConta">
        <div>
          <h2 className="criarConta-title">Criar Conta</h2>
          <label htmlFor="email" className="label-criarConta">
            Email:
          </label>
          <input
            type="email"
            className="input-criarConta"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="senha" className="label-criarConta">

            Senha:
          </label>
          <input
            type="password"
            className="input-criarConta"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confSenha" className="label-criarConta">
            Confirmar senha:
          </label>
          <input
            type="password"
            className="input-criarConta"
            value={senha}
            onChange={(e) => setconfSenha(e.target.value)}
          />
        </div>

        <button className="btn-criarConta" onClick={handleSubmit} type="submit">Criar Conta</button>
          <p className="parr-link">
            Ja possui uma conta?
            <Link to="/login" id="link-login">
              faça login
            </Link>
          </p>
        
      </form>
    </div>
  );
}

export default CriarConta;
