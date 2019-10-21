import { Store, UnitGroupState } from '../store';
import { combineReducers } from 'redux';
import { createReducer } from 'redux-starter-kit';
import {StoreUpdater} from '../data_logic/store_updater'

export const initStore:Store = {
  inputValue:1,
  groups:{}
}
export const stateReducer = createReducer<Store>(
  initStore,
  {
    inputChange(store: Store, action:{value:number}) {
      StoreUpdater.inputChange(store, action.value);
    },

    setGroupSelect(store: Store, action: { group: string; select: string; }) {
      //groups[action.group].select = action.select;
      console.log(`setGroupSelect group:${action.group} select:${action.select}`)
      StoreUpdater.setGroupSelect(store, action.group, action.select);
    },

    setGroup(store: Store, action: { name: string; group: UnitGroupState; }) {
      console.log(`groupsReducer add group name:${action.name}`)
      console.log(store)
      console.log(action.group)
      StoreUpdater.setGroup(store, action.name, action.group);
    }
  }
);

// export const reducer = combineReducers({
//   inputValue: inputChangeReducer,
//   groups: groupsReducer,
// });
export const reducer = stateReducer;