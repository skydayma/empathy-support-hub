
import { 
  Twitter, 
  Github, 
  Linkedin, 
  Youtube,
  FileText,
  HelpCircle,
  User
} from "lucide-react";

const FooterLinks = () => (
  <footer className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-t border-gray-200">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary">About Us</h3>
          <p className="text-muted-foreground">
            ContinuousIntelligence helps businesses deliver exceptional customer support with AI-powered solutions.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">Products</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Live Chat</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Knowledge Base</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Help Desk</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">API</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Documentation</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Tutorials</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Community</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">GDPR</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <p className="text-center text-muted-foreground">
          © {new Date().getFullYear()} ContinuousIntelligence. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default FooterLinks;
