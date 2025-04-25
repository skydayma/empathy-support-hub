
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
        background: "linear-gradient(135deg, #fdfcfb 0%, #f6f3ff 100%)",
      }}
    >
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "linear-gradient(90deg, rgba(246,219,245,0.4) 0%, rgba(234,172,232,0.4) 50%, rgba(147,39,143,0.2) 100%)",
        }}
      />
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 50%)",
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
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-64 bg-gradient-to-bl from-secondary/10 to-transparent rounded-bl-full transform rotate-180" />
      <div className="absolute bottom-0 left-0 w-1/4 h-48 bg-gradient-to-tr from-primary/10 to-transparent rounded-tr-full" />
    </section>
    
    <ContactSection />
    <FooterLinks />
  </>
);

export default MainContent;
