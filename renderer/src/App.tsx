import { AoConfigProvider } from './components';
import { App as AntdApp } from 'antd';
import { createContext, StateMgmtContextProvider, useContextState } from './library/state-mgmt';
import './App.less';

const AoAppContext = createContext();

export const useAppState = 
  (key?: string, initValue?: any) => useContextState(AoAppContext, key, initValue);

function App() {
  return (
    <AoConfigProvider>
      <AntdApp className="ao-app">
        <StateMgmtContextProvider context={AoAppContext}>
          <h1>Hello</h1>
        </StateMgmtContextProvider>
      </AntdApp>
    </AoConfigProvider>
  );
}

export default App;