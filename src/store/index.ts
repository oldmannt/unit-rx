export type Language = 'cn' | 'en';

export interface Unit {
    value:number; // value = base.value * ratio + offset
    name:string;
    isUS:boolean;
    ratio:number;
    offset:number;
    postfix:string;
}

export interface UnitGroupState {
    base:string;
    select:string;
    summary:string;
    units: {
        [name:string]:Unit;
    }
}

export interface Store {
    inputValue:number;
    groups: {
        [name:string]:UnitGroupState;
    };

    // languageKeys: {
    //     lang:Language;
    //     [key:string]:string;
    // }
    // font: {
    //     exchange:number;
    //     uniteName:number;
    //     value:number;
    //     time:number;
    // }
}
