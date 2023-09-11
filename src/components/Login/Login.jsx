import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function validateEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleEmailChange =  (e) => {
    setEmail(e.target.value);
  };
  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
  };
  const handleLogin = (e) => {
    e.preventDefault();

    const isValidEmail = validateEmail(email)
    if(!isValidEmail){
        alert('email invalido')
        return
    }
    
    let users = JSON.parse(localStorage.getItem("users"));
    const user = users.find((u) => u.email === email && u.senha === senha);
    if(user){
        navigate("/paginaDeInicio")
    }else{
        toast.error("Credenciais inválidas, por favor tente novamente")
    }
  };
const dadosLogin ={
    email,
    senha
};
console.log(dadosLogin)

  
  return (
    <div className="">
      <h2>Login</h2>
      <form className="form-login" onSubmit={handleLogin}>
        <div className="email">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="password">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={senha}
            onChange={handleSenhaChange}
          />
        </div>
        <button type="submit" onClick={handleLogin} className="btn-login">
          Entrar
        </button>
        <p>
          Não possui uma conta?  
            <Link to="/CriarConta">criar uma conta nova </Link>  
        </p>
        <div>
            <a>
              Esqueci minha senha
            </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
