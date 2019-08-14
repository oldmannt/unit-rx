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

export const groupsBaseReducer = createReducer<Store['groups']>(
  {},
  {
    setGroupBase(groups, action) {
      groups[action.group].base = action.base;
    },

    // addGroups
    // addGroup(groups, actionn) {
    //   groups
    // }
  }
);

export const reducer = combineReducers({
  inputValue: inputChangeReducer,
  groups: groupsBaseReducer,
});
