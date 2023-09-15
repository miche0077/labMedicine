import LateralMenu from "../../components/LateralMenu/LateralMenu";
import Toolbar from "../../components/Toolbar/Toolbar";
import imgUser from "../../assets/images/img-user.png";
import { useState } from "react";

function CadastroPacientes() {
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    genero: "",
    dataNascimento: "",
    cpf: "",
    rg: "",
    estadoCivil: "",
    telefone: "",
    naturalidade: "",
  });

  const [errors, setErrors] = useState({});
  const [text, setText] = useState("");
  const minLengthTextArea = 5;
  const maxLength = 50;

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);

    if (newText.length <= minLengthTextArea || newText.length >= maxLength) {
      setErrors({ ...errors, naturalidade: alert(`Debe tener entre ${minLengthTextArea} y ${maxLength} caracteres`) });
    } else {
      setErrors({ ...errors, naturalidade: null }); 
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    for (const field in formData) {
      if (!formData[field]) {
        validationErrors[field] = "Campo obrigatório";
      }
    }
   
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfRegex.test(formData.cpf)) {
      validationErrors.cpf = "CPF inválido";
    }


   
  };
  return (
    <div className="container-cadastroPaciente">
      <Toolbar
        pageTitle="Cadastro Do Paciente"
        userImage={imgUser}
        userName="lola"
      />
      <LateralMenu />
      <div>
      <h1> Preencha os campos para cadastrar</h1>
      <h2>Cadastro de Paciente</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nomeCompleto">Nome Completo:</label>
          <input
            type="text"
            id="nomeCompleto"
            name="nomeCompleto"
            value={formData.nomeCompleto}
            onChange={handleInputChange}
            required
          />
          {errors.nomeCompleto && (
            <span className="error">{errors.nomeCompleto}</span>
          )}
        </div>
        <div>
          <label htmlFor="genero">Gênero:</label>
          <select
            id="genero"
            name="genero"
            value={formData.genero}
            onChange={handleInputChange}
            required
          >
            <option value="">Selecione</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Outro</option>
          </select>
          {errors.genero && <span className="error">{errors.genero}</span>}
        </div>
        <div>
          <label>Data Nascimento:</label>
          <input type="month" />
        </div>
        <div>
          <label>Cpf:</label>
          <input type="number" />
        </div>
        <div>
          <label>RG:</label>
          <input type="text" />
        </div>
        <div>
          <label>Estado Civil:</label>
          <select>
            <option value="">Selecione</option>
            <option value="casado">Casado</option>
            <option value="solteiro">Solteiro</option>
            <option value="separado">Separado</option>
            <option value="divorciado">Divorciado</option>
            <option value="viúvo">Viúvo</option>
            <option value="outro">Outro</option>
          </select>
        </div>
        <div>
          <label>Telefone:</label>
          <input type="tel"></input>
        </div>
        <div>
          <label>Naturalidade:</label>
          <textarea
            value={text}
            onChange={handleTextChange}
            placeholder={`Máximo de ${maxLength} caracteres`}
            rows="4"
            cols="50"
          ></textarea>
        </div>
        <div>
            <label>Contato de emergencia</label>
            <input 
            type='number'>
            </input>
        </div>
        <div>
            <h2> Convênio </h2>
        <div>
            <label> Convênio</label>
            <input type="text" 
            />
            <label> Numero de Carteira</label>
            <input type="number" 
            />
            <label>
                Validade
            </label>
            <input type='number'/>
        </div>
        <div>
            <h2>Dados de endereço</h2>
            <div>
                <label>CEP</label>
                <input 
                type='number'
                />
                <label> Cidade </label>
                <input 
                type='text'
                />
                <label> Estado </label>
                <input 
                type='text'
                />
                <label> Logradouro </label>
                <input 
                type='text'
                />
                <label> Numero </label>
                <input 
                type='number'
                />
                <label> Complemento </label>
                <input 
                type='text'
                />
                <label> Bairro </label>
                <input 
                type='text'
                />
                <label> Ponto de referencia </label>
                <input 
                type='text'
                />
            </div>
        </div>
        </div>
        <div>
          <button type="submit">Salvar</button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default CadastroPacientes;
