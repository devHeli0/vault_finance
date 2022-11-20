import { useContext } from 'react';
import './App.css';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import  Register  from './pages/Cadastro';
import Login from './pages/Login'
import Account from './pages/Account'
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { AuthContext } from './contexts/Auth/AuthContext';

function App() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signout();
    navigate('/')
  }

  return (
    <div className="App">
      <header>
        <h1>NG:APP</h1>
        <nav>
          <Link to="/cadastro">Ainda não tem um conta? Cadastre-se</Link>
          {auth.user && <button onClick={handleLogout}>Sair</button>}
        </nav>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<RequireAuth><Login /></RequireAuth>}/>
        <Route path="/cadastro" element={<Register />}/>
        <Route path="/account" element={<Account />}/>
      </Routes>
    </div>
  );
}

export default App;
