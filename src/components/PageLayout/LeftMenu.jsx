import React, {} from 'react';
import { Menu } from 'antd'
import { useStore } from '@/stores'
import { observer } from 'mobx-react'
import { useNavigate, useLocation } from 'react-router-dom'
import AppstoreOutlined from '@ant-design/icons/AppstoreOutlined';
import MailOutlined from '@ant-design/icons/MailOutlined';
import SettingOutlined from '@ant-design/icons/SettingOutlined';
import { Link } from 'react-router-dom'

const { SubMenu } = Menu

const LeftMenu = observer(() => {
    const {leftMenuStore, routerStore} = useStore();
    const nav = useNavigate();
    // console.log(nav,'nav')
    console.log(routerStore,'leftMenuStore--')

    // const getInitMenuKey = leftMenusData => {
    //     const {
    //       store: {
    //         routerStore: { history },
    //       },
    //     } = this.props;
    
    //     let initOpenKey = [];
    //     let initSelectKey = [];
    //     leftMenusData.forEach(menu => {
    //       menu.children.forEach(subMenu => {
    //         if (subMenu.url === history.location.pathname) {
    //           initOpenKey.push(menu.key);
    //           initSelectKey.push(subMenu.key);
    //         }
    //       });
    //     });
    //     return { initOpenKey, initSelectKey };
    //   };

    //   const initKeys = getInitMenuKey(leftMenuStore.leftMenus);
    //   console.log(initKeys,'initKeys')
    const onClick = (e) => {
        nav(`/${e.key}`)
    }
      
    return (
        <div>
            {/* <Link to="Template2">to a</Link>
            <Link to="Template1">to b</Link> */}
        <Menu
            onClick={onClick}
            mode="inline"
        //   defaultSelectedKeys={['1']}
        //   defaultOpenKeys={['sub1']}
          style={{
            height: '100%',
            borderRight: 0,
          }}
          items={leftMenuStore.leftMenus}
        >

           
        </Menu>
        </div>

    )
})


export default LeftMenu;