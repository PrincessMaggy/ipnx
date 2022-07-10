import './App.css';
import Home from './pages/Home';

import Register from './pages/Register';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './styles/app.scss';

function App() {
  return (
    <div className="App">
      <Router>

          <Routes>

            <Route path="/" element ={<Home />} />
    
            <Route path="/register" element ={<Register />} />
            
        </Routes>

       </Router>
  

    </div>
  );
}

export default App;
