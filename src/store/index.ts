export type Language = 'cn' | 'en';

export interface Store {
    value:number;
    languageKeys: {
        lang:Language;
        [key:string]:string;
    }
    font: {
        exchange:number;
        uniteName:number;
        value:number;
        time:number;
    }
}
