import React from 'react';
import {IDateTimeUpdater, createDateTimeUpdater} from '../data_logic/date_time_updater'

interface DateTimeLabelState {
    timeLabel: string;
}

export class DateTimeLabel extends React.Component<any, DateTimeLabelState> {
    private DateTimeupdater!:IDateTimeUpdater;
    constructor(props:any) {
        super(props);
        this.DateTimeupdater = createDateTimeUpdater(8);
        this.DateTimeupdater.setCallback(this.update.bind(this));
        const label = this.DateTimeupdater.getLabel();
        console.log(`DateTimeLabel constructor label:${label}`);
        this.state = {timeLabel:label};
    }

    update(label:string) {
        console.log(`update label:${label}`);
        this.setState({timeLabel:label});
    }

    componentDidMount() {
        //const label = this.updater.getLabel();
    }

    componentWillUnmount() {
        this.DateTimeupdater.release();
    }

    render() {
        return(
            <h2> {this.state.timeLabel} </h2>
        );
    }
}