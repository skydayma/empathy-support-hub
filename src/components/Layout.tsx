
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
              <img 
                src="https://th.bing.com/th/id/R.9f0e77e0c060d197f2fccb37a2bc7b8a?rik=A8fLwKXzVkJxnA&riu=http%3a%2f%2fapi.intellect.com%2fwp-content%2fuploads%2f2023%2f04%2fxLM-Logo-png-1-1-e1681946370250.png&ehk=2pWWRQ%2fLrWvWk%2fc19%2b86%2b3ayM1qJS4mqopBBvZv9ZI4%3d&risl=&pid=ImgRaw&r=0"
                alt="logo"
                className="h-12 w-20" 
              />
              <Link to="/" className="text-xl font-bold text-foreground">
                Continuous Intelligence 
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
    </div>
  );
};

export default Layout;
