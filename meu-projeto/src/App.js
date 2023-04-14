import logo from './logo.svg';
import './App.css';
import HelloWord from './componets/HelloWorld';
import SayMyName from './componets/SayMyName';
import Pessoa from './componets/Pessoa';
import List from './componets/List';
import Frase from './componets/Frase';

function App() {
  

  return (
    <div className="App">
      <h1>Testando CSS</h1>
    
     
    <Pessoa nome="Mateus" 
    idade="28" 
    profissao="Tech Recruiter" 
    foto="https://avatars.githubusercontent.com/u/117872333?v=4" />  
     <Frase />
    <SayMyName nome="Jogador" /> 
    <List/>
          
      </div>
  );
}

export default App;
