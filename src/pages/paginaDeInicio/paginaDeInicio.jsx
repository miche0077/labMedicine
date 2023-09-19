import LateralMenu from "../../components/LateralMenu/LateralMenu";
import Toolbar from "../../components/Toolbar/Toolbar";
import imgUser from "../../assets/images/img-user.png";
import EstatisticasDoSistema from "../../components/EstatisticasDoSistema/EstatisticasDoSistema";
import InformacoesRapidasDoPaciente from "../../components/InformacoesRapidasDoPacientes/InformacoesRapidas";
import InformacionesPacientesCard from "../../components/InfoPacientesCard/InfoPacientesCard";
import { useState, useEffect } from "react";



function PaginaDeInicio(){
const [pacientes, setPacientes] = useState([]);  
const [searchResults, setSearchResults] = useState([]);


useEffect(() => {
    const pacientesFromLocalStorage = JSON.parse(localStorage.getItem("pacientes"));
    if (pacientesFromLocalStorage) {
      setPacientes(pacientesFromLocalStorage);
    }
    console.log(pacientes)
  }, []);
    return(
    <div>
        
        <Toolbar userName={'lola'} pageTitle="Estatisticas e Informações" userImage={imgUser}/>
        <LateralMenu />
        <EstatisticasDoSistema />
        <InformacoesRapidasDoPaciente pacientes={pacientes}/>
        <InformacionesPacientesCard searchResults={searchResults} />
    </div>
    )
}

export default PaginaDeInicio;