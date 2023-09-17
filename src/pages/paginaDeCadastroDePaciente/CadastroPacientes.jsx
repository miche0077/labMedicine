import LateralMenu from "../../components/LateralMenu/LateralMenu";
import Toolbar from "../../components/Toolbar/Toolbar";
import imgUser from "../../assets/images/img-user.png";
import { useState } from "react";
import "./cadastroPacientes.css";

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
          <div className="form-group">
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
              <input type="month" />
            </label>
            <label>
              Cpf:
              <input type="number" />
            </label>
            <label>
              RG:
              <input type="text" />
            </label>
            <label>
              Estado Civil:
              <select>
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
              <input type="tel"></input>
            </label>
            <label>
              Naturalidade:
              <textarea
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
              <input type="text" />
            </label>
            <label>
              {" "}
              Numero de Carteira:
              <input type="number" />
            </label>
            <label>
              Validade:
              <input type="number" />
            </label>
          </div>
          <div className="form-group">
            <h2 className="subtitle-cadastro">Dados de endereço</h2>

            <label>
              CEP:
              <input type="number" />
            </label>
            <label>
              {" "}
              Cidade:
              <input type="text" />
            </label>
            <label>
              {" "}
              Estado:
              <input type="text" />
            </label>
            <label>
              {" "}
              Logradouro:
              <input type="text" />
            </label>
            <label>
              {" "}
              Numero:
              <input type="number" />
            </label>
            <label>
              {" "}
              Complemento:
              <input type="text" />
            </label>
            <label>
              {" "}
              Bairro:
              <input type="text" />
            </label>
            <label>
              {" "}
              Ponto de referencia:
              <input type="text" />
            </label>
            <button type="submit">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CadastroPacientes;
