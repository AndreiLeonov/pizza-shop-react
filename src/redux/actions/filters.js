const setSortBy = (name) => ({
  type: 'FILTERS/SET_SORT_BY',
  payload: name,
});

const setCategory = (name) => ({
  type: 'FILTERS/SET_CATEGORY',
  payload: name,
});
