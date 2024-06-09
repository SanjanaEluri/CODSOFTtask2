// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from "./landingpage/NavBar";

function App() {
  return (
    <div className="App">
      
      <Router>
      <NavBar/>
      </Router>
    </div>
  );
}

export default App;
