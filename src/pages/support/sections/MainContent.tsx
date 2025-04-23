
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
    <div className="container mx-auto px-2 py-10 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {showDashboard ? (
          <CustomerDashboardPanel setShowDashboard={setShowDashboard} />
        ) : (
          <SupportFormPanel showDashboard={showDashboard} setShowDashboard={setShowDashboard} />
        )}
        <div className="space-y-8 flex flex-col h-full">
          <ContactOptionsPanel />
          <KnowledgeBasePanel />
          <PersonalizedHelpPanel />
        </div>
      </div>
    </div>
    <ContactSection />
    <FooterLinks />
  </>
);

export default MainContent;
