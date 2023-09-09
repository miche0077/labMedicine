import {useState} from "react";
function Login(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    const handleEmailChange = (e) =>{
        setEmail(e.target.value);
    };
    const handleSenhaChange = (e) =>{
        setSenha(e.target.value)
    }
    const handleLogin = () =>{

    }
    return(
     <div className="">
        <h2>Login</h2>
        <form className="form-login">
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
                onChange={handleSenhaChange}/>
            </div>
            <button type="button" onClick={handleLogin} className="btn-login">
               Entrar
            </button>
            <p>Não possui uma conta? <a>criar uma conta nova</a></p>
            <a>Esqueci minha senha</a>
        </form>
     </div>
    )
}

export default Login;