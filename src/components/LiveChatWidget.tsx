
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, ChevronRight, Send, User } from 'lucide-react';

const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{
    id: number;
    content: string;
    sender: 'user' | 'bot';
    timestamp: Date;
  }[]>([
    {
      id: 1,
      content: 'Hello! How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Add user message
      const userMessage = {
        id: messages.length + 1,
        content: newMessage,
        sender: 'user' as const,
        timestamp: new Date()
      };
      
      setMessages([...messages, userMessage]);
      setNewMessage('');
      
      // Simulate bot response after a short delay
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          content: "Thank you for your message. A support agent will respond shortly. In the meantime, you might find answers in our knowledge base.",
          sender: 'bot' as const,
          timestamp: new Date()
        };
        
        setMessages(prevMessages => [...prevMessages, botResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 bg-secondary w-14 h-14 rounded-full shadow-lg flex items-center justify-center"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageSquare className="h-6 w-6 text-white" />
        )}
      </motion.button>

      {/* Chat widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-[350px] h-[500px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-gray-200 dark:border-gray-700"
          >
            {/* Header */}
            <div className="bg-primary p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">Live Support</h3>
                    <p className="text-xs opacity-90">We typically reply in a few minutes</p>
                  </div>
                </div>
                <button onClick={toggleChat}>
                  <X className="h-5 w-5 hover:opacity-80" />
                </button>
              </div>
            </div>
            
            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.sender === 'user'
                      ? 'bg-primary text-white rounded-tr-none'
                      : 'bg-gray-100 dark:bg-gray-700 text-foreground dark:text-white rounded-tl-none'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                    <p className="text-xs mt-1 opacity-70">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Message input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center">
                <textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-200 dark:border-gray-600 rounded-l-lg py-2 px-3 outline-none resize-none h-10 min-h-[40px] max-h-[120px] bg-transparent text-sm dark:text-white"
                ></textarea>
                <button
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim()}
                  className={`h-10 px-4 rounded-r-lg flex items-center justify-center ${
                    newMessage.trim()
                      ? 'bg-secondary text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500'
                  }`}
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
              
              <div className="mt-3 text-xs text-center text-muted-foreground dark:text-gray-400">
                <button className="text-primary dark:text-blue-400 hover:underline mr-3">
                  Switch to human agent
                </button>
                <button className="text-primary dark:text-blue-400 hover:underline">
                  End chat
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LiveChatWidget;
