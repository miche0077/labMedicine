import { Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import CriarConta from "./components/CriarConta/CriarConta";
import PaginaDeInicio from "./pages/paginaDeInicio/PaginaDeInicio";
import CadastroPacientes from "./pages/paginaDeCadastroDePaciente/CadastroPacientes";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/CriarConta" element={<CriarConta />} />
        <Route path="/paginaDeInicio" element={<PaginaDeInicio />} />
        <Route path="/cadastroPacientes" element={<CadastroPacientes />} />
      </Routes>
    
    </div>
  );
}

export default App;
