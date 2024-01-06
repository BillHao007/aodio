
import { App, AppProps } from 'antd';
import classNames from 'classnames';
import { StateMgmtContextProvider, createContext, useContextState } from '@/library/state-mgmt';
import './AoApp.less';

export interface AoAppProps extends AppProps{};

export const AoAppContext = createContext();

export const useAppState = 
  (key?: string, initValue?: any) => useContextState(AoAppContext, key, initValue);

export default function AoApp(props: AoAppProps) {
  const {
    className,
    children,
    ...rest
  } = props;

  const aoAppClassName = classNames('ao-app', className);
  return (
    <App
      className={aoAppClassName}
      {...rest}
    >
      <StateMgmtContextProvider context={AoAppContext}>
        {children}
      </StateMgmtContextProvider>
    </App>
  )
}

