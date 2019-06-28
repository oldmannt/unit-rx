import React from 'react';
import Button from 'antd/lib/button';
import {DateTimeLabel} from './component/date_time_label'
import {InputValueEditor} from './component/input_editor'
import {Unit} from './component/unit'
import './App.css';

class App extends React.Component<any, any> {
  render() {
    return (
      <div className="App">
        <div className='usnit'>
          <Button type="primary">Button</Button>
          <DateTimeLabel> </DateTimeLabel>
          <InputValueEditor> </InputValueEditor>
          <Unit> </Unit>
          {/* <Unit> </Unit>
          <hr className='hr'/>
          <Unit> </Unit> */}
        </div>
        
      </div>
    );
  }
}

export default App;