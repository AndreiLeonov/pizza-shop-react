import React from 'react';

export const Categories = React.memo(({ activeCategory, items, onClick }) => {

  return (
    <div className="categories">
      <ul>
        <li className={activeCategory === null ? 'active' : ''} onClick={() => onClick(null)}>
          Все
        </li>
        {items && items.map((el, index) => (
          <li
            className={activeCategory === index ? 'active' : ''}
            onClick={() => onClick(index)}
            key={`${el}_${index}`}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
});
