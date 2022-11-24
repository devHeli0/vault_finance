import '../../styles/index.css';
import { PageLayout } from '../../Layout';
import { useEffect, useState } from 'react';
import { useApi } from '../../hooks/api';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/index.css';


type Transaction = {
  id: number;
  debitedAccountId: number;
  creditedAccountId: number;
  value: number;
  createdAt: string;
};
type TransactionsState = {
  transactions: Transaction[];
};

const Transactions = () => {
  const [trans, setTrans] = useState<TransactionsState>({
    transactions: [],
  });

  const Api = useApi();

  useEffect(() => {
    const resume = async () => {
      const res = await Api.transactionList();
      setTrans(res.data);
    };
    resume();
  }, []);

  const [busca, setBusca] = useState('');

  const filtering = trans.transactions.filter(item => item.createdAt.toString().includes(busca));

  return (
    <PageLayout>
      <div className="wrapper-input">
        <input
          className={busca !== '' ? 'occupiedBox input' : 'input'}
          type="search"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <span
          className="focus-input"
          data-placeholder="busca pela data de transação*"
        ></span>
      </div>
      <table className="table">
        <caption>Lista de transações</caption>
        <thead>
          <tr className="table-head">
            <th>ID</th>
            <th>Account</th>
            <th>CashOut</th>
            <th>R$</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {filtering.map((item, index) => {
            return (
              <tr key={item.createdAt}>
                <td>{item.id}</td>
                <td>{item.debitedAccountId}</td>
                <td>{item.creditedAccountId}</td>
                <td>{item.value}</td>
                <td>{item.createdAt}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link className="btn" to="/account">
        Account
      </Link>
    </PageLayout>
  );
};

export default Transactions;
