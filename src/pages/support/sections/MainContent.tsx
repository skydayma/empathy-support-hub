
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
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative hidden lg:block"
        >
          <div className="sticky top-24">
            <img 
              src="/lovable-uploads/042aea83-c906-41e9-8a8d-ad07b01560d6.png"
              alt="Customer Service Representative"
              className="w-full rounded-2xl shadow-lg mb-6"
            />
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
    <ContactSection />
    <FooterLinks />
  </>
);

export default MainContent;
