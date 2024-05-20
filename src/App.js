import logo from './logo.svg';
import './App.css';
import SecondComponent, { NewComponent } from './Components/SecondComponent';
import ThirdComponent from './Components/ThirdComponent';
import Counter from './Components/Counter/Counter';

function App() {
  return (
    <div className="App">
      Hello World
    <Counter></Counter>
    </div>
    
  );
  
}

function Components(){
  return(
    <div>
    <FirstComponent></FirstComponent>
    <SecondComponent></SecondComponent>
    <NewComponent></NewComponent>
    <ThirdComponent></ThirdComponent>
    </div>
  );
}

function FirstComponent(){
  return(
    <div className='firstComponent'>
      Hello
    </div>
  );
}

export default App;
