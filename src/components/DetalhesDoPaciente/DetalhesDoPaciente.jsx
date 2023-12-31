import HistoricoDeVacinas from "../HistoricoDeVacinas/HistoricoDeVacinas";
import PropTypes from 'prop-types'
import { useParams } from "react-router-dom";


function DetalhesDoPaciente({ pacientes}){
const { id } = useParams();

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
        <p>Data Nascimento: {paciente.dataNascimento}</p>
        <p>Genero: {paciente.genero}</p>
        <p>RG: {paciente.rg}</p>
        <p>Naturalidade: {paciente.naturalidade}</p>
        <p>Numero de carteira: {paciente.numeroCarteira}</p>
        <p>Telefone {paciente.telefone}</p>
        <p>Convenio: {paciente.convenio}</p>
        <p>Validade: {paciente.validade}</p>
        <p>CEP: {paciente.cep}</p>
        <p>Bairro: {paciente.bairro}</p>
        <p>Estado: {paciente.estado}</p>
        <p>Localidade: {paciente.localidade}</p>
        <p>Logradouro: {paciente.logradouro}</p>
        <p>Numero: {paciente.numero}</p>
        <HistoricoDeVacinas historico={historicoDeVacinas}/>
      </div>
)
}

export default DetalhesDoPaciente;

DetalhesDoPaciente.propTypes = {
   
    pacientes: PropTypes.arrayOf(PropTypes.object).isRequired, 
  };