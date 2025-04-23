import SmartSearch from "@/components/SmartSearch";
import { motion } from "framer-motion";
import { CircleHelpIcon, SparklesIcon } from "lucide-react";

const HeroSection = ({
  isDarkMode,
  toggleDarkMode,
}: {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}) => (
  <section
    className="relative overflow-hidden py-12 lg:py-16 px-4 lg:px-0 min-h-[320px] flex flex-col justify-center"
    style={{
      background: "linear-gradient(135deg, #b6eaff 0%, #e5deff 50%, #ffdee2 100%)",
      zIndex: 0,
    }}
  >
    <div className="fixed top-20 right-5 z-50">
      <button
        onClick={toggleDarkMode}
        className="p-3 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg hover:shadow-xl transition-all backdrop-blur-sm"
      >
        {isDarkMode ? (
          <svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="10" fill="#FFD700" /></svg>
        ) : (
          <svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="10" fill="#003296" /></svg>
        )}
      </button>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/10 pointer-events-none"
    />

    <div className="container mx-auto grid md:grid-cols-2 gap-6 lg:gap-8 items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div className="flex items-center gap-3 mb-2">
          <SparklesIcon className="h-6 w-6 text-primary animate-pulse-slow" />
          <span className="text-primary/80 font-medium">24/7 Customer Support</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-800 dark:text-white leading-tight">
          We're Here to{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Help You
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
          Our friendly support team is always ready to assist you. Get answers, solutions, or just a bit of guidance — we're just one message away!
        </p>
        
        <div className="mt-8">
          <SmartSearch />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center gap-2 mt-6 text-slate-600"
        >
          <CircleHelpIcon className="h-5 w-5" />
          <span className="text-sm">Type your question to get started</span>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex justify-center md:justify-end relative"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative">
          <img
            src={`https://images.unsplash.com/photo-${isDarkMode ? '1487087182419-5c8fede9b91a' : '1461749280684-dccba630e2f6'}`}
            alt="Support illustration"
            className="h-64 w-full max-w-lg object-cover rounded-2xl shadow-2xl border-4 border-white/80 transition-transform hover:scale-[1.02] duration-300"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </div>

    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: "linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,80,200,0.08),rgba(6,194,134,0.06))",
      }}
    />
  </section>
);

export default HeroSection;
