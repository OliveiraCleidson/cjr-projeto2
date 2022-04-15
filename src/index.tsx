import React from 'react';
import ReactDOM from 'react-dom/client';

import Routes from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('main') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);