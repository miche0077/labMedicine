import { Link } from "react-router-dom";
import "./infoPacientesCard.css";
import PropTypes from "prop-types";

function InformacoesPacientesCard({ searchResults }) {
 
  if (!searchResults || searchResults.length === 0) {
    return <div className="no-exist">No hay resultados disponibles.</div>;
  }
console.log(searchResults)
  return (
    <div className="info-container">
      <div className="card-container">
        {searchResults.map((result, index) => (
          
          <div className="card" key={index}>
            <p className="card-nome">nome completo: {result.nomeCompleto}</p>
            <p className="card-edad">data nascimento: {result.dataNascimento}</p>
            <p className="card-tel">Teléfono: {result.telefone}</p>
            <p className="card-plano">Plano: {result.convenio}</p>
            <Link to={`/pacientes/${result.id}` }>Detalhes do Paciente</Link>
           
          </div>
        ))}
      </div>
    </div>
  );
}

InformacoesPacientesCard.propTypes = {
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nomeCompleto: PropTypes.string.isRequired,
      dataNascimento: PropTypes.number.isRequired,
      telefone: PropTypes.string.isRequired,
      convenio: PropTypes.string.isRequired,
    })
  )
};

export default InformacoesPacientesCard;
