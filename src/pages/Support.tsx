
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

// Maintain state here for dashboard toggle and dark mode
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
      <AnnouncementsCarouselPanel />
      <div className="container mx-auto px-2 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {showDashboard ? (
            <CustomerDashboardPanel setShowDashboard={setShowDashboard} />
          ) : (
            <SupportFormPanel showDashboard={showDashboard} setShowDashboard={setShowDashboard} />
          )}
          <div className="space-y-8 flex flex-col justify-between">
            <ContactOptionsPanel />
            <KnowledgeBasePanel />
            <PersonalizedHelpPanel />
          </div>
        </div>
      </div>
      <ContactSection />
      <FooterLinks />
    </Layout>
  );
};

export default Support;
