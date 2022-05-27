import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loading from '@/components/Loading';
import Home from '@/components/Home';

// 业务组件
const NoAuthority = React.lazy(() => import(/* webpackChunkName: "noAuthority" */ '../pages/noAuthority/index'));

const Template1 = React.lazy(()=> import(/* webpackChunkName: "Template1" */ '../pages/Template1/index'));
const Template2 = React.lazy(()=> import(/* webpackChunkName: "Template2" */ '../pages/Template2/index'));

//endPages

console.log(window.__HOST,'window.__HOST')
const appCode = process.env.NODE_ENV === 'development' ? '/' : `${window.__HOST}`;

function Routers() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route exact path={`${appCode}`} element={<Home />} />
        <Route exact path={`${appCode}Home`} element={<Home />} />
        <Route exact path={`${appCode}NoAuthority`} element={<NoAuthority />} />
        <Route exact path={`${appCode}Template1`} element={<Template1 />} />
        <Route exact path={`${appCode}Template2`} element={<Template2 />} />
        <Route path={`*`} element={<Navigate to={`${appCode}`} />} />
      </Routes>
  </Suspense>
  )
  
};

export default Routers;