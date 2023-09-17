import LateralMenu from "../../components/LateralMenu/LateralMenu";
import Toolbar from "../../components/Toolbar/Toolbar";
import imgUser from "../../assets/images/img-user.png"
import InformacoesRapidasDoPaciente from "../../components/InformacoesRapidasDoPacientes/InformacoesRapidas";


function PaginaDeListagemHistoricoApp() {
  return (
    <div>

        <Toolbar userName="lola" userImage={imgUser} pageTitle="Página de Listagem de Histórico de Aplicação"/>
        <LateralMenu />
        <InformacoesRapidasDoPaciente />
      
    </div>
  );
}

export default PaginaDeListagemHistoricoApp;
