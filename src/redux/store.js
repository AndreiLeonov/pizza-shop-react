import { createStore, combineReducers } from 'redux';
import filters from './reducers/filters';
import pizzas from './reducers/pizzas';

const rootReducer = combineReducers({
  filters: filters,
  pizzas: pizzas,
});

const store = createStore(
  rootReducer,
  //added redux devtools:
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
