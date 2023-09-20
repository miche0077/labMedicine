import { useState, useEffect } from "react";
import LateralMenu from "../../components/LateralMenu/LateralMenu";
import Toolbar from "../../components/Toolbar/Toolbar";
import userImg from "../../assets/images/img-user.png";
import "./cadastroDasVacinas.css";
import InformacoesRapidasDoPaciente from "../../components/InformacoesRapidasDoPacientes/InformacoesRapidas";
import InformacoesPacientesCard from "../../components/InfoPacientesCard/InfoPacientesCard";

function CadastroDasVacinas() {
  const [formData, setFormData] = useState({
    nomeDaVacina: "",
    laboratorioDaVacina: "",
    dataDaAplicacao: new Date().toISOString().slice(0, 10),
    horarioAplicacao: new Date().toTimeString().slice(0, 5),
    quantidadeAplicada: "",
    observacoes: "",
  });

  const [pacientes, setPacientes] = useState([]);
  const [searchResults] = useState([]);
  const [errors, setErrors] = useState({});
  const [vacinas, setVacinas] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedVacinaIndex, setSelectedVacinaIndex] = useState(null);
  const [vacinaSelecionada, setVacinaSelecionada] = useState(null);

  const guardarVacinasEnLocalStorage = (vacinas) => {
    console.log("Guardando vacunas en localStorage:", vacinas);
    localStorage.setItem("vacinas", JSON.stringify(vacinas));
  };
 
  useEffect(() => {
    const vacinasFromLocalStorage = localStorage.getItem("vacinas");
    if (vacinasFromLocalStorage) {
      try {
        const parsedVacinas = JSON.parse(vacinasFromLocalStorage);
        setVacinas(parsedVacinas);
      } catch (error) {
        console.error("Error al analizar los datos de 'vacinas' desde localStorage:", error);
         setVacinas([]);
      }
    } else {
      console.log("No hay datos en localStorage para 'vacinas'. Puedes manejarlo aquí.");
      
       setVacinas([]);
    }
  
    const pacientesFromLocalStorage = localStorage.getItem("pacientes");
    if (pacientesFromLocalStorage) {
      try {
        const parsedPacientes = JSON.parse(pacientesFromLocalStorage);
        setPacientes(parsedPacientes);
      } catch (error) {
        console.error("Error al analizar los datos de 'pacientes' desde localStorage:", error);
        
        setPacientes([]);
      }
    } else {
      console.log("No hay datos en localStorage para 'pacientes'. Puedes manejarlo aquí.");
      
      setPacientes([]);
    }
  }, []);
  

  useEffect(() => {
    
    guardarVacinasEnLocalStorage(vacinas);
  }, [vacinas]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const validationErrors = {};
    setErrors(validationErrors);
  
    if (formData.nomeDaVacina.length < 6 || formData.nomeDaVacina.length > 80) {
      validationErrors.nomeDaVacina = "Nome da vacina deve ter entre 6 e 80 caracteres";
      setErrors(validationErrors);
      return; // Evita continuar si hay errores de validación
    }
  
    // Resto de tus validaciones aquí...
  
    if (Object.keys(validationErrors).length === 0) {
      const novaVacina = {
        id: vacinas.length + 1,
        ...formData,
      };
  
      // Primero actualiza el estado de las vacunas
      setVacinas([...vacinas, novaVacina]);
  
      // Luego, guarda en localStorage
      guardarVacinasEnLocalStorage([...vacinas, novaVacina]);
  
      setFormData({
        nomeDaVacina: "",
        laboratorioDaVacina: "",
        dataDaAplicacao: new Date().toISOString().slice(0, 10),
        horarioAplicacao: new Date().toTimeString().slice(0, 5),
        quantidadeAplicada: "",
        observacoes: "",
      });
    }
  };
  

  const handleExcluir = (index) => {
    const novasVacinas = [...vacinas];
    novasVacinas.splice(index, 1);
    setVacinas(novasVacinas);
    
    setFormData({
      nomeDaVacina: "",
      laboratorioDaVacina: "",
      dataDaAplicacao: new Date().toISOString().slice(0, 10),
      horarioAplicacao: new Date().toTimeString().slice(0, 5),
      quantidadeAplicada: "",
      observacoes: "",
    });
  };

  
  const handleEditar = (index) => {
    setIsEditing(true);
    setSelectedVacinaIndex(index);
    setVacinaSelecionada(vacinas[index]);
  };

  
  const handleSalvar = () => {
    const novasVacinas = [...vacinas];
    novasVacinas[selectedVacinaIndex] = vacinaSelecionada;
    setVacinas(novasVacinas);
    setIsEditing(false);
    setSelectedVacinaIndex(null);
    setVacinaSelecionada(null);
 
    setFormData({
      nomeDaVacina: "",
      laboratorioDaVacina: "",
      dataDaAplicacao: new Date().toISOString().slice(0, 10),
      horarioAplicacao: new Date().toTimeString().slice(0, 5),
      quantidadeAplicada: "",
      observacoes: "",
    });
  };

  
  const handleCancelar = () => {
    setIsEditing(false);
    setSelectedVacinaIndex(null);
    setVacinaSelecionada(null);
    
    setFormData({
      nomeDaVacina: "",
      laboratorioDaVacina: "",
      dataDaAplicacao: new Date().toISOString().slice(0, 10),
      horarioAplicacao: new Date().toTimeString().slice(0, 5),
      quantidadeAplicada: "",
      observacoes: "",
    });
  };

  return (
    <div>
      <Toolbar
        pageTitle="Cadastro Da Consulta"
        userName="lola"
        userImage={userImg}
      />
      <LateralMenu />
      <InformacoesRapidasDoPaciente pacientes={pacientes} />
      <InformacoesPacientesCard searchResults={searchResults} />
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form-box">
          <h1 className="title-cadastro-consulta">Cadastro de Vacinas</h1>
          <div className="form-group-consulta">
            <label htmlFor="nomeDaVacina">Nome da Vacina</label>
            <textarea
              id="nomeDaVacina"
              name="nomeDaVacina"
              value={formData.nomeDaVacina}
              onChange={handleChange}
              required
            />
            {errors.nomeDaVacina && (
              <span className="error">{errors.nomeDaVacina}</span>
            )}
            <label htmlFor="laboratorioDaVacina">Laboratório da vacina</label>
            <textarea
              id="laboratorioDaVacina"
              name="laboratorioDaVacina"
              value={formData.laboratorioDaVacina}
              onChange={handleChange}
              required
            />
            <label htmlFor="dataAplicacao">Data da Aplicação</label>
            <input
              type="date"
              id="dataAplicacao"
              name="dataAplicacao"
              value={formData.dataDaAplicacao}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group-consulta">
            <label htmlFor="horarioAplicacao">Horário de Aplicação</label>
            <input
              type="time"
              id="horarioAplicacao"
              name="horarioAplicacao"
              value={formData.horarioAplicacao}
              onChange={handleChange}
              required
            />
            <label htmlFor="quantidadeAplicada">Quantidade Aplicada</label>
            <input
              type="number"
              id="quantidadeAplicada"
              name="quantidadeAplicada"
              value={formData.quantidadeAplicada}
              onChange={handleChange}
              step="0.01"
              required
            />
            {errors.quantidadeAplicada && (
              <span className="error">{errors.quantidadeAplicada}</span>
            )}
            <label htmlFor="observacoes">Observações</label>
            <textarea
              id="observacoes"
              name="observacoes"
              value={formData.observacoes}
              onChange={handleChange}
              required
            />
          </div>
          <div className="btn-container">
            {isEditing ? (
              <>
                <button type="button" onClick={handleSalvar}>
                  Salvar
                </button>
                <button type="button" onClick={handleCancelar}>
                  Cancelar
                </button>
              </>
            ) : (
              <button 
              type="submit"  
              name="salvar"
              >Enviar Consulta</button>
            )}
          </div>
        </form>
      </div>
      <div className="vacinas-list">
        <h2>Lista de Vacinas</h2>
        {vacinas.length > 0 ? (
          <ul>
            {vacinas.map((vacina, index) => (
              <li key={vacina.id}>
                {vacina.nomeDaVacina} ({vacina.dataDaAplicacao})
                <button type="button" onClick={() => handleEditar(index)}>
                  Editar
                </button>
                <button type="button" onClick={() => handleExcluir(index)}>
                  Excluir
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Não há vacinas registradas.</p>
        )}
      </div>
    </div>
  );
}

export default CadastroDasVacinas;
