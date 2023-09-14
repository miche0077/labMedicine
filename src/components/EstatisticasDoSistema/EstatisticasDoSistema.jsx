import PropTypes from 'prop-types';
import "./EstatisticasCard.css"

function EstatisticasDoSistema({ titulo, valor }) {
  return (
    <div className='estatisticas-container'>
    <div className="estatisticas-card">
      <h3 className="estatisticas-titulo">{titulo}</h3>
      <p className="estatisticas-valor">{valor}</p>
    </div>
    </div>
  );
}
EstatisticasDoSistema.propTypes ={
    titulo: PropTypes.string.isRequired,
    valor:PropTypes.number.isRequired
}
export default EstatisticasDoSistema;
