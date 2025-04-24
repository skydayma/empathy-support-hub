
import { motion } from "framer-motion";
import { MessageSquare, Mail, HelpCircle } from "lucide-react";

const contactOptions = [
  {
    title: "Live Chat",
    description: "Talk to our team in real-time",
    icon: <MessageSquare className="h-6 w-6 text-primary" />,
    action: "Start Chat"
  },
  {
    title: "Email Support",
    description: "Send us a detailed message",
    icon: <Mail className="h-6 w-6 text-secondary" />,
    action: "Email Us"
  },
  {
    title: "FAQs",
    description: "Find quick answers to common questions",
    icon: <HelpCircle className="h-6 w-6 text-primary" />,
    action: "View FAQs"
  }
];

const ContactOptionsPanel = () => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.17 }}
    className="mt-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-100 dark:bg-gray-800/90 dark:border-gray-700"
  >
    <h2 className="text-xl font-bold mb-4 text-primary dark:text-white">
      Quick Contact Options
    </h2>
    <div className="grid grid-cols-1 gap-3">
      {contactOptions.map((option, index) => (
        <motion.div
          key={option.title}
          className="bg-gradient-to-br from-white via-blue-50/50 to-green-50/50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700 p-4 rounded-lg shadow-sm border hover:shadow-md transition-all group border-gray-100 dark:border-gray-700 hover:border-primary/40 dark:hover:border-secondary/40 cursor-pointer"
          whileHover={{
            y: -2,
            scale: 1.01,
            transition: { duration: 0.2 }
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.1 + index * 0.1, duration: 0.3 }
          }}
        >
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-full bg-primary/10 ring-1 ring-secondary/30">
              {option.icon}
            </div>
            <div>
              <h3 className="font-semibold text-primary dark:text-white">{option.title}</h3>
              <p className="text-sm text-muted-foreground dark:text-gray-400">{option.description}</p>
            </div>
            <button className="ml-auto text-secondary hover:text-primary transition text-sm font-medium">
              {option.action}
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default ContactOptionsPanel;
