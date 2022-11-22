import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useApi } from '../../hooks/api';

const Account = () => {
  const auth = useContext(AuthContext);
  const [data, setData] = useState({ id: '', balance: '' });
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
    <div className="wrap">
      <h2>Página Fechada</h2>
      <div>{data.balance}</div>
      {<button onClick={handleLogout}>Sair</button>}
    </div>
  );
};

export default Account;
