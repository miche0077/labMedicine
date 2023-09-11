import { useState } from "react";

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
    }else{
    users.push(dadosRegistro);
    localStorage.setItem("users", JSON.stringify(users));
    setEmail("");
    setSenha("");
    setconfSenha("");
    }
    
  };

  return (
    <div>
      <h2>Criar Conta</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="senha"> Senha: </label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confSenha"> confirmar senha:</label>
          <input
            type="password"
            id="confSenha"
            value={senha}
            onChange={(e) => setconfSenha(e.target.value)}
          />
        </div>
        <div>
          <button>Criar Conta</button>
        </div>
      </form>
    </div>
  );
}

export default CriarConta;
