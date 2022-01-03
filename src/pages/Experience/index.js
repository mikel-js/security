import React, { useState } from 'react';
import ThreeScene from './Components/ThreeScene';
const Experience = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  return (
    <div className='experience'>
      <div className='experience__left'>
        <div className='experience__left-button'>
          <button onClick={toggleDarkMode}>Toggle Background</button>
        </div>
      </div>
      <ThreeScene darkMode={darkMode} />
    </div>
  );
};

export default Experience;
