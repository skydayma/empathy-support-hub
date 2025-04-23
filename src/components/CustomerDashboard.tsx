
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, Tag, CheckCircle, AlertCircle, XCircle, 
  ChevronRight, FileText, MessageSquare, RefreshCw,
  BarChart
} from 'lucide-react';

interface Ticket {
  id: string;
  title: string;
  status: 'Open' | 'In Progress' | 'Resolved' | 'Closed';
  date: string;
  lastUpdate?: string;
  category: string;
}

const CustomerDashboard = () => {
  const [activeTab, setActiveTab] = useState('active');
  
  const tickets: Ticket[] = [
    {
      id: 'T-3001',
      title: 'Unable to access account settings',
      status: 'In Progress',
      date: '2 days ago',
      lastUpdate: '4 hours ago',
      category: 'Account'
    },
    {
      id: 'T-2999',
      title: 'Integration with third-party API failing',
      status: 'Open',
      date: '3 days ago',
      category: 'Technical'
    },
    {
      id: 'T-2995',
      title: 'Billing cycle question',
      status: 'Resolved',
      date: '5 days ago',
      lastUpdate: '1 day ago',
      category: 'Billing'
    },
    {
      id: 'T-2950',
      title: 'Feature request: dark mode',
      status: 'Closed',
      date: '2 weeks ago',
      lastUpdate: '1 week ago',
      category: 'Feature Request'
    }
  ];
  
  const activeTickets = tickets.filter(ticket => ['Open', 'In Progress'].includes(ticket.status));
  const resolvedTickets = tickets.filter(ticket => ['Resolved', 'Closed'].includes(ticket.status));
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300';
      case 'Resolved':
        return 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300';
      case 'Closed':
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700/40 dark:text-gray-300';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700/40 dark:text-gray-300';
    }
  };
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Open':
        return <AlertCircle className="h-4 w-4" />;
      case 'In Progress':
        return <Clock className="h-4 w-4" />;
      case 'Resolved':
        return <CheckCircle className="h-4 w-4" />;
      case 'Closed':
        return <XCircle className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Stats Overview */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-primary dark:text-blue-300">Active Tickets</h4>
            <MessageSquare className="h-5 w-5 text-primary dark:text-blue-300" />
          </div>
          <p className="text-2xl font-bold mt-2 text-primary dark:text-white">{activeTickets.length}</p>
          <p className="text-xs text-muted-foreground dark:text-gray-400 mt-1">2 updates in the last 24h</p>
        </div>
        
        <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 dark:from-secondary/20 dark:to-secondary/10 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-secondary dark:text-green-300">Resolved This Week</h4>
            <CheckCircle className="h-5 w-5 text-secondary dark:text-green-300" />
          </div>
          <p className="text-2xl font-bold mt-2 text-secondary dark:text-white">{resolvedTickets.length}</p>
          <p className="text-xs text-muted-foreground dark:text-gray-400 mt-1">100% resolution rate</p>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="flex border-b border-gray-200 dark:border-gray-700 mb-4">
        <button
          className={`py-2 px-4 text-sm font-medium border-b-2 ${
            activeTab === 'active'
              ? 'border-primary text-primary dark:text-blue-300 dark:border-blue-400'
              : 'border-transparent text-muted-foreground dark:text-gray-400'
          } transition-colors`}
          onClick={() => setActiveTab('active')}
        >
          Active Tickets
        </button>
        <button
          className={`py-2 px-4 text-sm font-medium border-b-2 ${
            activeTab === 'resolved'
              ? 'border-primary text-primary dark:text-blue-300 dark:border-blue-400'
              : 'border-transparent text-muted-foreground dark:text-gray-400'
          } transition-colors`}
          onClick={() => setActiveTab('resolved')}
        >
          Resolved
        </button>
        <button
          className={`py-2 px-4 text-sm font-medium border-b-2 ${
            activeTab === 'all'
              ? 'border-primary text-primary dark:text-blue-300 dark:border-blue-400'
              : 'border-transparent text-muted-foreground dark:text-gray-400'
          } transition-colors`}
          onClick={() => setActiveTab('all')}
        >
          All Tickets
        </button>
      </div>
      
      {/* Ticket List */}
      <div className="space-y-3">
        {(activeTab === 'active' ? activeTickets : 
          activeTab === 'resolved' ? resolvedTickets : tickets)
          .map((ticket, index) => (
            <motion.div
              key={ticket.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="p-4 bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-muted-foreground dark:text-gray-400">{ticket.id}</span>
                    <span className={`px-2 py-0.5 text-xs font-medium rounded-full flex items-center gap-1 ${getStatusColor(ticket.status)}`}>
                      {getStatusIcon(ticket.status)}
                      {ticket.status}
                    </span>
                    <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-xs font-medium rounded-full text-gray-700 dark:text-gray-300 flex items-center gap-1">
                      <Tag className="h-3 w-3" />
                      {ticket.category}
                    </span>
                  </div>
                  <h4 className="font-medium dark:text-white">{ticket.title}</h4>
                  <div className="flex items-center mt-2 text-xs text-muted-foreground dark:text-gray-400">
                    <span className="flex items-center">
                      <FileText className="h-3 w-3 mr-1" /> Created {ticket.date}
                    </span>
                    {ticket.lastUpdate && (
                      <span className="flex items-center ml-3">
                        <RefreshCw className="h-3 w-3 mr-1" /> Updated {ticket.lastUpdate}
                      </span>
                    )}
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground dark:text-gray-400" />
              </div>
            </motion.div>
          ))
        }
        
        {/* If no tickets match the filter */}
        {(activeTab === 'active' ? activeTickets.length === 0 : 
          activeTab === 'resolved' ? resolvedTickets.length === 0 : tickets.length === 0) && (
          <div className="p-8 text-center text-muted-foreground dark:text-gray-400">
            <p>No tickets found</p>
          </div>
        )}
      </div>
      
      <div className="flex justify-between mt-6">
        <button className="text-xs text-primary dark:text-blue-400 hover:underline flex items-center">
          <BarChart className="h-3 w-3 mr-1" /> View statistics
        </button>
        <button className="text-xs text-secondary dark:text-green-400 hover:underline flex items-center">
          <RefreshCw className="h-3 w-3 mr-1" /> Refresh data
        </button>
      </div>
    </div>
  );
};

export default CustomerDashboard;
