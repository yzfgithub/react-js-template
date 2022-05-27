import URL from 'url';
import { createBrowserHistory } from 'history'
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'
import { computed } from 'mobx'

let instance = null;
export class Router extends RouterStore {
    constructor() {
        super();
        if(instance) {
            return instance;
        }
        const browserHistory = createBrowserHistory();
        syncHistoryWithStore(browserHistory, this);
        instance = this;
    }
}

export default new Router();