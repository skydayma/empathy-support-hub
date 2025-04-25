
import AnnouncementsCarouselPanel from "../AnnouncementsCarouselPanel";
import SupportFormPanel from "../SupportFormPanel";
import CustomerDashboardPanel from "../CustomerDashboardPanel";
import KnowledgeBasePanel from "../KnowledgeBasePanel";
import ContactSection from "../ContactSection";
import FooterLinks from "../FooterLinks";
import { motion } from "framer-motion";

interface MainContentProps {
  showDashboard: boolean;
  setShowDashboard: (show: boolean) => void;
}

const MainContent = ({ showDashboard, setShowDashboard }: MainContentProps) => (
  <>
    <AnnouncementsCarouselPanel />
    <section 
      className="relative py-12 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #fdfcfb 0%, #e5deff 100%)",
        boxShadow: "inset 0 0 100px rgba(147,39,143,0.1)"
      }}
    >
      {/* Primary gradient overlay */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "linear-gradient(90deg, rgba(246,219,245,0.6) 0%, rgba(234,172,232,0.4) 50%, rgba(147,39,143,0.2) 100%)",
        }}
      />
      
      {/* Radial glow effects */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 50%)",
        }}
      />
      
      {/* Soft mesh gradient */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(60deg, rgba(134,239,172,0.05) 0%, rgba(59,130,246,0.05) 100%)",
          mixBlendMode: "overlay"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="sticky top-24">
              <KnowledgeBasePanel />
            </div>
          </motion.div>
          <div>
            {showDashboard ? (
              <CustomerDashboardPanel setShowDashboard={setShowDashboard} />
            ) : (
              <SupportFormPanel showDashboard={showDashboard} setShowDashboard={setShowDashboard} />
            )}
          </div>
        </div>
        <div className="block lg:hidden mt-6">
          <KnowledgeBasePanel />
        </div>
      </div>
      
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-72 bg-gradient-to-bl from-secondary/20 to-transparent rounded-bl-full transform rotate-180 blur-lg" />
      <div className="absolute top-20 right-40 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-full animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-1/4 h-56 bg-gradient-to-tr from-primary/20 to-transparent rounded-tr-full blur-lg" />
      <div className="absolute bottom-20 left-32 w-16 h-16 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full animate-float" />
    </section>
    
    <ContactSection />
    <FooterLinks />
  </>
);

export default MainContent;
