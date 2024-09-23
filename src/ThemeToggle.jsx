// ThemeToggle.jsx
import React, { useState, useEffect } from 'react';

// Define light and dark mode themes
const lightTheme = {
  backgroundColor: "#fff",
  color: "#000",
};

const darkTheme = {
  backgroundColor: "#333",
  color: "#fff",
};

const ThemeToggle = () => {
 
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true" || false;
  });

 
  const toggleTheme = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };

 
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <div style={theme}>
      <button onClick={toggleTheme}>
        Toggle to {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default ThemeToggle;
