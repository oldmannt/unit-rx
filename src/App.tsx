import React from 'react';
import Button from 'antd/lib/button';
import {DateTimeLabel} from './component/date_time_label'
import {InputValueEditor} from './component/input_editor'
import {UnitGroup} from './component/unit_group'
import './App.css';
import { connect } from 'react-redux';
import { actions } from './actions';
import { Store } from './store';
const axios = require('axios');

interface AppProps {
  groups: Store['groups'];
  addGroup: (name: string, group: Object) => void;
}

class App extends React.Component<AppProps, any> {
  componentWillMount() {
    axios.get(process.env.PUBLIC_URL + '/data/groups.json') // JSON File Path
      .then( (response: any) => {
        //console.log(response)
        for (var key in response.data) {
          if (response.data.hasOwnProperty(key)) {
              this.props.addGroup(key, response.data[key]);
          }
      }
      //   this.setState({
      //   userList: response.data
      // });
    })
    .catch(function (error: any) {
      console.log(error);
    });
  }
  render() {
    const groups = Object.keys(this.props.groups).filter(name => {return this.props.groups[name]});
    //console.log(`app props groups`)
    //console.log(groups)
    return (
      <div className="App"> 
        <div className='usnit'>
          <Button type="primary">Button</Button>
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
    addGroup: (name: string, group: Object) => dispatch(actions.addGroup(name, group))
  })
)(App);

export { ConnectedApp as App };