import React from 'react';

export const Categories = ({items, onClick}) => {
  return (
    <div className="categories">
      <ul>
        <li className="active">Все</li>
        {items.map((el, index) => <li onClick={() => onClick(el)} key={`${el}_${index}`}>{el}</li>)}
      </ul>
    </div>
  );
};
