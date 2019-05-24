import React from 'react';

interface DateTimeLabelState {
    local: string;
    timeLabel: string;
}

class DateTimeLabel extends React.Component<any, DateTimeLabelState> {
    private timer!: NodeJS.Timeout;
    constructor(props:any) {
        super(props);
    }

    getDateByTimeZone(timeZone:number):Date {
        let date = new Date()
        let utcEpochMs = date.getTime() + date.getTimezoneOffset() * 60000;
        let bejingTimeZone = timeZone;
        let bjEpochMs = utcEpochMs + (3600000 * bejingTimeZone);
        let bjDate = new Date(bjEpochMs);
        return bjDate;
    }

    tick() {
        let dt = this.getDateByTimeZone(8);
        let label = `${dt.getMonth()}-${dt.getDay} ${dt.getHours}:${dt.getMinutes}`;
        let interval = 60000 - dt.getMilliseconds();
        console.log(`tick next tick:${interval}`)
        setTimeout(() => {
            this.tick()
        }, interval);
        this.setState({timeLabel:label});
    }

    componentDidMount() {
        let now = new Date()
        let interval = (60000 - now.getMilliseconds())
        console.log(`componentDidMount next tick:${interval}`)
        setTimeout(() => {
            this.tick()
        }, interval);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }
}