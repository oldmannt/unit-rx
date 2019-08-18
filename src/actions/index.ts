
export const actions = {
  inputChange: (value: number) => ({ type: 'inputChange', value }),
  setGroupBase: (group: string, base: string) => ({type: 'setGroupBase', group, base}),
  setGroup: (name: string, group: Object) => ({type: 'setGroup', name, group})
};
