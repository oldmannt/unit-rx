export type Language = 'cn' | 'en';

export interface Unit {
    value:number;
    name:string;
    isMetric:boolean;
}

export interface UnitGroup {
    source:string;
    summary:string;
    units:Unit[];
}

export interface Store {
    inputValue:number;
    groups: {
        [id:string]:UnitGroup;
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
