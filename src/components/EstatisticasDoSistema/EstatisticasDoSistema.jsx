import  { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyringe } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./EstatisticasDoSistema.css";

function EstatisticasDoSistema() {
  
  const [totalPacientes, setTotalPacientes] = useState(0);
  const [totalVacinas, setTotalVacinas] = useState(0);

  useEffect(() => {
    
    const pacientesFromLocalStorage = JSON.parse(localStorage.getItem("pacientes"));
    const vacinasFromLocalStorage = JSON.parse(localStorage.getItem("vacinas"));

    if (pacientesFromLocalStorage) {
      setTotalPacientes(pacientesFromLocalStorage.length);
    }

    if (vacinasFromLocalStorage) {
      setTotalVacinas(vacinasFromLocalStorage.length);
    }
  }, []);

  return (
    <div className="estatisticas-container">
      <h1 className="estatisticas-titulo">Estatisticas Do Sistema</h1>
      <div className="card-container">
        <div className="card">
        <FontAwesomeIcon id="paciente-icon" icon={faUser} style={{ color: "#538866" }} />
          <h3>Total de Pacientes: {totalPacientes}</h3>
        </div>
        <div className="card">
         <FontAwesomeIcon id="vacina-icon" icon={faSyringe} style={{ color: "#538866" }} />
          <h3>Total de Vacinas: {totalVacinas}</h3>
        </div>
        
      </div>
    </div>
  );
}

export default EstatisticasDoSistema;

