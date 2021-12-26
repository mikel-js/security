import React from 'react';

const Blog = ({ section, contents }) => {
  const renderContent = () =>
    contents.map(({ id, date, content }) => {
      return (
        <div className='blog__container' key={id}>
          <p className='blog--date'>{date}</p>
          <p className='blog--content'>{content}</p>
        </div>
      );
    });
  return (
    <div className='blog'>
      <h4>{section}</h4>
      {renderContent()}
    </div>
  );
};

export default Blog;
