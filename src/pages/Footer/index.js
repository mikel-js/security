import React from 'react';
import Menu from './Components/Menu';

const index = () => {
  const menu = [
    {
      id: 1,
      title: 'FOR HOME',
      subMenu: [
        'Products',
        'Free tools',
        'Articles',
        'Renew subscription',
        'Download',
        'My Secure',
      ],
    },
    {
      id: 2,
      title: 'FOR BUSINESS',
      subMenu: ['Solutions', 'Consulting', 'Contact sales'],
    },
    {
      id: 3,
      title: 'FOR PARTNERS',
      subMenu: ['For partners', 'Portal logins'],
    },
    {
      id: 4,
      title: 'SUPPORT',
      subMenu: ['Support for home', 'Support for business', 'Submit a sample'],
    },
  ];

  const menu2 = [
    {
      id: 1,
      title: 'COMPANY',
      subMenu: [
        'About us',
        'For investors',
        'For media',
        'Careers',
        'Offices',
        'Contact us',
      ],
    },
    {
      id: 2,
      title: 'LEGAL',
      subMenu: [
        'Terms of service',
        'Privacy policy',
        'Cookies',
        'Modern Slavery Statement',
      ],
    },
    {
      id: 3,
      title: 'FOLLOW US',
      subMenu: ['Secure blog', 'Technical research', 'Twitter', 'LinkedIn'],
    },
    { id: 4, title: 'GLOBAL' },
  ];

  return (
    <div className='footer'>
      <div className='footer__container'>
        <Menu menu={menu} />
        <hr />
        <Menu menu={menu2} />
      </div>
    </div>
  );
};

export default index;
