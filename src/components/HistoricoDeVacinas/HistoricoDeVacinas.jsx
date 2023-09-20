import PropTypes from 'prop-types';

function HistoricoDeVacinas({ historico }) {
  if (!historico || historico.length === 0) {
    return <div>Não possui historico de vacinas disponivel.</div>;
  }

  return (
    <div>
      <h2>Histórico de Vacunas</h2>
      <ul>
        {historico.map((vacinas, index) => (
          <li key={index}>
            <p>{vacinas.nomeDaVacina}</p> - Data da Aplicação: {vacinas.dataDaAplicacao}
          </li>
        ))}
      </ul>
    </div>
  );
}

HistoricoDeVacinas.propTypes = {
  historico: PropTypes.arrayOf(
    PropTypes.shape({
      nomeDaVacina: PropTypes.string.isRequired,
      dataDaAplicacao: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default HistoricoDeVacinas;
