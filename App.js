import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"
import Nav from "./components/Nav"


import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div>
<Nav/>
   <Home />
    </div>
  );
}

export default App;
