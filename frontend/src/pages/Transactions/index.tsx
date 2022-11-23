import '../../styles/index.css';
import { PageLayout } from '../../Layout';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useApi } from '../../hooks/api';
import { Link, useNavigate } from 'react-router-dom';

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
  const auth = useContext(AuthContext);
  const [trans, setTrans] = useState<TransactionsState>({
    transactions: [],
  });
  const [date, setDate] = useState('');
  const Api = useApi();
  const navigate = useNavigate();

  useEffect(() => {
    const resume = async () => {
      console.log('###TRANSACTIONEFFECT');
      const res = await Api.transactionList();
      setTrans(res.data);
    };
    resume();
  }, []);

  return (
    <PageLayout>
      <input type={'text'}></input>
      {trans.transactions.map((item, index) => {
        return (
          <PageLayout>
            <div key={index}>
              <div key={index}>{item.id}</div>
              <div key={index}>{item.debitedAccountId}</div>
              <div key={index}>{item.creditedAccountId}</div>
              <div key={index}>{item.value}</div>
              <div key={index}>{item.createdAt}</div>
            </div>
          </PageLayout>
        );
      })}
      {/* <div>Oi </div>
      <div className="flex-center">
          <Link className="btn" to="/account">
            Account
          </Link>
        </div> */}
    </PageLayout>
  );
};

export default Transactions;
