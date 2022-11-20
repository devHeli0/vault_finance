import { useContext } from 'react';
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
    <div>
      <Routes>
        <Route path="/" element={<RequireAuth><Login /></RequireAuth>}/>
        <Route path="/cadastro" element={<Register />}/>
        <Route path="/account" element={<Account />}/>
      </Routes>
    </div>
  );
}

export default App;
