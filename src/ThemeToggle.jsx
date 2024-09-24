// ThemeToggle.jsx
import React, { useState } from 'react';

// Define light and dark mode themes
const lightTheme = {
  backgroundColor: "#fff",
  color: "#000",
  minHeight: "100vh", 
  padding: "20px",
};

const darkTheme = {
  backgroundColor: "#333",
  color: "#fff",
  minHeight: "100vh", 
  padding: "20px",
};

const ThemeToggle = ({ children }) => {
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
          <button 
        onClick={toggleTheme} 
        style={{
          position: "absolute",   
          bottom: "380px",            
          right: "45px",          
          padding: "10px 20px",  
          cursor: "pointer",      
          backgroundColor: darkMode ? "#444" : "#ddd", 
          color: darkMode ? "#fff" : "#000",           
          border: "none",         
          borderRadius: "5px",   
        }}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      {children} {/* Render children (App content) within the theme */}
    </div>
  );
};

export default ThemeToggle;
