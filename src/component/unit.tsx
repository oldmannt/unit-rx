import React from 'react';
import './unit.css'
import { connect } from 'react-redux';
import { Store } from '../store';

interface UnitProps {
    inputValue:Store['inputValue'];
}

class Unit extends React.Component<UnitProps, any> {
    // constructor(props:UnitProps) {
    //     super(props);
    //     //this.render = this.render.bind(this);
    // }
    
    render() {
        const value = this.props.inputValue===undefined?0:this.props.inputValue;
        
        return(
            <div className='unit'>
                <p className='unit-value'>{value.toString()}</p>
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
    (state:Store) => ({inputValue: state.inputValue}),
    null
)(Unit)
  
export {ConnectedUnit as Unit}