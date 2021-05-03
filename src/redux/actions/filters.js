export const setSortBy = (name) => ({
  type: 'FILTERS/SET_SORT_BY',
  payload: name,
});

export const setCategory = (name) => ({
  type: 'FILTERS/SET_CATEGORY',
  payload: name,
});
