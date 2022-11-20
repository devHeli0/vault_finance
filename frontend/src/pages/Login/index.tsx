import { ChangeEvent, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import logoNg from '../../assets/logo_ng.png';
import '../../styles/index.css';
import { Layout } from '../../Layout';

const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (username && password) {
      const Logged = await auth.signin(username, password);
      if (Logged) {
        navigate('/account');
      } else {
        navigate('/');
        alert('É necessário criar uma conta');
      }
    }
  };
  return (
    <Layout>
      <span className="header">
        <img src={logoNg} alt="" />
      </span>
      <span className="header-tittle"> Login </span>
      <div className="wrap-input">
        <input
          className={username !== '' ? 'occupiedBox input' : 'input'}
          type="text"
          value={username}
          onChange={(e) => setusername(e.target.value)}
          required
          minLength={3}
        />
        <span
          className="focus-input"
          data-placeholder="username"
        ></span>
      </div>

      <div className="wrap-input">
        <input
          className={password !== '' ? 'occupiedBox input' : 'input'}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          data-placeholder="password"
          required
          minLength={8}
        />
        <span
          className="focus-input"
          data-placeholder="password"
        ></span>
      </div>

      <div container-login-form-btn>
        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
      <div className="text-center">
        <span className="txt1">Ainda não tem um conta?</span>
        <Link className="txt2" to="/cadastro">
          Cadastre-se
        </Link>
      </div>
    </Layout>
  );
};

export default Login;
