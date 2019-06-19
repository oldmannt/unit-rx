export interface IDateTimeUpdater {
    setCallback(hander:(strTime: string) => void):void;
    release():void;
    getLabel():string;
}

class DateTImeUpdater implements IDateTimeUpdater{
    constructor(zone:number) {
        this.timeZone = zone;
        const now = new Date()
        const interval = (60000 - now.getSeconds()*1000)
        console.log(`DateTImeUpdater constructor time:${now.toLocaleString()} timeZone:${now.getTimezoneOffset()}`);
        
        this.timer = setTimeout(() => {
            this.tick()
        }, interval);
        now.toLocaleDateString()
    }

    public setCallback(hander:(strTime: string) => void) {
        this.listener = hander;
    }

    public release() {
        clearInterval(this.timer);
    }

    public getLabel():string {
        const tz = this.getTimeZone(new Date());
        let dt = this.getDateByTimeZone(tz);
        console.log(`DateTImeUpdater getLobel timeZoneName:${Intl.DateTimeFormat().resolvedOptions().timeZone}`);
        console.log(`DateTImeUpdater ${dt.getTimezoneOffset()}`)
        return this.getLabelFromDate(dt);
    }

    private getLabelFromDate(dt:Date):string {
        return `${(dt.getMonth()+1).toLocaleString('us', {minimumIntegerDigits:2})}` +
                `-${dt.getDate().toLocaleString('us', {minimumIntegerDigits:2})}` +
                `  ${dt.getHours().toLocaleString('us', {minimumIntegerDigits:2})}` +
                `:${dt.getMinutes().toLocaleString('us', {minimumIntegerDigits:2})}`;
    }

    private getDateByTimeZone(timeZone:number):Date {
        let date = new Date()
        let utcEpochMs = date.getTime() + date.getTimezoneOffset() * 60000;
        let targetEpochMs = utcEpochMs + (3600000 * timeZone);
        let targetDate = new Date(targetEpochMs);
        return targetDate;
    }

    private tick() {
        const dt = this.getDateByTimeZone(8);
        const interval = 60000 - dt.getMilliseconds();
        //console.log(`DateTImeUpdater next tick:${interval}`)
        this.timer = setTimeout(() => {
            this.tick()
        }, interval);
        if (this.listener !== undefined) {
            const label = this.getLabelFromDate(dt)
            this.listener(label);
        }
    }

    private getTimeZone(date:Date):number {
        // if not bj return bj timezone
        // else return sf timezone
        if (date.getTimezoneOffset() !== -480) {
            console.log(`getTimeZone return 8`)
            return 8;
        }

        // bj return pacific
        return -7;
    }

    private timeZone:number = 0;
    private timer!: NodeJS.Timeout;
    private listener:((strTime: string) => void) | undefined;
}

export function createDateTimeUpdater(timeZone:number):IDateTimeUpdater {
    return new DateTImeUpdater(timeZone);
};
