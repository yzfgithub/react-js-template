import React from 'react';
import { MobXProviderContext } from 'mobx-react'

export { default } from './root.store';
export * from './root.store';
export function useStore() {
    return React.useContext(MobXProviderContext).store;
}