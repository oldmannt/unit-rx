
export const actions = {
  inputChange: (value: number) => ({ type: 'inputChange', value }),
  setGroupBase: (group: string, base: string) => ({type: 'setGroupBase', group, base}),
  addGroup: (name: string, group: Object) => ({type: 'addGroup', name, group})
};
