import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Categories, SortPopup, Pizza, PreloaderPizza } from '../components';
import { setCategory } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

const arrayOfCategories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const arrayOfSortItems = [
  {
    name: 'популярности',
    type: 'popular',
  },
  {
    name: 'цене',
    type: 'price',
  },
  {
    name: 'алфавиту',
    type: 'alphabet',
  },
]

export const Home = () => {
  const dispatch = useDispatch();

  const pizzasData = useSelector(({pizzas}) => pizzas.items);
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
  const {category, sortBy} = useSelector(({filters}) => filters);

  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, []);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index))
  },[category]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={arrayOfCategories}
          onClick={onSelectCategory}
        />
        <SortPopup
          items={arrayOfSortItems}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded 
        ? pizzasData.map((elem) => (
          <Pizza key={elem.id} isLoading={true} {...elem} />
        )) 
        : Array(12).fill(0).map((_,index) => <PreloaderPizza key={_+index}/>)
      }
      </div>
    </div>
  );
};
