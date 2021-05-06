import React from 'react';
import { Header } from './components';
import { Home, ShoppingCart } from './pages';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const App = () => {

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
