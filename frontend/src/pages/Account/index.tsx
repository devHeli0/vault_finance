import { ChangeEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';


const Account = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signout();
    navigate('/')
  }
 
  return (
    <div>
      <h2>Página Fechada</h2>
      {auth.user && <button onClick={handleLogout}>Sair</button>}
    </div>
  );
};

export default Account;
