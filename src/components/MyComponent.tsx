"use client"

import React, { useRef, useState } from 'react';
import Card1 from './cards/Card1';
import Card2 from './cards/Card2';
import Card3 from './cards/Card3';
import Card4 from './cards/Card4';
import Card5 from './cards/Card5';
import Card6 from './cards/Card6';
import Card7 from './cards/Card7';
import Card8 from './cards/Card8';
import Card9 from './cards/Card9';
import Card10 from './cards/Card10';
import Menubar from './menubar/Menubar';

const MyComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const cardWidth = 300;
  const cardMargin = 16;

  const scrollLeftHandler = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= cardWidth + cardMargin;
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  const scrollRightHandler = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += cardWidth + cardMargin;
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  const containerWidth = (cardWidth + cardMargin) * 10;

  return (

    <div className='h-screen' style={{background: '#c3ceea'}}>
      <div><h1 className='text-center text-black font-black text-6xl	py-5'>CryptoPulse</h1>
      </div>
      <Menubar // Pass scroll handlers as props to Menubar component
        scrollLeftHandler={scrollLeftHandler}
        scrollRightHandler={scrollRightHandler}
      />
      <div className="my-component" style={{ overflow: 'hidden', background: '#c3ceea', display: 'flex', alignItems: 'center' }}>
        <div ref={containerRef} style={{ overflowX: 'hidden', scrollBehavior: 'smooth', whiteSpace: 'nowrap', overflowY: 'hidden', width: `${containerWidth}px` }}>
          <div className="card-container" style={{ display: 'flex' }}>
            <div style={{ margin: '0 8px' }}><Card1 /></div>
            <div style={{ margin: '0 8px' }}><Card2 /></div>
            <div style={{ margin: '0 8px' }}><Card3 /></div>
            <div style={{ margin: '0 8px' }}><Card4 /></div>
            <div style={{ margin: '0 8px' }}><Card5 /></div>
            <div style={{ margin: '0 8px' }}><Card6 /></div>
            <div style={{ margin: '0 8px' }}><Card7 /></div>
            <div style={{ margin: '0 8px' }}><Card8 /></div>
            <div style={{ margin: '0 8px' }}><Card9 /></div>
            <div style={{ margin: '0 8px' }}><Card10 /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
