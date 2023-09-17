import { useState } from "react";
import LateralMenu from "../../components/LateralMenu/LateralMenu";
import Toolbar from "../../components/Toolbar/Toolbar";
import userImg from "../../assets/images/img-user.png";
import "./cadastroDasVacinas.css";
import InformacoesRapidasDoPaciente from "../../components/InformacoesRapidasDoPacientes/InformacoesRapidas";

function CadastroDasVacinas() {
  const [formData, setFormData] = useState({
    nomeDaVacina: "",
    laboratorioDaVacina: "",
    dataDaAplicacao: new Date().toISOString().slice(0, 10),
    horarioAplicacao: new Date().toTimeString().slice(0, 5),
    quantidadeAplicada: "",
    observacoes: "",
  });

  const [errors, setErrors] = useState({});

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
  
    if (formData.nomeDaVacina.length < 6 || formData.nomeDaVacina.length > 80) {
      validationErrors.nomeDaVacina = "Nome da vacina deve ter entre 6 e 80 caracteres";
    }
  
    if (
      formData.laboratorioDaVacina.length < 8 ||
      formData.laboratorioDaVacina.length > 80
    ) {
      validationErrors.laboratorioDaVacina =
        "Laboratorio da vacina deve ter entre 8 e 80 caracteres";
    }
  
    if (formData.observacoes.length < 8 || formData.observacoes.length > 8000) {
      validationErrors.observacoes =
        "Observações deve ter entre 8 e 8000 caracteres";
    }
  
    if (parseFloat(formData.quantidadeAplicada) < 0.01) {
      validationErrors.quantidadeAplicada = "La cantidad debe ser mayor que 0.01";
    }
  
    setErrors(validationErrors);
  
    if (Object.keys(validationErrors).length === 0) {
      console.log("Dados do formulário enviados:", formData);
    }
  };
  return (
    <div>
      <Toolbar
        pageTitle="Cadastro Da Consulta"
        userName="lola"
        userImage={userImg}
      />
      <LateralMenu />
      <InformacoesRapidasDoPaciente />

      <div className="form-container">
        <form onSubmit={handleSubmit} className="form-box">
          <h1 className="title-cadastro-consulta">Cadastro de Vacinas </h1>
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
            <label htmlFor="laboratorioDaVacina">Laboratorio da vacina</label>
            <textarea
              id="laboratorioDaVacina"
              name="laboratorioDaVacina"
              value={formData.laboratorioDaVacina}
              onChange={handleChange}
              required
            />
            <label htmlFor="dataDaAplicacao">Data da Aplicação</label>
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
            <button type="submit">Enviar Consulta</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CadastroDasVacinas;
