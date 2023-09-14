import LateralMenu from "../../components/LateralMenu/LateralMenu";
import Toolbar from "../../components/Toolbar/Toolbar";
import imgUser from "../../assets/images/img-user.png";
import EstatisticasCard from "../../components/EstatisticasDoSistema/EstatisticasDoSistema";



function PaginaDeInicio(){
    return(
    <div>
        
        <Toolbar userName={'lola'} pageTitle="Estatisticas e Informações" userImage={imgUser}/>
        <LateralMenu />
        <EstatisticasCard titulo="0" valor={0}/>
    </div>
    )
}

export default PaginaDeInicio;