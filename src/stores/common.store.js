import { makeAutoObservable, toJS } from 'mobx';

export default class CommonStore {
  userInfo = {
    accountName: 'sunya06',
  };
  layoutMenus = []

  constructor() {
    makeAutoObservable(this);
  }
  async setLayoutMenus(layoutMenus) {
    this.layoutMenus = layoutMenus;
    console.log(toJS(this.layoutMenus), 'layoutMenus')
  }
  //退出登录
  async logOut() {
    window.location.href = `${window.location.origin}/domain/basic/workbench/api/workbench/app/logout?ReturnUrl=${window.location.origin}/domain/creative/imp/`;
  }
}
