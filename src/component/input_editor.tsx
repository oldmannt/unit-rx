import React from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { connect } from 'react-redux';
import { actions } from '../actions';
import { Store } from '../store';

interface InputValueEditorProps {
    inputValue: number;
    inputChange: (value: number) => void;
}

class InputValueEditor extends React.Component<InputValueEditorProps, any> {
    constructor(props:InputValueEditorProps) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event:React.ChangeEvent<HTMLInputElement>) {
        //console.log(`onChange value:${event.target.value}`);
        this.props.inputChange(parseFloat(event.target.value));
        // if (event.target.validity.valid) {
        //     this.setState({inputValue: event.target.value});
        // }
    }

    render() {
        const value = this.props.inputValue===undefined?1:this.props.inputValue;
        return (
            <Input placeholder='the value you want to convert.' type='number' onChange={this.onChange} 
                defaultValue={value.toString()}/>
        );
    }
}

// function mapStateToProps(state:Store) {
//     return { inputValue: state.inputValue }
// }

const ConnectedInputValueEditor = connect(
    (state:Store) => ({inputValue: state.inputValue}),
    dispatch => ({
      inputChange: (value: number) => dispatch(actions.inputChange(value))
    })
  )(InputValueEditor);
  
  export { ConnectedInputValueEditor as InputValueEditor };