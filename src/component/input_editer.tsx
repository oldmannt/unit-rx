import React from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';

interface InputEditerState {
    inputValue: string;
}

export class InputEditer extends React.Component<any, InputEditerState> {
    constructor(props:any) {
        super(props);
        this.state = {inputValue:""};
        this.onChange.bind(this);
    }

    onChange(event:React.ChangeEvent<HTMLInputElement>) {
        console.log(`onChange value:${event.target.value}`);
        // if (event.target.validity.valid) {
        //     this.setState({inputValue: event.target.value});
        // }
    }

    render() {
        return (
            <Input placeholder='the value you want to convert.' type='number' onChange={this.onChange}/>
        );
    }
}