import React, { Component } from 'react';
import Button from 'antd/lib/button';
import {DateTimeLabel} from './component/date_time_label'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
        <DateTimeLabel> </DateTimeLabel>
      </div>
    );
  }
}

export default App;