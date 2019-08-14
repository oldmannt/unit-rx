import React from 'react';
import Button from 'antd/lib/button';
import {DateTimeLabel} from './component/date_time_label'
import {InputValueEditor} from './component/input_editor'
import {Unit} from './component/unit'
import './App.css';
const axios = require('axios');

class App extends React.Component<any, any> {
  componentWillMount() {
    console.log('componentWillMount start')
    console.log(process.env.PUBLIC_URL);
    axios.get(process.env.PUBLIC_URL + '/data/groups.json') // JSON File Path
      .then( (response: any) => {
        console.log(response)
      //   this.setState({
      //   userList: response.data
      // });
    })
    .catch(function (error: any) {
      console.log(error);
    });
  }
  render() {
    return (
      <div className="App"> 
        <div className='usnit'>
          <Button type="primary">Button</Button>
          <DateTimeLabel> </DateTimeLabel>
          <InputValueEditor> </InputValueEditor>

          {/* <Unit name="aaa"/> */}
          {/* <Unit> </Unit>
          <hr className='hr'/>
          <Unit> </Unit> */}
        </div>
        
      </div>
    );
  }
}

export default App;