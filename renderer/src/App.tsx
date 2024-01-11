import { Routes, Route } from 'react-router-dom';
import { App as AntdApp, Layout } from 'antd';
import { AoLeftMenu, AoTitleBar } from './components';
import routeConfig from './route-config/app';
import useAppStyles from './App.style';
import { AoLogo } from './components/AoLogo';

const { Header, Sider, Footer, Content } = Layout;

function App() {
  const { styles } = useAppStyles();

  return (
    <AntdApp className={styles.aoApp}>
      <Layout className="ao-app-main">
        <Content>
          <Layout className="ao-app-sub-main">
            <Sider className="ao-app-sider">
              <div className="ao-app-logo-area">
                <AoLogo size="2rem" className="ao-app-logo"/>
              </div>
              <AoLeftMenu className="ao-app-sider-menu"/>
            </Sider>
            <Layout>
              <Header className='ao-app-header'>
                <AoTitleBar />
              </Header>
              <Content className="ao-app-content">
                <Routes>
                  {
                    routeConfig.map(config => {
                      const { path, component: C, name, props } = config;
                      return <Route key={name} path={path} element={<C {...props}/>}/>;
                    })
                  }
                </Routes>
              </Content>
            </Layout>
          </Layout>
        </Content>
        <Footer className="ao-app-footer">C:\windows\system32使用多线程</Footer>
      </Layout>
    </AntdApp>
  );
}

export default App;