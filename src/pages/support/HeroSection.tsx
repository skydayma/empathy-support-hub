
import SmartSearch from "@/components/SmartSearch";
import { motion } from "framer-motion";

const HeroSection = ({
  isDarkMode,
  toggleDarkMode,
}: {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}) => (
  <section
    className="relative overflow-hidden py-16 lg:py-20 px-2 lg:px-0 min-h-[340px] flex flex-col justify-center bg-[linear-gradient(135deg,#b6eaff_0%,#e5deff_50%,#ffdee2_100%)]"
    style={{ zIndex: 0 }} // Explicitly set lower z-index for the hero section
  >
    <div className="fixed top-20 right-5 z-50">
      <button
        onClick={toggleDarkMode}
        className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all"
      >
        {isDarkMode ? (
          <svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="10" fill="#FFD700" /></svg>
        ) : (
          <svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="10" fill="#003296" /></svg>
        )}
      </button>
    </div>
    <div className="container mx-auto grid md:grid-cols-2 gap-6 items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 md:mb-0"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-5 text-white drop-shadow-md">
          We're Here to Help
        </h1>
        <p className="text-lg text-white/90 mb-8">
          Our friendly support team is always ready to assist you. Get answers, solutions, or just a bit of guidance — we're just one message away!
        </p>
        <SmartSearch />
      </motion.div>
      <motion.div
        className="flex justify-center md:justify-end"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img
          src={`https://images.unsplash.com/photo-${isDarkMode ? '1487087182419-5c8fede9b91a' : '1461749280684-dccba630e2f6'}`}
          alt="Support illustration"
          className="h-52 w-full max-w-xs object-cover rounded-2xl shadow-xl border-4 border-white/80"
        />
      </motion.div>
    </div>
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,80,200,0.13),rgba(6,194,134,0.10))",
      }}
    />
  </section>
);

export default HeroSection;
