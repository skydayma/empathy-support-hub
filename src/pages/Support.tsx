import { useState } from "react";
import Layout from "@/components/Layout";
import LiveChatWidget from "@/components/LiveChatWidget";
import HeroSection from "./support/HeroSection";
import AnnouncementsCarouselPanel from "./support/AnnouncementsCarouselPanel";
import SupportFormPanel from "./support/SupportFormPanel";
import ContactOptionsPanel from "./support/ContactOptionsPanel";
import CustomerDashboardPanel from "./support/CustomerDashboardPanel";
import KnowledgeBasePanel from "./support/KnowledgeBasePanel";
import PersonalizedHelpPanel from "./support/PersonalizedHelpPanel";
import ContactSection from "./support/ContactSection";
import FooterLinks from "./support/FooterLinks";
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
