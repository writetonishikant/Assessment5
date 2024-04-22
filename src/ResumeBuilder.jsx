import { useState } from 'react';
import Switch from 'react-switch'; // Assuming you have a React Switch library installed

function ResumeBuilder() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'} style={{textAlign:"center",paddingTop:40, height:"calc(100vh - 60px)"}}>
      <h1>Resume Builder</h1>
      <div>
        <p>Switch to {darkMode ? 'Light Mode' : 'Dark Mode'}</p>
        <Switch
          onChange={toggleDarkMode}
          checked={darkMode}
          offColor="#888"
          onColor="#333"
        />
      </div>
      {/* Other resume builder components */}
    </div>
  );
}

export default ResumeBuilder;