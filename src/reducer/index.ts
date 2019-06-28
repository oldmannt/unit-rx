import { Store } from '../store';
import { combineReducers } from 'redux';
import { createReducer } from 'redux-starter-kit';

export const inputChangeReducer = createReducer<Store['inputValue']>(
  1,
  {
    inputChange(state, action) {
      return action.value;
    }
  }
);

export const groupsReducer = createReducer<Store['groups']>(
  {},
  {
    groupsSource(groups, action) {
      groups[action.group].source = action.source;
    },

    // addGroups
    
  }
);

export const reducer = combineReducers({
  inputValue: inputChangeReducer,
  groups: groupsReducer,
});
