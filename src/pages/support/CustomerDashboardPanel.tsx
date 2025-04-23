
import { motion } from "framer-motion";
import MotionButton from "@/components/MotionButton";
import CustomerDashboard from "@/components/CustomerDashboard";

const CustomerDashboardPanel = ({
  setShowDashboard
}: {
  setShowDashboard: (show: boolean) => void;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -24 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    className="rounded-2xl shadow-xl bg-white/90 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 relative z-0 backdrop-blur-lg"
  >
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-primary dark:text-white">Customer Dashboard</h2>
      <MotionButton
        onClick={() => setShowDashboard(false)}
        variant="outline"
        size="sm"
      >
        Switch to Contact Form
      </MotionButton>
    </div>
    <CustomerDashboard />
  </motion.div>
);

export default CustomerDashboardPanel;
