import axios from 'axios';

export const setPizzas = (items) => ({
  type: 'PIZZAS/SET_PIZZAS',
  payload: items,
});

export const fetchPizzas = () => (dispatch) => {
  dispatch(setLoaded(false));
  axios.get('http://localhost:3001/pizzas').then((res) => dispatch(setPizzas(res.data)));
};

export const setLoaded = (value) => ({
  type: 'PIZZAS/SET_LOADED',
  payload: value,
})