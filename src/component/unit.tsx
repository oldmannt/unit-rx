import React from 'react';
import './unit.css'

export class Unit extends React.Component<any, any> {
    constructor(props:any) {
        super(props);

    }

    render() {
        return(
            <div className='unit'>
                <p className='unit-value'>FFF</p>
                <p className='unit-name'>m</p>
            </div>
            
        );
    }

}
