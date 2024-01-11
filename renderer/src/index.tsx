import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { StateMgmtProvider } from './library/state-mgmt';
import { AoConfigProvider } from './components';
import App from './App';
import { AppContext } from './app-state';
import themeConfig from './themeConfig';
import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StateMgmtProvider context={AppContext}>
      <HashRouter>
        <AoConfigProvider theme={themeConfig}>
          <App />
        </AoConfigProvider>
      </HashRouter>
    </StateMgmtProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
