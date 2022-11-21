import { Route, Routes } from 'react-router-dom';
import Register from './pages/Cadastro';
import Login from './pages/Login';
import Account from './pages/Account';
import { RequireAuth } from './contexts/Auth/RequireAuth';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/private" element={<Account />} /> 
      </Routes>
    </div>
  );
}

export default App;
