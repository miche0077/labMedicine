import LateralMenu from "../../components/LateralMenu/LateralMenu";
import Toolbar from "../../components/Toolbar/Toolbar";
import imgUser from "../../assets/images/img-user.png"
import InformacoesRapidasDoPaciente from "../../components/InformacoesRapidasDoPacientes/InformacoesRapidas";
import InformacoesPacientesCard from "../../components/InfoPacientesCard/InfoPacientesCard";
import { useState, useEffect } from "react";


function PaginaDeListagemHistoricoApp() {
  const [pacientes, setPacientes] = useState([]);
  const [searchResults] = useState([]);

  useEffect(() => {
    const pacientesFromLocalStorage = JSON.parse(localStorage.getItem("pacientes")) || [];
    setPacientes(pacientesFromLocalStorage);
  }, []);

  
  return (
    <div>

        <Toolbar userName="lola" userImage={imgUser} pageTitle="Página de Listagem de Histórico de Aplicação"/>
        <LateralMenu />
        <InformacoesRapidasDoPaciente  pacientes={pacientes}/>
        <InformacoesPacientesCard searchResults={searchResults}/>
        
    </div>
  );
}

export default PaginaDeListagemHistoricoApp;
