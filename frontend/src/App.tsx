import { Route, Routes } from 'react-router-dom';
import  Register  from './pages/Cadastro';
import Login from './pages/Login'
import Account from './pages/Account'
import { CRequire } from './contexts/Auth/CRequire';


function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/cadastro" element={<Register />}/>
        <Route path="/account" element={<CRequire><Account /></CRequire>}/>
      </Routes>
    </div>
  );
}

export default App;
