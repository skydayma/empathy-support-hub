
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, AlertTriangle, InfoIcon, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

interface Announcement {
  id: number;
  title: string;
  content: string;
  type: 'success' | 'info' | 'warning';
  date: string;
}

const AnnouncementCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const announcements: Announcement[] = [
    {
      id: 1,
      title: 'System Maintenance',
      content: 'Scheduled maintenance on July 15th from 2-4 AM EST. Brief service interruptions may occur.',
      type: 'info',
      date: '1 day ago'
    },
    {
      id: 2,
      title: 'New Feature Released',
      content: 'Our new dashboard analytics tools are now available to all users!',
      type: 'success',
      date: '3 days ago'
    },
    {
      id: 3,
      title: 'Service Disruption',
      content: 'We are currently investigating reports of slow response times in the European region.',
      type: 'warning',
      date: '5 hours ago'
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      default:
        return <InfoIcon className="h-5 w-5 text-blue-500" />;
    }
  };

  const getBackgroundColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800';
      case 'warning':
        return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800';
      default:
        return 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800';
    }
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + announcements.length) % announcements.length);
  };

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden relative">
      <div className="flex items-center h-12 px-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <Bell className="h-5 w-5 text-primary dark:text-blue-400 mr-2" />
        <h3 className="text-sm font-medium text-primary dark:text-blue-400">Important Announcements</h3>
      </div>

      <div className="relative h-24 overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className={`absolute inset-0 p-4 ${getBackgroundColor(announcements[currentIndex].type)}`}
          >
            <div className="flex items-start">
              <div className="mt-1 mr-3">
                {getIcon(announcements[currentIndex].type)}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h4 className="text-sm font-semibold dark:text-white">
                    {announcements[currentIndex].title}
                  </h4>
                  <span className="text-xs text-muted-foreground dark:text-gray-400">
                    {announcements[currentIndex].date}
                  </span>
                </div>
                <p className="text-xs mt-1 text-muted-foreground dark:text-gray-400">
                  {announcements[currentIndex].content}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation dots */}
        <div className="absolute bottom-2 right-4 flex space-x-1">
          {announcements.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-primary'
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
              aria-label={`Go to announcement ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 p-1 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-sm hover:bg-white dark:hover:bg-gray-700"
          onClick={prevSlide}
          aria-label="Previous announcement"
        >
          <ChevronLeft className="h-4 w-4 text-primary dark:text-blue-400" />
        </button>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-sm hover:bg-white dark:hover:bg-gray-700"
          onClick={nextSlide}
          aria-label="Next announcement"
        >
          <ChevronRight className="h-4 w-4 text-primary dark:text-blue-400" />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementCarousel;
