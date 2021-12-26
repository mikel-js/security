import React, { Fragment } from 'react';

const NewsSummary = ({ news }) => {
  const renderNews = () =>
    news.map(({ id, title, description, linkText, image }) => {
      return (
        <div className='newsSummary__container' key={id}>
          <div className='newsSummary__container--image'>
            <img src={image} alt={title} />
          </div>
          <div className='newsSummary__container--content'>
            <h3>{title}</h3>
            <p>{description}</p>
            <p className='newsSummary__container--content-link'>{`${linkText}  >`}</p>
          </div>
        </div>
      );
    });
  return <div className='newsSummary'>{renderNews()}</div>;
};

export default NewsSummary;
