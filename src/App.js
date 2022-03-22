import logo from './logo.svg';
import './App.css';
//import Welcome from './Components/Welcome';
import Events from './Components/Events';
import {If, If2}  from './Components/If';
import List from './Components/List';

const arr = ['123', '234', '186'];

function App() {
  return (
    <>
       <Events />
       <If arg />
       <If arg = {false}/>
       <List arr = {['pear', 'apple', 'peach', 'watermelon']}/>
    </>
  );
}

export default App;
