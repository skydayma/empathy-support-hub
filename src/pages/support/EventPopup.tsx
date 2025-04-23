
import React, { useEffect, useState } from "react";
import { X, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const EVENT_START = new Date("2025-08-30T10:00:00Z"); // Set your event start here!

function getTimeRemaining(target: Date) {
  const total = +target - +new Date();
  const seconds = Math.max(0, Math.floor((total / 1000) % 60));
  const minutes = Math.max(0, Math.floor((total / 1000 / 60) % 60));
  const hours = Math.max(0, Math.floor((total / (1000 * 60 * 60)) % 24));
  const days = Math.max(0, Math.floor(total / (1000 * 60 * 60 * 24)));
  return { total, days, hours, minutes, seconds };
}

const EventPopup: React.FC = () => {
  const [show, setShow] = useState(true);
  const [remaining, setRemaining] = useState(getTimeRemaining(EVENT_START));

  useEffect(() => {
    if (!show) return;
    const interval = setInterval(() => {
      setRemaining(getTimeRemaining(EVENT_START));
    }, 1000);
    return () => clearInterval(interval);
  }, [show]);

  // You might want to auto-close after the event starts
  useEffect(() => {
    if (remaining.total <= 0 && show) {
      setShow(false);
    }
  }, [remaining, show]);

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -30, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="fixed z-40 inset-0 bg-black/25 flex items-center justify-center px-2"
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.96 }}
          transition={{ duration: 0.25 }}
          className="relative bg-gradient-to-br from-[#E5DEFF] via-[#D3E4FD] to-[#FFDEE2] rounded-xl max-w-md w-full p-6 shadow-2xl border border-white/60 text-center flex flex-col items-center"
        >
          <button
            aria-label="Close announcement"
            onClick={() => setShow(false)}
            className="absolute top-4 right-4 rounded-full bg-white/80 p-1 shadow hover:bg-white transition"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
          <div className="flex items-center justify-center mb-4 gap-2">
            <Calendar className="w-7 h-7 text-primary" />
            <span className="font-bold text-2xl text-gray-800">Upcoming Event</span>
          </div>
          <h2 className="text-xl font-semibold mb-2 text-primary">NexusConnect 2025: Customer Success Summit</h2>
          <p className="mb-5 text-sm md:text-base text-gray-700">
            Join us for a day of inspiration and innovation with industry leaders.<br />
            Discover new trends, network, and unlock the future of customer success.<br />
            August 30, 2025 • 10:00 AM UTC
          </p>
          <div className="flex justify-center gap-2 mb-6">
            <CountdownBlock value={remaining.days} label="Days" />
            <CountdownBlock value={remaining.hours} label="Hrs" />
            <CountdownBlock value={remaining.minutes} label="Min" />
            <CountdownBlock value={remaining.seconds} label="Sec" />
          </div>
          <a
            href="https://nexusconnect2025.example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-primary to-secondary text-white font-bold py-2 px-5 rounded-full shadow hover:scale-105 transition-all"
          >
            Learn More
          </a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Helper component for single timer block
function CountdownBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center mx-1 min-w-[48px]">
      <div className="bg-white/80 rounded-lg px-3 py-1.5 mb-1 text-lg md:text-2xl font-bold text-gray-900 shadow">
        {String(value).padStart(2, "0")}
      </div>
      <span className="text-[0.72rem] text-gray-500 font-medium uppercase tracking-wide">{label}</span>
    </div>
  );
}

export default EventPopup;
