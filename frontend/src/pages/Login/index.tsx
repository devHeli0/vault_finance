import { ChangeEvent, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';

const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');

  const handleusernameInput = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setusername(event.target.value);
  };

  const handlePasswordInput = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    if (username && password) {
      const isLogged = await auth.signin(username, password);
      if (isLogged) {
        navigate('/account');
      } else {
        alert('Não deu certo.');
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={handleusernameInput}
        placeholder="Digite seu e-mail"
      />
      <input
        type="password"
        value={password}
        onChange={handlePasswordInput}
        placeholder="Digite sua senha"
      />
      <button onClick={handleLogin}>Logar</button>
      <nav>
      <hr />
          <Link to="/cadastro">Ainda não tem um conta? Cadastre-se</Link>     
        </nav>
    </div>
  );
};

export default Login;