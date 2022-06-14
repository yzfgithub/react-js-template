import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routers from '@/router';
import { observer } from 'mobx-react'
import { Provider } from 'mobx-react'
import PageLayout from '@/components/PageLayout';
import Loading from '@/components/Loading';
import 'antd/dist/antd.min.css'


const App = ({ store }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasMenu, setIsMenu] = useState(true); // 是否已企业注册
  useEffect(() => {
    setIsLoading(false);
    store.leftMenuStore.setLeftMenu();
    store.commonStore.setLayoutMenus(store.leftMenuStore.leftMenus);
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (  
    <Provider store={store}>
      <Router>
          <PageLayout hasMenu={false}> 
              <Routers /> 
          </PageLayout>
      </Router>
    </Provider>
  )
}

export default App;
