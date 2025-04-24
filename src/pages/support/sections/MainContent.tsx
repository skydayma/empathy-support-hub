
import AnnouncementsCarouselPanel from "../AnnouncementsCarouselPanel";
import SupportFormPanel from "../SupportFormPanel";
import ContactOptionsPanel from "../ContactOptionsPanel";
import CustomerDashboardPanel from "../CustomerDashboardPanel";
import KnowledgeBasePanel from "../KnowledgeBasePanel";
import PersonalizedHelpPanel from "../PersonalizedHelpPanel";
import ContactSection from "../ContactSection";
import FooterLinks from "../FooterLinks";

interface MainContentProps {
  showDashboard: boolean;
  setShowDashboard: (show: boolean) => void;
}

const MainContent = ({ showDashboard, setShowDashboard }: MainContentProps) => (
  <>
    <AnnouncementsCarouselPanel />
    <div className="container mx-auto px-4 py-6 lg:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <div className="space-y-4 flex flex-col">
          <ContactOptionsPanel />
          <KnowledgeBasePanel />
          <PersonalizedHelpPanel />
        </div>
        {showDashboard ? (
          <CustomerDashboardPanel setShowDashboard={setShowDashboard} />
        ) : (
          <SupportFormPanel showDashboard={showDashboard} setShowDashboard={setShowDashboard} />
        )}
      </div>
    </div>
    <ContactSection />
    <FooterLinks />
  </>
);

export default MainContent;
