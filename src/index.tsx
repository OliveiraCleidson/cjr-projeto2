import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserProvider } from './contexts/user.context';
import GlobalStyle from './globalStyles';

import Routes from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('main') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <UserProvider>
      <Routes />
    </UserProvider>
  </React.StrictMode>
);