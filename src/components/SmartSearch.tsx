
import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchResult {
  id: string;
  title: string;
  category: string;
}

const SmartSearch = () => {
  const [query, setQuery] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  // Sample search data (in a real app, this would come from an API)
  const sampleData: SearchResult[] = [
    { id: '1', title: 'How to reset your password', category: 'Account' },
    { id: '2', title: 'Updating payment methods', category: 'Billing' },
    { id: '3', title: 'Cancel subscription', category: 'Billing' },
    { id: '4', title: 'Troubleshooting login issues', category: 'Technical' },
    { id: '5', title: 'Setting up two-factor authentication', category: 'Security' },
    { id: '6', title: 'Managing team access', category: 'Teams' },
  ];

  // Filter results based on query
  useEffect(() => {
    if (query.length > 1) {
      const filtered = sampleData.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsActive(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Clear search
  const clearSearch = () => {
    setQuery('');
    setResults([]);
  };

  return (
    <div ref={searchRef} className="relative z-10 max-w-lg w-full">
      <div className={`flex items-center bg-white dark:bg-gray-800 rounded-lg px-3 py-2 border-2 transition-all duration-300 ${
        isActive ? 'border-secondary shadow-lg' : 'border-white dark:border-gray-700'
      }`}>
        <Search className="h-5 w-5 text-muted-foreground dark:text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsActive(true)}
          placeholder="Search our knowledge base..."
          className="flex-1 ml-2 bg-transparent outline-none text-foreground dark:text-white placeholder:text-muted-foreground dark:placeholder:text-gray-400"
        />
        <AnimatePresence>
          {query && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={clearSearch}
              className="text-muted-foreground hover:text-primary"
            >
              <X className="h-5 w-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isActive && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <div className="p-2 max-h-80 overflow-y-auto">
              {results.map((result) => (
                <motion.div
                  key={result.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  whileHover={{ backgroundColor: 'rgba(0,0,0,0.05)' }}
                  className="px-3 py-2 rounded-md cursor-pointer"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground dark:text-white">{result.title}</p>
                      <span className="text-xs text-muted-foreground dark:text-gray-400">{result.category}</span>
                    </div>
                    <span className="text-xs bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-300 px-2 py-1 rounded-full">
                      Article
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 p-2 text-center">
              <button className="text-xs text-primary dark:text-blue-400 hover:underline">
                View all {results.length} results
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SmartSearch;
