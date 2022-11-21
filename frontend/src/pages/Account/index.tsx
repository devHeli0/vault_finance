import { ChangeEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const navigate = useNavigate();

  const handleLogout = async (e: any) => {
    e.preventDefault();
    navigate('/')
  }
  
  return (
    <div className='wrap'>
      <h2>Página Fechada</h2>
      {<button onClick={handleLogout}>Sair</button>}
    </div>
  );
};

export default Account;
