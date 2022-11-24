import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { api, useApi } from '../../hooks/api';
import { PageLayout } from '../../Layout';

const Account = () => {
  const auth = useContext(AuthContext);
  const [data, setData] = useState({ account: '', balance: '' });
  const [value, setValue] = useState('');
  const [username, setUsername] = useState('');
  const Api = useApi();
  const navigate = useNavigate();

  useEffect(() => {
    const resume = async () => {
      const res = await Api.resume();
      setData(res.data);
    };
    resume();
  }, []);

  const handleLogout = async (e: any) => {
    e.preventDefault();
    await auth.signOut();
    navigate('/');
  };

  const Pay = async (e: any) => {
    e.preventDefault();
    if (username && value) {
      const answer = await Api.transaction(username, Number(value));
      console.log(answer.data);
      window.alert(answer.data);
    }
  };

  return (
    <PageLayout>
      <form onSubmit={Pay} className="base">
        <span className="header-tittle">
          Account #{data.account}
          <div>R$ {data.balance}</div>
        </span>
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
          <span className="focus-input" data-placeholder="@"></span>
        </div>
        <div className="wrapper-input">
          <input
            className={value !== '' ? 'occupiedBox input' : 'input'}
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
            max={data.balance}
          />
          <span className="focus-input" data-placeholder="R$"></span>
        </div>
        <button type="submit" className="btn">
          Enviar pagamento
        </button>
        <div className="flex-center">
          <Link className="btn" to="/transaction">
            Lista de transações
          </Link>
        </div>
        <div className="flex-center">
          <Link className="btn" onClick={handleLogout} to={''}>
            Sair
          </Link>
        </div>
      </form>
      <h2></h2>
    </PageLayout>
  );
};

export default Account;
