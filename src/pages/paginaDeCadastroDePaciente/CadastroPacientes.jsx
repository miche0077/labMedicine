import LateralMenu from "../../components/LateralMenu/LateralMenu";
import Toolbar from "../../components/Toolbar/Toolbar";
import imgUser from "../../assets/images/img-user.png";
import { useState, useEffect } from "react";
import "./cadastroPacientes.css";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

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
    convenio: "",
    numeroCarteira: "",
    validade:"",
    cep: "",
    localidade: "",
    estado: "",
    logradouro: "",
    numero: "",
    bairro: "",
  });
  const [pacientes, setPacientes] = useState([]);
  const [botoesAtivos] = useState(false);
  const [errors, setErrors] = useState({});
  const [text, setText] = useState("");
  const minLengthTextArea = 5;
  const maxLength = 50;


  const guardarEnLocalStorage = (pacientes) => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
   
  };

  useEffect(() => {
    const pacientesLocalStorage = JSON.parse(localStorage.getItem('pacientes'));
    if (pacientesLocalStorage) {
      setPacientes(pacientesLocalStorage);
    }
  }, []);

  useEffect(() => {
    guardarEnLocalStorage(pacientes);
  }, [pacientes]);
 

const handleEditPacientes = (id) => {
  const updatePacientes = pacientes.map((paciente) =>
    paciente.id === id ? {...paciente, editable: true} : paciente
  );
  setPacientes(updatePacientes);
}
const handleSavePacientes = (dataPaciente) =>{

  dataPaciente.id = uuidv4();

  const updatedPacientes = [...pacientes, dataPaciente]
  
  setPacientes(updatedPacientes);

  guardarEnLocalStorage(updatedPacientes)
}

const handleDeletePaciente = (id) => {
  const updatedPacientes = pacientes.filter((paciente) => paciente.id !== id);
  setPacientes(updatedPacientes);
};
  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);


    if (newText.length <= minLengthTextArea || newText.length >= maxLength) {
      setErrors({
        ...errors,
        naturalidade: alert(
          `Debe tener entre ${minLengthTextArea} y ${maxLength} caracteres`
        ),
      });
    } else {
      setErrors({ ...errors, naturalidade: null });
    }
  };
const handleCEPChange = async (e) =>{
  let cep = e.target.value;
  cep = cep.replace(/[^0-9]/g, '');
  setFormData(cep)
  if(cep.length === 8){
    try{
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      const adressData = response.data;
      
    setFormData({
      ...formData,
      cep: adressData.cep,
      localidade: adressData.localidade,
      estado: adressData.uf,
      logradouro: adressData.logradouro,
      numero: adressData.numero,
      bairro: adressData.bairro,
    });
  }catch(error){
console.error('Erro ao obter dados de endereço', error)
  }
  }
} 
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
    <div>
      <Toolbar
        pageTitle="Cadastro Do Paciente"
        userImage={imgUser}
        userName="lola"
      />
      <LateralMenu />
      <div className="container-cadastroPaciente">
        <h1> Preencha os campos para cadastrar paciente</h1>
        
        <form onSubmit={handleSubmit}>
        <button
              onClick={() => handleEditPacientes(pacientes.id)}
              disabled={!botoesAtivos}
            >
              Editar
            </button>
            <button
              onClick={() => handleDeletePaciente(pacientes.id)}
              disabled={!botoesAtivos}
            >
              Excluir
            </button>
            
         <div className="form-group" onSubmit={handleSubmit}>
            <h2 className="subtitle-cadastro">Identificação</h2>
            <label htmlFor="nomeCompleto">
              Nome Completo:
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
            </label>
            <label htmlFor="genero">
              Gênero:
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
            </label>
            <label>
              Data Nascimento:
              <input 
              type="date"
              id="dataNascimento"
              name="dataNascimento"
              value={formData.dataNascimento}
              onChange={handleInputChange}/>
            </label>
            <label>
              Cpf:
              <input 
              id="cpf"
              name="cpf"
              type="number"
              value={formData.cpf}
              onChange={handleInputChange}
               />
            </label>
            <label>
              RG:
              <input
              type="text"
              id="rg"
              name="rg"
              value={formData.rg}
              onChange={handleInputChange} />
            </label>
            <label>
              Estado Civil:
              <select
              id="estadoCivil"
              name="estadoCivil"
              value={formData.estadoCivil}
              onChange={handleInputChange}
              >
                <option value="">Selecione</option>
                <option value="casado">Casado</option>
                <option value="solteiro">Solteiro</option>
                <option value="separado">Separado</option>
                <option value="divorciado">Divorciado</option>
                <option value="viúvo">Viúvo</option>
                <option value="outro">Outro</option>
              </select>
            </label>
            <label>
              Telefone:
              <input 
              type="tel"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleInputChange}
              ></input>
            </label>
            <label>
              Naturalidade:
              <textarea
                id="naturalidade"
                value={text}
                onChange={handleTextChange}
                placeholder={`Máximo de ${maxLength} caracteres`}
                rows="4"
                cols="50"
              ></textarea>
            </label>
          </div>

          <div className="form-group">
            <h2 className="subtitle-cadastro"> Convênio </h2>
            <label>
              {" "}
              Convênio:
              <input 
              type="text" 
              id="convenio"
              name="convenio"
              value={formData.convenio}
              onChange={handleInputChange}
              />
            </label>
            <label>
              {" "}
              Numero de Carteira:
              <input 
              type="number"
              id="numerCarteira"
              name="numeroCarteira"
              value={formData.numeroCarteira}
              onChange={handleInputChange}
              />
            </label>
            <label>
              Validade:
              <input 
              type="date"
              id="validade"
              name="validade"
              value={formData.validade}
              onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="form-group">
            <h2 className="subtitle-cadastro">Dados de endereço</h2>

            <label>
              CEP:
              <input 
              type="text" 
              name="cep"
              value={formData.cep}
              onChange={handleCEPChange}
              />
            </label>
            <label>
              {" "}
              Cidade:
              <input 
              type="text" 
              name="cidade"
              value={formData.localidade}
              onChange={handleInputChange}
              />
            </label>
            <label>
              {" "}
              Estado:
              <input 
              type="text"
              name="estado"
              value={formData.estado}
              onChange={handleInputChange}
               />
            </label>
            <label>
              {" "}
              Logradouro:
              <input 
              type="text"
              name="logradouro" 
              value={formData.logradouro}
              onChange={handleInputChange}
              />
            </label>
            <label>
              {" "}
              Numero:
              <input 
              type="number" 
              name="numero"
              value={formData.numero}
              onChange={handleInputChange}
              />
            </label>
            <label>
              {" "}
              Complemento:
              <input type="text" 
              name="complemento"
              onChange={handleInputChange}
              />
            </label>
            <label>
              {" "}
              Bairro:
              <input
               type="text"
               name="bairro"
               value={formData.bairro}
               onChange={handleInputChange}
                />
            </label>
            <label>
              {" "}
              Ponto de referencia:
              <input 
              type="text"
              name="ponto de referencia"
              value={formData.pontoReferencia}
              onChange={handleInputChange}
              />
            </label>
            <button 
            type="submit"
            name="salvar"
            onClick={() => handleSavePacientes(formData)} 
           
          
            >Salvar</button>
            
          </div>
        </form>
      </div>
    </div>
  );
}

export default CadastroPacientes;
