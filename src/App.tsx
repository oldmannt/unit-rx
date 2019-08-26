import React from 'react';
import {DateTimeLabel} from './component/date_time_label'
import {InputValueEditor} from './component/input_editor'
import {UnitGroup} from './component/unit_group'
import './App.css';
import { connect } from 'react-redux';
import { actions } from './actions';
import { Store } from './store';
import jsonGroupData from'./data_logic/groups.json';
const axios = require('axios');

interface AppProps {
  groups: Store['groups'];
  setGroup: (name: string, group: Object) => void;
}

class App extends React.Component<AppProps, any> {
  componentWillMount() {
    const jsonGroup:any = jsonGroupData['groups'];
    if (jsonGroup !== null)
    {
      console.log('componentWillMount load groups')
      console.log(jsonGroup);
      for (var key in jsonGroup) {
        if (jsonGroup.hasOwnProperty(key)) {
            this.props.setGroup(key, jsonGroup[key]);
        }
      }
    }
    axios.get(process.env.PUBLIC_URL + '/data/groups.json') // JSON File Path
      .then( (response: any) => {

        const jsonGroup:any = response.data.groups
        for (var key in jsonGroup) {
          if (jsonGroup.hasOwnProperty(key)) {
              this.props.setGroup(key, jsonGroup[key]);
          }
        }

    })
    .catch(function (error: any) {
      console.log(error);
    });
  }

  render() {
    const groups = Object.keys(this.props.groups).filter(name => {return this.props.groups[name]});
    return (
      <div className="App"> 
        <div className='usnit'>
          <DateTimeLabel> </DateTimeLabel>
          <InputValueEditor> </InputValueEditor>
          {groups.map(name => (
              <UnitGroup key={name} name={name}/>
          ))}
        </div>
        
      </div>
    );
  }
}

const ConnectedApp = connect(
  (state:Store) => ({groups: state.groups}),
  dispatch => ({
    setGroup: (name: string, group: Object) => dispatch(actions.setGroup(name, group))
  })
)(App);

export { ConnectedApp as App };