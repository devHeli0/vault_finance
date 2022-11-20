import { ChangeEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';

const Account = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
 
  return (
    <div>
      <h2>Página Fechada</h2>
      Olá {auth.user?.name}
    </div>
  );
};

export default Account;
