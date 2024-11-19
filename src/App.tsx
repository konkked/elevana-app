import React, { useEffect, useState } from "react";
import LoadingSpinner from "./components/LoadingSpinner.tsx";

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Update the <html> class based on theme
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col items-center justify-center">
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="mb-4 px-4 py-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded"
      >
        Toggle Theme
      </button>
      <LoadingSpinner />
    </div>
  );
};

export default App;