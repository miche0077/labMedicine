import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Login.css" 


function validateEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  const esqueciSenha = () =>{
    alert("função em construção")
  }
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
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form className="form-login" onSubmit={handleLogin}>
        <div className="email">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            className="form-input"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="password">
          <label htmlFor="password" className="form-label">Senha:</label>
          <input
            type="password"
            className="form-input"
            value={senha}
            onChange={handleSenhaChange}
          />
        </div>
        <button type="submit" onClick={handleLogin} className="btn-login">
          Entrar
        </button>
        <p className="criar-conta">
          Não possui uma conta?  
            <Link to="/CriarConta" id="link-criar-conta">criar uma conta nova </Link>  
        </p>
        <div>
            <a onClick={esqueciSenha} className="esqueci-senha">
              Esqueci minha senha
            </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
