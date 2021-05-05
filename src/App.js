import React from 'react';
import { Header } from './components';
import { Home, ShoppingCart } from './pages';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { setPizzas } from './redux/actions/pizzas';
import { useDispatch } from 'react-redux';
import { fetchPizzas } from './redux/actions/pizzas';

const App = () => {

  const dispatch = useDispatch();
  
  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={ShoppingCart} />
      </div>
    </div>
  ); 

}

export default App;
