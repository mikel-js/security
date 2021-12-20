import React from 'react';

const NavBar = () => {
  const navItems = [
    { id: 1, name: 'For home' },
    { id: 2, name: 'For business' },
    { id: 3, name: 'For partners' },
    { id: 4, name: 'Consulting' },
    { id: 5, name: 'My Account', icon: 'far fa-user' },
    { id: 6, name: 'Global', icon: 'fas fa-globe-europe' },
  ];

  const renderNav = () =>
    navItems.map(({ id, name, icon = null }) => {
      return (
        <div key={id} className='navBar__items-item'>
          {icon && <i className={icon} />}
          <span>{name}</span>
        </div>
      );
    });

  return (
    <div className='navBar'>
      <div className='navBar__container'>
        <div>
          <span>Secure Clone</span>
          <i className='fas fa-signal' />
        </div>
        <div className='navBar__items'>
          {renderNav()}
          <i className='fas fa-search' />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
