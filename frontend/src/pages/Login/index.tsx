import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoNg from '../../assets/logo_ng.png';
import '../../styles/index.css';
import { Layout } from '../../Layout';
import { api } from '../../hooks/useApi';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { SignatureKind } from 'typescript';

const Login = () => {
  const auth = useContext(AuthContext);

  const navigate = useNavigate();
  const [user, setUser] = useState(null)
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');

  // const handleLogin = async (e: any) => {
  //   const data = { username, password };
  //   const answer = await api.post('/', data);
  //   answer && navigate('/account');
    
  // };
  const handleLogin = async (e:any) => {
    e.preventDefault();
    if (username && password) {
        const isLogged = await auth.signIn(username, password);
        //const answer = await api.post('/', { username, password });
        if (isLogged) {
            alert(`Deu certo. ${isLogged}`);
            navigate('/account')
        } else {
            alert(`Não deu certo.`);
        }
    }}

  return (
    <Layout>
      <form className="form">
        <span className="header">
          <img src={logoNg} alt="" />
        </span>
        <span className="header-tittle"> Login </span>
        <div className="wrap-input">
          <input
            className={
              username !== '' ? 'occupiedBox input' : 'input'
            }
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
            className={
              password !== '' ? 'occupiedBox input' : 'input'
            }
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
};


export default Login;
