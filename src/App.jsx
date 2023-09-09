import { Routes, Route} from 'react-router-dom'
import './App.css'
import Login from "./components/login/login";
import CriarConta from './components/CriarConta/CriarConta;';

function App() {
  return (
    <div>
    <Routes>
      
          <Route path="/login" Component={Login} />
          <Route path='/CriarConta' Component={CriarConta} />
    </Routes>
    </div>
    
  )
}

export default App
