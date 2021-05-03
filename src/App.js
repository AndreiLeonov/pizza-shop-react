import React from 'react';
import { Header } from './components';
import { Home, ShoppingCart } from './pages';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { setPizzas } from './redux/actions/pizzas';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {

  const dispatch = useDispatch();
  const {pizzasData} = useSelector(({pizzas, filters }) => {
    return {
      pizzasData: pizzas.items,
      sortBy: filters.sortBy,
    };
  });

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then((res) => dispatch(setPizzas(res.data.pizzas)));
  }, []);

  console.log(pizzasData);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={() => <Home data={pizzasData} />} />
        <Route exact path="/cart" component={ShoppingCart} />
      </div>
    </div>
  ); 

}

export default App;
