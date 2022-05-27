import { observable, action, makeAutoObservable, toJS } from 'mobx';

// 左侧菜单数据-暂时
const initLeftMenu = {
  coFactory: {
    label: '合作工厂管理',
    key: 'factory',
    children: [
      {
        key: 'CoFactory',
        label: '合作工厂维护',
        url: '/CoFactory',
        target: '_self',
      },
      {
        key: 'FactoryProductList',
        label: '工厂产品维护',
        url: '/FactoryProductList',
      },
    ],
  },
  productManage: {
    label: '产品管理',
    key: 'product',
    disabled: true,
    children: [
      {
        key: 'ProductList',
        label: '产品基础数据列表',
        url: '/ProductList',
      },
      {
        key: 'ProductCredentials',
        label: '产品资质',
        url: '/ProductCredentials',
      },
    ],
  },
  bom: {
    label: 'BOM管理',
    key: 'bom',
    children: [
      {
        key: 'BomList',
        label: 'BOM单',
        url: '/BomList',
      },
    ],
  },
  price: {
    label: '价格管理',
    key: 'price',
    children: [
      {
        key: 'ProductPrice',
        label: '销售价维护',
        url: '/ProductPrice',
      },
    ],
  },
  task: {
    label: '任务中心',
    key: 'task',
    children: [
      {
        key: 'taTaskListsk',
        label: '审批列表',
        url: '/TaskList',
      },
    ],
  },
  Template: {
    label: '测试中心',
    key: 'Template',
    children: [
      {
        key: 'Template1',
        label: '测试中心1',
        url: '/Template1',
      },
      {
        key: 'Template2',
        label: '测试中心2',
        url: '/Template2',
      }
    ],
  }
};

export default class LeftMenuStore {
    leftMenus = []; // 左侧菜单
    openKeys = []; // 展开的菜单
    selectKeys = []; // 选中的菜单
    testNum = 1;

  constructor() {
    makeAutoObservable(this);
  }

  setLeftMenu(role = 'Template') {
    const menuData = [];
    const roleMenuMap = {
      factory: ['productManage'],
      brand: ['coFactory', 'productManage'],
      dealer: ['coFactory', 'productManage'],
      all: ['coFactory', 'productManage', 'bom', 'price', 'task'],
      Template: ['Template', 'productManage'],
    }; // 根据角色显示菜单
    const roleMenu = roleMenuMap[role];
    roleMenu.forEach(val => {
      menuData.push(initLeftMenu[val]);
    });
    this.leftMenus = menuData;
    console.log(toJS(this.leftMenus), 'leftMenus')
  }

  setOpenKeys(params) {
    this.openKeys = [...params];
  }

  setSelectKeys(params) {
    this.selectKeys = [...params];
  }
}
