import HistoricoDeVacinas from "../HistoricoDeVacinas/HistoricoDeVacinas";
import PropTypes from 'prop-types'
import { useParams } from "react-router-dom";


function DetalhesDoPaciente({ pacientes}){
const { id } = useParams();



console.log('id obtenido de la url', id)
const paciente = pacientes.find((p) => p.id === id );

console.log(paciente)
if(!paciente){
    return <div>PACIENTE NÃO ENCONTRADO</div>
}
const historicoDeVacinas = paciente.historico || [];

    return(
        <div>
        <h2>Detalhes do Paciente</h2>
        <p>Nome: {paciente.nomeCompleto}</p>
        <p>CPF: {paciente.cpf}</p>
        <HistoricoDeVacinas historico={historicoDeVacinas}/>
      </div>
)
}

export default DetalhesDoPaciente;

DetalhesDoPaciente.propTypes = {
   
    pacientes: PropTypes.arrayOf(PropTypes.object).isRequired, 
  };