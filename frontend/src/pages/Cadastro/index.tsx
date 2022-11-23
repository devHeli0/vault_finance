import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoNg from '../../assets/logo_ng.png';
import '../../styles/index.css';
import { PageLayout } from '../../Layout';
import { api } from '../../hooks/api';

const Register = () => {
  //const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e: any) => {
    e.preventDefault();
    const data = { username, password };
    const answer = await api.post('/cadastro', data);
    if (answer) {
      window.alert(answer.data.message);
    }
  };

  return (
    <PageLayout>
      <form onSubmit={handleRegister} className="base">
        <span className="header">
          <img src={logoNg} alt="" />
        </span>
        <span className="header-tittle"> Cadastro </span>
        <div className="wrapper-input">
          <input
            className={
              username !== '' ? 'occupiedBox input' : 'input'
            }
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            minLength={3}
          />
          <span
            className="focus-input"
            data-placeholder="@username"
          ></span>
        </div>
        <div className="wrapper-input">
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
        <div container-btn>
          <button
            type="submit"
            className="btn"
            onClick={handleRegister}
          >
            Cadastrar
          </button>
        </div>
        <span className="txt3">
          *username deve conter no mínimo 3 caracteres
        </span>
        <span className="txt3">
          *password deve conter no mínimo 3 caracteres
        </span>
        <div className="flex-center">
          <span className="txt1">Já tem uma conta?</span>
          <Link className="txt2" to="/">
            Faça o Login!
          </Link>
        </div>
      </form>
    </PageLayout>
  );
};

export default Register;
