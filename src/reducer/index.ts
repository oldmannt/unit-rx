import { Store } from '../store';
import { combineReducers } from 'redux';
import { createReducer } from 'redux-starter-kit';

export const inputChangeReducer = createReducer<Store['inputValue']>(
  1,
  {
    inputChange(inputValue, action) {
      return action.value;
    }
  }
);

export const groupsReducer = createReducer<Store['groups']>(
  {},
  {
    setGroupBase(groups, action) {
      groups[action.group].base = action.base;
    },

    setGroup(groups, action) {
      console.log(`groupsReducer add group name:${action.name}`)
      console.log(action.group)
      groups[action.name] = action.group;
      //console.log('groups')
      //console.log(groups)
    }
  }
);

export const reducer = combineReducers({
  inputValue: inputChangeReducer,
  groups: groupsReducer,
});
