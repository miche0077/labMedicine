import LateralMenu from "../../components/LateralMenu/LateralMenu";
import Toolbar from "../../components/Toolbar/Toolbar";
import imgUser from "../../assets/images/img-user.png";
import EstatisticasDoSistema from "../../components/EstatisticasDoSistema/EstatisticasDoSistema";
import InformacoesRapidasDoPaciente from "../../components/InformacoesRapidasDoPacientes/InformacoesRapidas";



function PaginaDeInicio(){
    return(
    <div>
        
        <Toolbar userName={'lola'} pageTitle="Estatisticas e Informações" userImage={imgUser}/>
        <LateralMenu />
        <EstatisticasDoSistema />
        <InformacoesRapidasDoPaciente />
    </div>
    )
}

export default PaginaDeInicio;