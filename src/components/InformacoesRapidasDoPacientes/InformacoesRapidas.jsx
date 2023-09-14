import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './InformacoesRapidas.css'


function InformacoesRapidasDoPaciente() {
  const [search, setSearch] = useState("");
 
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  
  return ( 

    <div className="container-inf">
      <h1 className="title-search">Informações Rapidas Dos Pacientes</h1>
      <div className="container-search">
        <input className="input-search" type="search" placeholder="Digite o nome do paciente" value={search} onChange={handleSearchChange} />
        <span className="icon">
          <FontAwesomeIcon icon={faSearch} />
        </span>
        <button className="btn-search" >
        Buscar
      </button>
      </div>
      
    </div>
  );
}

export default InformacoesRapidasDoPaciente;
