import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ActiveContekst from './context/ActiveContekst';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ActiveContekst>
      <App />
    </ActiveContekst>
  </React.StrictMode>
);

