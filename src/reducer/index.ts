import { Store, UnitGroup } from '../store';
import { combineReducers } from 'redux';
import { createReducer } from 'redux-starter-kit';
import {StoreUpdater} from '../data_logic/store_updater'

export const stateReducer = createReducer<Store>(
  {inputValue:1, groups:{}},
  {
    inputChange(store: Store, action:{value:number}):Store {
      return StoreUpdater.inputChange(store, action.value);
    },

    setGroupSelect(store: Store, action: { group: string; select: string; }) :Store{
      //groups[action.group].select = action.select;
      console.log(`setGroupSelect group:${action.group} select:${action.select}`)
      return StoreUpdater.setGroupSelect(store, action.group, action.select);
    },

    setGroup(store: Store, action: { name: string; group: UnitGroup; }) :Store {
      console.log(`groupsReducer add group name:${action.name}`)
      console.log(store)
      console.log(action.group)
      //groups[action.name] = action.group;
      return StoreUpdater.setGroup(store, action.name, action.group);
    }
  }
);

// export const reducer = combineReducers({
//   inputValue: inputChangeReducer,
//   groups: groupsReducer,
// });
export const reducer = stateReducer;