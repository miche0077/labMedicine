import { useState } from "react";
import LateralMenu from "../../components/LateralMenu/LateralMenu";
import Toolbar from "../../components/Toolbar/Toolbar";
import userImg from "../../assets/images/img-user.png";
import "./cadastroDaConsulta.css"
import InformacoesRapidasDoPaciente from "../../components/InformacoesRapidasDoPacientes/InformacoesRapidas";


function CadastroDaConsulta() {
  const [formData, setFormData] = useState({
    motivoConsulta: "",
    dataConsulta: new Date().toISOString().slice(0, 10),
    horarioConsulta: new Date().toTimeString().slice(0, 5),
    descricaoProblema: "",
    medicacaoReceitada: "",
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

    if (
      formData.motivoConsulta.length < 6 ||
      formData.motivoConsulta.length > 60
    ) {
      validationErrors.motivoConsulta =
        "Motivo da consulta deve ter entre 6 e 60 caracteres";
    }

    if (
      formData.descricaoProblema.length < 15 ||
      formData.descricaoProblema.length > 1000
    ) {
      validationErrors.descricaoProblema =
        "Descrição do problema deve ter entre 15 e 1000 caracteres";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Enviar os dados do formulário para o servidor ou realizar ações necessárias
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
     <h1 className="title-cadastro-consulta">Formulário de Consulta Médica</h1>
      <div className="form-container">
        
        <form onSubmit={handleSubmit} className="form-box">
          <div className="form-group-consulta">
            <label htmlFor="motivoConsulta">Motivo da Consulta:</label>
            <textarea
              id="motivoConsulta"
              name="motivoConsulta"
              value={formData.motivoConsulta}
              onChange={handleChange}
              required
            />
            {errors.motivoConsulta && (
              <span className="error">{errors.motivoConsulta}</span>
            )}
         
            <label htmlFor="dataConsulta">Data da Consulta:</label>
            <input
              type="date"
              id="dataConsulta"
              name="dataConsulta"
              value={formData.dataConsulta}
              onChange={handleChange}
              required
              readOnly
            />
          
            <label htmlFor="horarioConsulta">Horário da Consulta:</label>
            <input
              type="time"
              id="horarioConsulta"
              name="horarioConsulta"
              value={formData.horarioConsulta}
              onChange={handleChange}
              required
              readOnly
            />
          </div>
          <div>
            <label htmlFor="descricaoProblema">Descrição do Problema:</label>
            <textarea
              id="descricaoProblema"
              name="descricaoProblema"
              value={formData.descricaoProblema}
              onChange={handleChange}
              required
            />
            {errors.descricaoProblema && (
              <span className="error">{errors.descricaoProblema}</span>
            )}
          </div>
          <div>
            <label htmlFor="medicacaoReceitada">Medicação Receitada:</label>
            <textarea
              id="medicacaoReceitada"
              name="medicacaoReceitada"
              value={formData.medicacaoReceitada}
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit">Enviar Consulta</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CadastroDaConsulta;
