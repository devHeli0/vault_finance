import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CProvider } from './contexts/Auth/CProvider';


ReactDOM.render(
  <React.StrictMode>
    <CProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </CProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


