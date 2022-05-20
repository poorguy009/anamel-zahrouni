import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Info from './pages/Info';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/info" element={<Info />} />
      </Routes>
    </Router>
    
  );
}

export default App;
