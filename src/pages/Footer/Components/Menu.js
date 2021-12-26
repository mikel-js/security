import React from 'react';

const Menu = ({ menu }) => {
  const renderMenu = () =>
    menu.map(({ id, title, subMenu }) => {
      return (
        <div key={id} className='menu__container'>
          {subMenu ? (
            <>
              {' '}
              <h4>{title}</h4>
              {subMenu.map((menu) => (
                <p>{menu}</p>
              ))}
            </>
          ) : (
            <div className='menu--global'>
              <i className='fas fa-globe-europe' />
              <h4>Global</h4>
            </div>
          )}
        </div>
      );
    });
  return <div className='menu'>{renderMenu()}</div>;
};

export default Menu;
