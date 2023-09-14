import { useState } from "react";
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
        <input className="input-search" type="search" value={search} onChange={handleSearchChange} />
        <button className="btn-search">
        Buscar
      </button>
      </div>
      
    </div>
  );
}

export default InformacoesRapidasDoPaciente;
