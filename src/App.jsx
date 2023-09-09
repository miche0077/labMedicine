import { Routes, Route} from 'react-router-dom'
import './App.css'
import Login from "./components/login/login";

function App() {
  return (
    <div>
    <Routes>
      
          <Route path="/login" Component={Login} />
      
    </Routes>
    </div>
    
  )
}

export default App
