
import { motion } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";

const personalized = [
  {
    title: "How to reset your password",
    category: "Account",
    views: 1203,
  },
  {
    title: "Troubleshooting payment failures",
    category: "Billing",
    views: 876,
  },
  {
    title: "Setting up two-factor authentication",
    category: "Security",
    views: 541,
  },
];

const PersonalizedHelpPanel = () => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.33 }}
    className="bg-gradient-to-br from-accent to-white dark:from-gray-800 dark:to-gray-900 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-lg p-8 transition-all"
  >
    <h2 className="text-xl font-bold mb-4 text-primary dark:text-white flex items-center">
      <HelpCircle className="h-5 w-5 mr-2" /> Recommended for You
    </h2>
    <div className="space-y-3 mt-4">
      {personalized.map((article, index) => (
        <motion.div
          key={article.title}
          className="p-4 bg-white/80 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 rounded-lg hover:bg-accent/30 dark:hover:bg-gray-700/50 transition-colors group cursor-pointer"
          initial={{ opacity: 0, y: 8 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.39 + index * 0.08, duration: 0.25 }
          }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium group-hover:text-primary transition-colors dark:text-gray-200">
                {article.title}
              </h4>
              <div className="flex items-center text-xs mt-1">
                <span className="px-2 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-300 mr-2">
                  {article.category}
                </span>
                <span className="text-muted-foreground dark:text-gray-400">
                  {article.views} views
                </span>
              </div>
            </div>
            <ChevronDown className="h-4 w-4 text-muted-foreground dark:text-gray-400 group-hover:text-primary dark:group-hover:text-white transition-transform group-hover:-rotate-90" />
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default PersonalizedHelpPanel;
