import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useApi } from '../../hooks/api';
import { Layout } from '../../Layout';

const Account = () => {
  const auth = useContext(AuthContext);
  const [data, setData] = useState({ account: '', balance: '' });
  const api = useApi();
  const navigate = useNavigate();

  useEffect(() => {
    const resume = async () => {
      const res = await api.resume();
      setData(res.data);
    };
    resume();
  }, []);

  const handleLogout = async (e: any) => {
    e.preventDefault();
    await auth.signOut();
    navigate('/');
  };

  return (
    <Layout>
      <div className="form">
        <span className="header-tittle">
          Account #{data.account}{' '}
        </span>
        <span className="header-tittle"> R$ {data.balance} </span>
        <div className="text-center">
          <Link className="form-btn" to="/">
            Realizar transação
          </Link>
        </div>
        <div className="text-center">
          <Link onClick={handleLogout} className="txt3" to="">
            Logout
          </Link>
        </div>
      </div>
      /
    </Layout>
  );
};

export default Account;
