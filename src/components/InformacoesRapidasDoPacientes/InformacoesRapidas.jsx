import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import "./InformacoesRapidas.css";
import InformacoesPacientesCard from "../InfoPacientesCard/InfoPacientesCard"

function InformacoesRapidasDoPaciente(props) {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchTermOnClick, setSearchTermOnClick] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchButtonClick = () => {
    setSearchTermOnClick(search);

    const results = props.pacientes.filter((paciente) => {
      if (paciente.nomeCompleto) {
        return (
          paciente.nomeCompleto.toLowerCase().includes(search.toLowerCase()) ||
          paciente.cpf.includes(search)
        );
      }
      return false;
    });
    
    setSearchResults(results);
  };

  return (
    <div className="container-inf">
      <h1 className="title-search">Informações Rapidas Dos Pacientes</h1>
      <div className="container-search">
        <input
          className="input-search"
          type="search"
          placeholder="Digite o nome do paciente"
          value={search}
          onChange={handleSearchChange}
        />
        <span className="icon">
          <FontAwesomeIcon icon={faSearch} />
        </span>
        <button className="btn-search" type="button" onClick={handleSearchButtonClick}>
          Buscar
        </button>
      </div>

      {searchTermOnClick && (
        <div className="search-results">
          <h2 className="search-results">Resultados para `{searchTermOnClick}`:</h2>
          <div className="card-container">
            {searchResults.map((result, index) => (
              <InformacoesPacientesCard
              searchResults={searchResults}
                key={index}
                nomeCompleto={result.nomeCompleto}
                edad={result.edad}
                telefono={result.telefono}
                plano={result.plano}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

InformacoesRapidasDoPaciente.propTypes = {
  pacientes: PropTypes.array.isRequired,
};

export default InformacoesRapidasDoPaciente;
