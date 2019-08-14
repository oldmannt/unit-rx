import React from 'react';
import './unit.css'
import { connect } from 'react-redux';
import { Store } from '../store';

interface UnitProps {
    inputValue:Store['inputValue'];
    groups:Store['groups'];
    name:string;
}

class Unit extends React.Component<UnitProps, any> {
    // constructor(props:UnitProps) {
    //     super(props);
    //     //this.render = this.render.bind(this);
    // }
    
    render() {
        //let value = this.props.inputValue===undefined?0:this.props.inputValue;
        console.log(`unit value:${this.props.inputValue}`)
        console.log(`inputValue type:${typeof this.props.inputValue}`)
        return(
            <div className='unit'>
                <p className='unit-value'>{this.props.inputValue.toString()}</p>
                <p className='unit-name'>m</p>
            </div>
        );
    }
}

// function mapStateToProps(state:Store) {
//     console.log('unit mapStateToProps')
//     console.log(state);
//     return { ...state }
//   }

const ConnectedUnit = connect (
    (state:Store) => ({...state}),
    null
)(Unit)
  
export {ConnectedUnit as Unit}