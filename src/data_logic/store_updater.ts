
import { Store, UnitGroupState } from '../store';

export class StoreUpdater {
    static inputChange(store: Store, inputValuse: number) {
        store.inputValue = inputValuse;
        for (let groupName in store.groups) {
            let group = store.groups[groupName]
            StoreUpdater.updateGroupValues(group, store.inputValue);
        }
    }

    static setGroupSelect(store: Store, groupName: string, select: string) {
        console.log(`StoreUpdater setGroupSelect group:${groupName} select:${select}`)
        let group = store.groups[groupName];
        group.select = select;

        let selectUnit = group.units[group.select];
        selectUnit.value = store.inputValue;
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

    static setGroup(store: Store, groupName: string, newGroup: UnitGroupState) {
        store.groups[groupName] = newGroup;
        let group = store.groups[groupName]
        StoreUpdater.updateGroupValues(group, store.inputValue);
    }

    static updateGroupValues(group: UnitGroupState, inputValue: number) {
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

