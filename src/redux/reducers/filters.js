const initialState = {
  sortBy: 'popular',
  category: 0,
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTERS/SET_SORT_BY':
      return {
        ...state,
        sortBy: action.payload,
      };
      case 'FILTERS/SET_CATEGORY':
        return {
          ...state,
          category: action.payload,
        };
    default:
      return state;
  }
};

export default filters;
