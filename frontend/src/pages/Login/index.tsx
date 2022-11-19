import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';

export const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (username && password) {
      const Logged = await auth.signin(username, password);

      Logged ? navigate('/') : alert('Não deu certo.');
    }
  };

  return (
    <div>
      <h2>Acesso restrito!</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Digite seu username"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Digite sua senha"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
