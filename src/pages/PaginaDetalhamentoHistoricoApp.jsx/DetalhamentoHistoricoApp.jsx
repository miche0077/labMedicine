import InformacoesRapidasDoPaciente from "../../components/InformacoesRapidasDoPacientes/InformacoesRapidas";
import LateralMenu from "../../components/LateralMenu/LateralMenu";
import Toolbar from "../../components/Toolbar/Toolbar";
import userImg from "../../assets/images/img-user.png"


function DetalhamentoHistoricoApp(){
    return(
        <div>
            <Toolbar userImage={userImg} userName="lola" pageTitle="Detalhamento de historico de App"/>
            <LateralMenu />
            <InformacoesRapidasDoPaciente />

        </div>
    )
}

export default DetalhamentoHistoricoApp;