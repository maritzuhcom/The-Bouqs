export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('theBouqsState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem('theBouqsState', serializedState);
};
