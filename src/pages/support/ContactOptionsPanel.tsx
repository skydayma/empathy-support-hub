
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
  >
    <h2 className="text-2xl font-bold mb-4 text-primary dark:text-white">
      Contact Options
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {contactOptions.map((option, index) => (
        <motion.div
          key={option.title}
          className="bg-gradient-to-br from-white via-blue-50 to-green-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700 p-4 rounded-xl shadow-md border hover:shadow-xl transition-all group border-gray-100 dark:border-gray-700 hover:border-primary/40 dark:hover:border-secondary/40 cursor-pointer"
          whileHover={{
            y: -4,
            scale: 1.02,
            boxShadow: "0 8px 32px rgba(0,50,150,0.15)"
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.15 + index * 0.1, duration: 0.4 }
          }}
        >
          <div className="flex flex-col items-center text-center gap-2">
            <div className="p-2 mb-2 rounded-full bg-primary/10 ring-1 ring-secondary">
              <div>{option.icon}</div>
            </div>
            <h3 className="font-bold mb-1 text-primary dark:text-white">{option.title}</h3>
            <p className="text-muted-foreground text-xs mb-3 dark:text-gray-400">{option.description}</p>
            <button className="text-secondary underline underline-offset-2 hover:text-primary transition text-sm font-medium">
              {option.action}
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default ContactOptionsPanel;
