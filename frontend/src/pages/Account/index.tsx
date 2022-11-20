import { ChangeEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    navigate('/')
  }
 
  return (
    <div>
      <h2>Página Fechada</h2>
      {<button onClick={handleLogout}>Sair</button>}
    </div>
  );
};

export default Account;
