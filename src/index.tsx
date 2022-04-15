import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './globalStyles';

import Routes from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('main') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes />
  </React.StrictMode>
);