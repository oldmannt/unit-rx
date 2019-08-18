import React from 'react';
import './unit.css'
import { connect } from 'react-redux';
import { Store } from '../store';

interface UnitProps {
    inputValue:Store['inputValue'];
    groups:Store['groups'];
    groupName:string;
    unitName:string;
}

class Unit extends React.Component<UnitProps, any> {
    // constructor(props:UnitProps) {
    //     super(props);
    //     //this.render = this.render.bind(this);
    // }
    
    render() {
        //let value = this.props.inputValue===undefined?0:this.props.inputValue;
        //console.log(`unit value:${this.props.inputValue}`)
        const group = this.props.groups[this.props.groupName];
        const unit = group.units[this.props.unitName]
        let value = this.props.inputValue;
        const postfix = unit.postfix.substring("unit_post_".length)
        if (unit.name !== group.base)
        {
            value = value * unit.ratio + unit.offset
        }
        return(
            <div className='unit'>
                <p className='unit-value'>{value.toString()}</p>
                <p className='unit-name'>{postfix}</p>
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