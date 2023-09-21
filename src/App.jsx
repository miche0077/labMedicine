import { Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import CriarConta from "./components/CriarConta/CriarConta";
import PaginaDeInicio from "./pages/paginaDeInicio/PaginaDeInicio";
import CadastroPacientes from "./pages/paginaDeCadastroDePaciente/CadastroPacientes";
import CadastroDasVacinas from "./pages/paginaDeCadastroDeVacinas/CadastroDasVacinas";
import PaginaDeListagemHistoricoApp from "./pages/paginaDeListagemDeHistoricoApp/PaginaListagemHistoricoDeApp.jsx.jsx";
import DetalhamentoHistoricoApp from "./pages/PaginaDetalhamentoHistoricoApp.jsx/DetalhamentoHistoricoApp";
import { useState, useEffect } from "react";
import DetalhesDoPaciente from "./components/DetalhesDoPaciente/DetalhesDoPaciente";



function App() {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    const pacientesFromLocalStorage =
      JSON.parse(localStorage.getItem("pacientes")) || [];
      console.log("Pacientes cargados:", pacientesFromLocalStorage);
      setPacientes(pacientesFromLocalStorage);
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/CriarConta" element={<CriarConta />} />
        <Route path="/paginaDeInicio" element={<PaginaDeInicio />} />
        <Route path="/cadastroPacientes" element={<CadastroPacientes />} />
        <Route path="/cadastrarVacinas" element={< CadastroDasVacinas />}/>
        <Route path="/listagemDeHistoricoApp" element={<PaginaDeListagemHistoricoApp />}/>
        <Route path="/detalhamentoHistoricoApp" element={<DetalhamentoHistoricoApp />}/>
        <Route path="/pacientes/:id"  element={<DetalhesDoPaciente pacientes={pacientes} />} />

          
      </Routes>
    
    </div>
  );
}

export default App;
