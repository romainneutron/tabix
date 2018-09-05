import RootStore from './RootStore';

export { default as AppStore } from './AppStore';
export { default as SignInStore } from './SignInStore';
export { default as DashboardStore } from './DashboardStore';
export { RootStore };
export { default as initStores } from './initStores';

export type Stores = { store: RootStore };