
import { useState } from "react";
import Layout from "@/components/Layout";
import LiveChatWidget from "@/components/LiveChatWidget";
import HeroSection from "./support/HeroSection";
import MainContent from "./support/sections/MainContent";

// Main Support Page split into smaller subfiles for maintainability.
const Support = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((d) => !d);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <Layout>
      <HeroSection isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <LiveChatWidget />
      <MainContent showDashboard={showDashboard} setShowDashboard={setShowDashboard} />
    </Layout>
  );
};

export default Support;
