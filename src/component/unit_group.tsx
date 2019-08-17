import React from 'react';
import Divider from 'antd/lib/divider';
import './unit_group.css'
import { Unit } from './unit';
import { connect } from 'react-redux';
import { Store } from '../store';

interface UnitGroupProps {
    name:string;
    groups:Store['groups'];
}

class UnitGroup extends React.Component<UnitGroupProps, any> {
    // constructor(props:UnitProps) {
    //     super(props);
    //     //this.render = this.render.bind(this);
    // }
    
    render() {
        const group = this.props.groups[this.props.name]
        const unitsUS = Object.keys(group.units).filter(name => {return !group.units[name].isMetric})
        const unitsMetrics = Object.keys(group.units).filter(name => {return group.units[name].isMetric})
        return(
            <div>
                <div style={{display:'table-cell'}}>
                    {unitsUS.map(unitName => (
                        <Unit key={unitName} groupName={this.props.name} unitName={unitName}/>
                    ))}
                </div>
                <div style={{display:'table-cell'}}>
                    {unitsMetrics.map(unitName => (
                        <Unit key={unitName} groupName={this.props.name} unitName={unitName}/>
                    ))}
                </div>
                <Divider />
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
    (state:Store) => ({groups: state.groups}),
    null
)(UnitGroup)
  
export {ConnectedUnit as UnitGroup}