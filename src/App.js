//import logo from './logo.svg';
import './App.css';
import Todos from './Components/Todo/Todos';
import Header from './Components/Header/Header'
 
function App() {
  return (
    <div className='app'>
       <Header/>
       <Todos />
    </div>
  );
}

export default App;
