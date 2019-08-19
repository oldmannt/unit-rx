import React from 'react';
import {Divider} from 'antd';
import './unit_group.less'
import { Unit } from './unit';
import { connect } from 'react-redux';
import { Store } from '../store';

interface UnitGroupProps {
    name:string;
    groups:Store['groups'];
}

const DividerStyle = {
    margin:'1px 0'
}

class UnitGroup extends React.Component<UnitGroupProps, any> {
    // constructor(props:UnitProps) {
    //     super(props);
    //     //this.render = this.render.bind(this);
    // }
    
    render() {
        const groups = this.props.groups;
        const group = groups[this.props.name]
        console.log(`group render ${this.props.name}`)
        console.log(this.props.groups[this.props.name])
        const unitsUS = Object.keys(group.units).filter(name => {return !group.units[name].isUS})
        const unitsMetrics = Object.keys(group.units).filter(name => {return group.units[name].isUS})
        // 合并 unitsUS unitsMetrics dummy fill
        return(
            <div>
                <Divider className="divider" style={DividerStyle}> {this.props.name}</Divider>
                <div className="group">
                    <div className="group_left" >
                        {unitsUS.map(unitName => (
                            <Unit key={unitName} groupName={this.props.name} unitName={unitName}/>
                        ))}
                    </div>
                    <div className="group_right" >
                        {unitsMetrics.map(unitName => (
                            <Unit key={unitName} groupName={this.props.name} unitName={unitName}/>
                        ))}
                    </div>
                </div>
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