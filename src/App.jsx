
import { Route, Router, Switch } from 'react-router-dom'
import './App.css'
import Login from './components/login/login'

function App() {
  

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          
        </Switch>
      </div>
    </Router>
  )
}

export default App
