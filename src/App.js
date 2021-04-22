import React from 'react';
import { Header } from './components';
import { Home, ShoppingCart } from './pages';
import { Route } from 'react-router-dom';

function App() {
  const [pizzasData, setPizzasData] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json')
    .then((res) => res.json())
    .then((json) => setPizzasData(json.pizzas))
  }, []);

  console.log(pizzasData);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={() => <Home data = {pizzasData}/>} />
        <Route exact path="/cart" component={ShoppingCart} />
      </div>
    </div>
  );
}

export default App;
