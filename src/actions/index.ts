
export const actions = {
  inputChange: (value: number) => ({ type: 'inputChange', value }),
  setGroupSelect: (group: string, select: string) => ({type: 'setGroupSelect', group, select}),
  setGroup: (name: string, group: Object) => ({type: 'setGroup', name, group})
};
