import React from 'react';
import { Categories, SortPopup, Pizza } from "../components";

export const Home = () => {
    return (
        <div className="container">
        <div className="content__top">
          <Categories
            items={[
              "Мясные",
              "Вегетарианская",
              "Гриль",
              "Острые",
              "Закрытые",
            ]}
            onClick={(el) => console.log(el)}
          />
          <SortPopup items={[
              "популярности",
              "цене",
              "алфавиту",
            ]}/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          <Pizza/>

        </div>
      </div>
    );
}