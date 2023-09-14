import LateralMenu from "../../components/LateralMenu/LateralMenu";
import Toolbar from "../../components/Toolbar/Toolbar";
import imgUser from "../../assets/images/img-user.png";
import EstatisticasDoSistema from "../../components/EstatisticasDoSistema/EstatisticasDoSistema";
import InformacoesRapidasDoPaciente from "../../components/InformacoesRapidasDoPacientes/InformacoesRapidas";
import InformacionesPacientesCard from "../../components/InfoPacientesCard/InfoPacientesCard";



function PaginaDeInicio(){
    return(
    <div>
        
        <Toolbar userName={'lola'} pageTitle="Estatisticas e Informações" userImage={imgUser}/>
        <LateralMenu />
        <EstatisticasDoSistema />
        <InformacoesRapidasDoPaciente />
        <InformacionesPacientesCard />
    </div>
    )
}

export default PaginaDeInicio;