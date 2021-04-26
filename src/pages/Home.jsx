import React from 'react';
import { Categories, SortPopup, Pizza } from '../components';

export const Home = ({ data }) => {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
          onClick={(el) => console.log(el)}
        />
        <SortPopup
          items={[
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
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {data.map((elem) => (
          <Pizza key={elem.id} {...elem} />
        ))}
      </div>
    </div>
  );
};
