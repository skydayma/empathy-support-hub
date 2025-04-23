
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Server, CreditCard, User, ShieldCheck, Search } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Category {
  id: string;
  title: string;
  icon: React.ReactNode;
  articles: Article[];
}

interface Article {
  id: string;
  title: string;
  excerpt: string;
}

const KnowledgeBase = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories: Category[] = [
    {
      id: 'account',
      title: 'Account Management',
      icon: <User className="h-5 w-5 text-primary" />,
      articles: [
        {
          id: 'a1',
          title: 'How to change your password',
          excerpt: 'Learn the steps to securely change your account password.'
        },
        {
          id: 'a2',
          title: 'Managing profile information',
          excerpt: 'Update your personal information and notification preferences.'
        },
        {
          id: 'a3',
          title: 'Deleting your account',
          excerpt: 'Steps to permanently delete your account and associated data.'
        }
      ]
    },
    {
      id: 'billing',
      title: 'Billing & Subscriptions',
      icon: <CreditCard className="h-5 w-5 text-primary" />,
      articles: [
        {
          id: 'b1',
          title: 'Understanding your invoice',
          excerpt: 'A guide to reading and interpreting your monthly billing statement.'
        },
        {
          id: 'b2',
          title: 'Updating payment methods',
          excerpt: 'How to add, remove, or update your payment information.'
        },
        {
          id: 'b3',
          title: 'Subscription plan comparison',
          excerpt: 'Compare features across different subscription tiers.'
        }
      ]
    },
    {
      id: 'technical',
      title: 'Technical Issues',
      icon: <Server className="h-5 w-5 text-primary" />,
      articles: [
        {
          id: 't1',
          title: 'Common error messages explained',
          excerpt: 'Solutions for frequently encountered error codes and messages.'
        },
        {
          id: 't2',
          title: 'Browser compatibility',
          excerpt: 'Supported browsers and troubleshooting display issues.'
        },
        {
          id: 't3',
          title: 'API connection issues',
          excerpt: 'Resolving common API connection and authentication problems.'
        }
      ]
    },
    {
      id: 'security',
      title: 'Security',
      icon: <ShieldCheck className="h-5 w-5 text-primary" />,
      articles: [
        {
          id: 's1',
          title: 'Two-factor authentication setup',
          excerpt: 'How to enable and configure two-factor authentication.'
        },
        {
          id: 's2',
          title: 'Security best practices',
          excerpt: 'Recommendations for keeping your account secure.'
        },
        {
          id: 's3',
          title: 'Reporting security concerns',
          excerpt: 'Steps to report potential security vulnerabilities.'
        }
      ]
    }
  ];

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-primary dark:text-white">Browse by Category</h3>
        <div className="relative">
          <Search className="h-4 w-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground dark:text-gray-400" />
          <input 
            type="text" 
            placeholder="Search articles..." 
            className="pl-8 py-1 pr-2 text-sm border border-gray-200 dark:border-gray-700 rounded-md bg-transparent w-[180px] focus:outline-none focus:border-primary dark:focus:border-blue-500"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {categories.map((category) => (
          <motion.div
            key={category.id}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleCategoryClick(category.id)}
            className={`p-3 rounded-lg flex flex-col items-center text-center cursor-pointer transition-all ${
              selectedCategory === category.id 
                ? 'bg-primary text-white' 
                : 'bg-gray-50 dark:bg-gray-800 hover:bg-primary/10 dark:hover:bg-primary/20'
            }`}
          >
            <div className={`p-2 rounded-full mb-2 ${
              selectedCategory === category.id 
                ? 'bg-white/20' 
                : 'bg-primary/10 dark:bg-primary/20'
            }`}>
              {category.icon}
            </div>
            <span className={`text-xs font-medium ${
              selectedCategory === category.id 
                ? 'text-white' 
                : 'text-primary dark:text-blue-400'
            }`}>
              {category.title}
            </span>
          </motion.div>
        ))}
      </div>

      <Accordion type="single" collapsible className="w-full">
        {categories
          .filter(c => selectedCategory ? c.id === selectedCategory : true)
          .map((category) => (
            <div key={category.id}>
              <h4 className="text-sm font-semibold mt-4 mb-2 text-primary dark:text-blue-400">
                {category.title}
              </h4>
              {category.articles.map((article) => (
                <AccordionItem key={article.id} value={article.id} className="border-b border-gray-100 dark:border-gray-700">
                  <AccordionTrigger className="hover:no-underline py-3">
                    <span className="text-sm font-medium dark:text-gray-200">{article.title}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground dark:text-gray-400">
                    <p className="mb-3">{article.excerpt}</p>
                    <button className="text-secondary hover:text-primary transition-colors text-xs font-medium underline-offset-4 hover:underline">
                      Read full article
                    </button>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </div>
          ))
        }
      </Accordion>
    </div>
  );
};

export default KnowledgeBase;
