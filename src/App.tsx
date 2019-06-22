import React, { Component } from 'react';
import Button from 'antd/lib/button';
import Divider from 'antd/lib/divider'
import {DateTimeLabel} from './component/date_time_label'
import {InputEditer} from './component/input_editer'
import {Unit} from './component/unit'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='usnit'>
          <Button type="primary">Button</Button>
          <DateTimeLabel> </DateTimeLabel>
          <InputEditer> </InputEditer>
          <Unit> </Unit>
          <Unit> </Unit>
          <div>
          <hr />
          </div>
          <Unit> </Unit>
        </div>
        
      </div>
    );
  }
}

export default App;