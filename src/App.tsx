import React, { useEffect, useState } from "react";
import Home from "./pages/Home.tsx";
import LoadingSpinner from "./components/LoadingSpinner.tsx";

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<string>("home");
  // Update the <html> class based on theme
  useEffect(() => {
    
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  (window as any).setCurrentScreen = (screen: string) => setCurrentScreen(screen);

  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col items-center justify-center">
      {/* Dynamically Render Screens */}
      {currentScreen === "home" && <Home />}
      {currentScreen === "spinner" && (
        <div>
          <h1 className="text-xl font-bold mb-4">Loading Spinner</h1>
          <LoadingSpinner />
        </div>
      )}
      {currentScreen === "stats" && (
        <div>
          <h1 className="text-xl font-bold mb-4">Stats Screen</h1>
          <p>Here are your stats...</p>
        </div>
      )}
    </div>
  )
};

export default App;