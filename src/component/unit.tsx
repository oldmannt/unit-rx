import React from 'react';
import './unit.css'
import { connect } from 'react-redux';
import { Store } from '../store';
import { actions } from '../actions';

interface UnitProps {
    inputValue:Store['inputValue'];
    groups:Store['groups'];
    setGroupSelect: (group: string, base: string) => void;
    groupName:string;
    unitName:string;

}

class Unit extends React.Component<UnitProps, any> {
    constructor(props:UnitProps) {
        super(props);
        this.onClicked = this.onClicked.bind(this);
    }

    onClicked(event:React.MouseEvent<HTMLParagraphElement, MouseEvent>) {
        this.props.setGroupSelect(this.props.groupName, this.props.unitName)
    }
    
    render() {
        const group = this.props.groups[this.props.groupName];
        const unit = group.units[this.props.unitName]
        // let value = this.props.inputValue;
        // const postfix = unit.postfix.substring("unit_post_".length)
        // if (unit.name !== group.select )
        // {
        //     value = value * unit.ratio + unit.offset
        // }
        // console.log(`${this.props.groupName}.${this.props.unitName}:${value}`)
        return(
            <div className='unit'>
                <p onClick={this.onClicked} className='unit-value'>{unit.value.toString()}</p>
                <p onClick={this.onClicked} className='unit-name'>{unit.postfix}</p>
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
    dispatch => ({
        setGroupSelect: (group: string, base: string) => 
        dispatch(actions.setGroupSelect(group, base))
      })
)(Unit)
  
export {ConnectedUnit as Unit}