import React from 'react';
import { Header } from './components';
import { Home, ShoppingCart } from './pages';
import { Route } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [pizzasData, setPizzasData] = React.useState([]);

  // USE FETCH:
  // React.useEffect(() => {
  //   fetch('http://localhost:3000/db.json')
  //   .then((res) => res.json())
  //   .then((json) => setPizzasData(json.pizzas))
  // }, []);

  // USE AXIOS:
  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then((res) => setPizzasData(res.data.pizzas));
  }, []);

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
