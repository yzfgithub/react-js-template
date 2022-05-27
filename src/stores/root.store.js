import { makeAutoObservable } from 'mobx';
import CommonStore from '@/stores/common.store';
import LeftMenuStore from '@/stores/menu.store';
import RouterStoreInstance from '@/stores/router.store';

// prettier-ignore
class RootStore {
  commonStore = new CommonStore();
  routerStore = RouterStoreInstance;
  leftMenuStore = new LeftMenuStore();
  constructor() {
    makeAutoObservable(this);
  }
}

// const rootStore = new RootStore();

export default RootStore;
