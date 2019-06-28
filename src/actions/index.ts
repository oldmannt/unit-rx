
export const actions = {
  inputChange: (value: number) => ({ type: 'inputChange', value }),
  groupsSource: (group: string, source: string) => ({type: 'groupSource', group, source}),
};
