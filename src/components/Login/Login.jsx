import {useEffect, useState, useRef} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function Login(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [data, setData] = useState('');
    const formRef = useRef();
    const url = "http://localhost:3000/";

    
    const handleEmailChange = (e) =>{
        setEmail(e.target.value);
    };
    const handleSenhaChange = (e) =>{
        setSenha(e.target.value)
    }
    const handleLogin = () =>{

    }
    async function CarregaDados(){
        await axios.get(url + 'user').then(response =>setData(response.data))
    }
    
    async function inputDados(e){
        e.preventDefault()
    }
    useEffect(()=>{
        CarregaDados();
    },[])
    return(
     <div className="">
        <h2>Login</h2>
        <form className="form-login" onSubmit={inputDados} ref={formRef}>
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
            <p>
                Não possui uma conta? 
                <a>
                <Link to="/CriarConta">criar uma conta nova
                </Link>
                </a>
                </p>
            <a>Esqueci minha senha</a>
        </form>
     </div>
    )
}

export default Login;