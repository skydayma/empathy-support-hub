import { motion } from "framer-motion";
import { Book } from "lucide-react";
import KnowledgeBase from "@/components/KnowledgeBase";

const KnowledgeBasePanel = () => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.33 }}
    className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl shadow-lg p-6 transition-all hover:shadow-xl mt-0"
  >
    <h2 className="text-xl font-bold mb-4 text-primary dark:text-white flex items-center gap-2">
      <Book className="h-5 w-5" /> Knowledge Base
    </h2>
    <KnowledgeBase />
  </motion.div>
);

export default KnowledgeBasePanel;
