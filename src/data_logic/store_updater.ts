
import { Store, UnitGroup } from '../store';

export class StoreUpdater {
    static inputChange(store:Store, inputValuse:number) : Store{
        let newState = Object.assign({}, store);
        newState.inputValue = inputValuse;
        for(let groupName in newState.groups) {
            let group = newState.groups[groupName]
            StoreUpdater.updateGroupValues(group, newState.inputValue);
        }
        return newState;
    }

    static setGroupSelect(store:Store, groupName:string, select:string) : Store {
        console.log(`StoreUpdater setGroupSelect group:${groupName} select:${select}`)
        let newState = Object.assign({}, store);
        let group = newState.groups[groupName];
        group.select = select;

        let selectUnit = group.units[group.select];
        selectUnit.value = newState.inputValue;
        let baseUnit = group.units[group.base];
        baseUnit.value = (baseUnit.value - selectUnit.offset) * selectUnit.ratio;
        for (let unitName in group.units) {
            if (unitName === group.base || unitName === group.select) {
                continue;
            }
            let unit = group.units[unitName];
            unit.value = baseUnit.value * unit.ratio + unit.offset;
        }
        return newState;
    }

    static setGroup(store:Store, groupName:string, newGroup:UnitGroup) :Store {
        let newState = {inputValue:1, groups:{}}
        if (store.inputValue !== undefined && store.groups !== undefined) {
            newState = Object.assign({}, store)
        }
        newState.groups[groupName] = newGroup;
        let group = newState.groups[groupName]
        StoreUpdater.updateGroupValues(group, newState.inputValue);
        return newState;
    }

    static updateGroupValues(group:UnitGroup, inputValue:number) {
        group.select = group.base;
        let selectUnit = group.units[group.select];
        if (selectUnit === undefined) {
            throw new Error(`selectUnit is undefined. base==select:${group.base}`)
        }
        selectUnit.value = inputValue;
        let baseUnit = group.units[group.base];
        baseUnit.value = (baseUnit.value - selectUnit.offset) * selectUnit.ratio;
        for (let unitName in group.units) {
            if (unitName === group.base || unitName === group.select) {
                continue;
            }
            let unit = group.units[unitName];
            unit.value = baseUnit.value * unit.ratio + unit.offset;
        }
    }

}

