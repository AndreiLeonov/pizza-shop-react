const initialState = {
  items: [],
  isLoaded: false,
};

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case 'PIZZAS/SET_PIZZAS':
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    case 'PIZZAS/SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return state;
  }
};

export default pizzas;
