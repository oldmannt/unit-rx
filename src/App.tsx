import React, { Component } from 'react';
import Button from 'antd/lib/button';
import {DateTimeLabel} from './component/date_time_label'
import {InputEditer} from './component/input_editer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='usnit'>
          <Button type="primary">Button</Button>
          <DateTimeLabel> </DateTimeLabel>
          <InputEditer> </InputEditer>
        </div>
        
      </div>
    );
  }
}

export default App;