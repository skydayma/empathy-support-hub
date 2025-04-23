
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { HeadphonesIcon } from "lucide-react";
import PageTransition from "./PageTransition";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b z-10 bg-white sticky top-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2"
            >
              <HeadphonesIcon className="h-8 w-8 text-primary" />
              <Link to="/" className="text-xl font-bold text-foreground">
                NexusSupport
              </Link>
            </motion.div>
            <nav>
              <ul className="flex space-x-8">
                <motion.li
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <Link to="/" className={`transition-colors ${
                    location.pathname === "/" 
                      ? "text-primary font-medium" 
                      : "text-foreground hover:text-primary"
                  }`}>
                    Home
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <Link to="/support" className={`transition-colors ${
                    location.pathname === "/support" 
                      ? "text-primary font-medium" 
                      : "text-foreground hover:text-primary"
                  }`}>
                    Support
                  </Link>
                </motion.li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-grow">
        <PageTransition>
          {children}
        </PageTransition>
      </main>
      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 NexusSupport. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
