import { Routes, Route, Link } from 'react-router-dom';
import { LoginPage } from './pages/Login';
import { HomePage } from './pages/Home';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
   
}

function Nav() {
  return (
  <nav>
    <Link to="/home">Home</Link>
  </nav>
  );
}

export default App;
