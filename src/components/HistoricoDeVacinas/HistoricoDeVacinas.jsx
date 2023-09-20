import PropTypes from 'prop-types';


function HistoricoDeVacinas({historico}){

    return(
        <div>
        <h2>Histórico de Vacinas</h2>
        <ul>
          {historico.map((vacina, index) => (
            <li key={index}>
              <strong>{vacina.nomeDaVacina}</strong> - Data da Aplicação:{" "}
              {vacina.dataDaAplicacao}
            </li>
          ))}
        </ul>
      </div>
    )
}
export default HistoricoDeVacinas;

HistoricoDeVacinas.propTypes ={
    historico: PropTypes.arrayOf(
        PropTypes.shape({
          nomeDaVacina: PropTypes.string.isRequired, 
          dataDaAplicacao: PropTypes.string.isRequired, 
        })
      ).isRequired,
}