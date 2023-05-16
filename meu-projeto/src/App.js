import {BrowserRouter as Router, Switch, Routes, Route, Link} from 'react-router-dom'
import Home from './Pages/Home';
import Empresa from './Pages/Empresa';
import Contato from './Pages/Contato';
import NavBar from './componets/NavBar';


function App() {
  
   return (
  <><Router>
    <Routes>
    <Switch>
      <Route exatc path='=/'>
        <Home/>
      </Route>
      <Route  path='=/empresa'>
        <Empresa/>
      </Route>
      <Route  path='=contato'>
        <Contato/>
      </Route>
      </Switch>
    </Routes>
  </Router></>
  
  );
}
<NavBar/>


export default App;
