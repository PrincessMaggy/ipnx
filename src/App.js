import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './styles/app.scss';

function App() {
  return (
    <div className="App">
      <Router>

          <Routes>

            <Route path="/" element ={<Home />} />
    
            <Route path="/register" element ={<Register />} />

            <Route path="/login" element ={<Login />} />
            
        </Routes>

       </Router>
  

    </div>
  );
}

export default App;
