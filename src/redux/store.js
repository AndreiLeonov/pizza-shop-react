import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import filters from './reducers/filters';
import pizzas from './reducers/pizzas';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  filters: filters,
  pizzas: pizzas,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
