import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoNg from '../../assets/logo_ng.png';
import '../../styles/index.css';
import { Layout } from '../../Layout';
import { api } from '../../hooks/api';

const Transaction = () => {
  //const auth = useContext(AuthContext);
  //const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [value, setValue] = useState('');

  const Pagar = async (e: any) => {
    e.preventDefault();
    const answer = await api.get('/transaction', {});
    window.alert('transação realizada com sucesso!');
  };

  return (
    <Layout>
      <form onSubmit={Pagar} className="form">
        <span className="header-tittle"> Cadastro </span>
        <div className="wrap-input">
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
            data-placeholder="username"
          ></span>
        </div>
        <div className="wrap-input">
          <input
            className={value !== '' ? 'occupiedBox input' : 'input'}
            type="value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            data-placeholder="R$"
            required
            minLength={8}
          />
          <span
            className="focus-input"
            data-placeholder="value"
          ></span>
        </div>

        <button type="submit" className="form-btn">
          Enviar pagamento/
        </button>
        <div className="text-center">
          <Link className="txt2" to="/">
            Voltar
          </Link>
        </div>
      </form>
    </Layout>
  );
};

export default Transaction;
