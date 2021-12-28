import React, { Fragment } from 'react';
import business2 from '../../assets/images/business2.jpg';
import building2 from '../../assets/images/building2.jpg';
import business4 from '../../assets/images/business4.jpg';

const index = () => {
  const infoSections = [
    {
      id: 1,
      title: 'About us',
      description: 'About us content.',
      linkText: 'Read more',
      image: building2,
    },
    {
      id: 2,
      title: 'Career at F-Security',
      description: 'Career content.',
      linkText: 'Read more',
      image: business2,
    },
    {
      id: 3,
      title: 'For investors',
      description: 'Investors content.',
      linkText: 'Read more',
      image: business4,
    },
  ];

  const renderInfo = () =>
    infoSections.map(({ id, title, description, linkText, image }) => {
      return (
        <div className='information__container' key={id}>
          <img src={image} alt={title} />
          <h2>{title}</h2>
          <p>{description}</p>
          <p className='information__container--link'>{`${linkText} >`}</p>
        </div>
      );
    });

  return (
    <Fragment>
      <div className='information'>
        <div className='information__content'>{renderInfo()}</div>
      </div>
      <hr />
    </Fragment>
  );
};

export default index;
