import React from 'react';
import NewsSummary from './Components/NewsSummary';
import Blog from './Components/Blog';
import business1 from '../../assets/images/business1.jpg';
import business2 from '../../assets/images/building2.jpg';
import business3 from '../../assets/images/business3.jpg';

const News = () => {
  const news = [
    {
      id: 1,
      title: 'This is a sample title for news. ',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum, augue vitae scelerisque luctus, nunc purus bibendum velit, vel pellentesque sapien nisi ac eros.',
      linkText: 'Learn more',
      image: business1,
    },
    {
      id: 2,
      title: 'This is a sample title for news',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum, augue vitae scelerisque luctus, nunc purus bibendum velit, vel pellentesque sapien nisi ac eros.',
      linkText: 'Learn more',
      image: business2,
    },
    {
      id: 3,
      title: 'This is a sample title for news',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum, augue vitae scelerisque luctus, nunc purus bibendum velit, vel pellentesque sapien nisi ac eros.',
      linkText: 'Read more',
      image: business3,
    },
  ];

  const blogs = [
    {
      id: 1,
      date: 'December 15, 2021',
      content: 'This is a sample blog content',
    },
    {
      id: 2,
      date: 'December 16, 2021',
      content: 'This is a sample blog content',
    },
    {
      id: 3,
      date: 'December 17, 2021',
      content: 'This is a sample blog content',
    },
  ];

  const press = [
    {
      id: 1,
      date: 'December 18, 2021',
      content: 'This is a sample press content',
    },
    {
      id: 2,
      date: 'December 19, 2021',
      content: 'This is a sample press content',
    },
    {
      id: 3,
      date: 'December 20, 2021',
      content: 'This is a sample press content',
    },
  ];

  return (
    <div className='news'>
      <div className='news__container'>
        <div className='news__newsSummary'>
          <NewsSummary news={news} />
        </div>
        <div className='news__blog'>
          <Blog section='BLOG' contents={blogs} />
          <Blog section='PRESS CENTER' contents={press} />
        </div>
      </div>
    </div>
  );
};

export default News;
