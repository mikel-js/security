import React, { useState } from 'react';
import ThreeScene from './Components/ThreeScene';
const Experience = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  return (
    <div className='experience'>
      <div className='experience__left'>
        <button onClick={toggleDarkMode}>Activate Light</button>
      </div>
      <ThreeScene darkMode={darkMode} />
    </div>
  );
};

export default Experience;
