import {UnitGroupState} from '../store'

export const actions = {
  inputChange: (value: number) => ({ type: 'inputChange', value }),
  setGroupSelect: (group: string, select: string) => ({type: 'setGroupSelect', group, select}),
  setGroup: (name: string, group: UnitGroupState) => ({type: 'setGroup', name, group})
};
