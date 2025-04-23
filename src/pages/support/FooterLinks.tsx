
import { FileText, HelpCircle, User } from "lucide-react";
const FooterLinks = () => (
  <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-6 mt-10">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-6 mb-4">
        <a href="#" className="text-sm text-muted-foreground hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors">
          <span className="flex items-center"><FileText className="h-4 w-4 mr-1" /> Privacy Policy</span>
        </a>
        <a href="#" className="text-sm text-muted-foreground hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors">
          <span className="flex items-center"><FileText className="h-4 w-4 mr-1" /> Terms of Service</span>
        </a>
        <a href="#" className="text-sm text-muted-foreground hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors">
          <span className="flex items-center"><HelpCircle className="h-4 w-4 mr-1" /> Help Center</span>
        </a>
        <a href="#" className="text-sm text-muted-foreground hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors">
          <span className="flex items-center"><User className="h-4 w-4 mr-1" /> Accessibility</span>
        </a>
      </div>
    </div>
  </footer>
);
export default FooterLinks;
