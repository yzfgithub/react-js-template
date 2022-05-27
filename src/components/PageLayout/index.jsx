import React from 'react';
import { Layout } from 'antd';
import Header from './Header';
import LeftMenu from './LeftMenu';
import { observer } from 'mobx-react'
// import { Router } from 'react-router'
// import TopBar from '.TobBar';
import './index.scss';

const {Sider} = Layout;

const PageLayout = observer((props) => {
    const {children} = props;
    
    return (
        <div className="layout-wrap">
            <Header />
            
            <Layout className="layout-body">
                <Sider className='menu-wrap'>
                    <LeftMenu />
                </Sider>
                <section className="content-box">
                    {children ? children : ''}
                </section>
            </Layout>
        </div>

    )
})

export default PageLayout;