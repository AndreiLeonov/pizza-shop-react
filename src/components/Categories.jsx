import React from 'react';

export const Categories = ({ items, onClick }) => {
  const [activeItem, setActiveItem] = React.useState(null);

  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => setActiveItem(null)}>
          Все
        </li>
        {items && items.map((el, index) => (
          <li
            className={activeItem === index ? 'active' : ''}
            onClick={() => setActiveItem(index)}
            key={`${el}_${index}`}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};
