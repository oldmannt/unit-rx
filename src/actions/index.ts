
export const actions = {
  inputChange: (value: number) => ({ type: 'inputChange', value }),
  setGroupBase: (group: string, source: string) => ({type: 'groupSource', group, source}),
};
