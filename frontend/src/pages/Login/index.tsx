import { ChangeEvent, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CAuth } from '../../contexts/Auth/CAuth';
import logoNg from '../../assets/logo_ng.png';
import '../../styles/index.css';
import { Layout } from '../../Layout';
import { apiLink, useApi } from '../../hooks/useApi';

const Login = () => {
  const ctxt= useContext(CAuth);
  const navigate = useNavigate();
  const useapi = useApi();
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: any) => {
    

    e.preventDefault();
    const data = { username, password };
    const answer = await useapi.signIn(username, password);
    //lembre de dar uma alerta na janela pra user criado
    window.alert(answer.data);
    navigate('/account');
    }
 
  return (
    <Layout>
      <form className='form'>
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
          <button className="form-btn" onClick={handleLogin}>
            Login
          </button>
        </div>
        <div className="text-center">
          <span className="txt1">Ainda não tem um conta?</span>
          <Link className="txt2" to="/cadastro">
            Cadastre-se
          </Link>
        </div>
      </form>
    </Layout>
  );
}

export default Login;
