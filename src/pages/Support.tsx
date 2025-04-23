
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageSquare, Mail, HelpCircle, CheckCircle, Search, 
  Book, FileText, User, Bell, Phone, Instagram, 
  Twitter, Facebook, Linkedin, Clock, Calendar,
  ChevronDown, Sun, Moon, FileUp, Plus
} from "lucide-react";
import Layout from "@/components/Layout";
import FormField from "@/components/FormField";
import MotionButton from "@/components/MotionButton";
import SmartSearch from "@/components/SmartSearch";
import KnowledgeBase from "@/components/KnowledgeBase";
import LiveChatWidget from "@/components/LiveChatWidget";
import AnnouncementCarousel from "@/components/AnnouncementCarousel";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import CustomerDashboard from "@/components/CustomerDashboard";

// Form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  category: z.string().min(1, { message: "Please select a category" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  priority: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const Support = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const { toast } = useToast();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  // Form setup
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema)
  });

  // Contact options
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

  // Recent tickets (mock data)
  const recentTickets = [
    {
      id: "T-2305",
      title: "Login Authentication Issue",
      status: "In Progress",
      date: "2 days ago"
    },
    {
      id: "T-2304",
      title: "Payment Processing Error",
      status: "Resolved",
      date: "3 days ago"
    },
    {
      id: "T-2303",
      title: "Account Activation Problem",
      status: "Pending",
      date: "5 days ago"
    }
  ];

  const personalized = [
    {
      title: "How to reset your password",
      category: "Account",
      views: 1203
    },
    {
      title: "Troubleshooting payment failures",
      category: "Billing",
      views: 876
    },
    {
      title: "Setting up two-factor authentication",
      category: "Security",
      views: 541
    }
  ];

  const onSubmit = async (data: FormValues) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Support request submitted!",
      description: "We've received your message and will respond soon.",
    });
    
    setIsSubmitted(true);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleDashboard = () => {
    setShowDashboard(!showDashboard);
  };

  // Business hours
  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 8:00 PM EST" },
    { day: "Saturday", hours: "9:00 AM - 5:00 PM EST" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <Layout>
      {/* Toggle Dark/Light Mode */}
      <div className="fixed top-20 right-5 z-50">
        <button 
          onClick={toggleDarkMode} 
          className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          {isDarkMode ? <Sun className="text-yellow-500" /> : <Moon className="text-primary" />}
        </button>
      </div>
      
      {/* Live Chat Widget */}
      <LiveChatWidget />
      
      {/* Intro Section with Gradient Background */}
      <section
        className="relative overflow-hidden py-16 lg:py-20 px-2 lg:px-0 min-h-[340px] flex flex-col justify-center"
        style={{
          background: "linear-gradient(135deg, #003296 0%, #06C286 100%)"
        }}
      >
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
            
            {/* Smart Search */}
            <SmartSearch />
          </motion.div>
          
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&w=520&q=80"
              alt="AI illustration"
              className="h-52 w-full max-w-xs object-cover rounded-2xl shadow-xl border-4 border-white/80"
            />
          </motion.div>
        </div>
        
        {/* Gradient shadow effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,80,200,0.13),rgba(6,194,134,0.10))"
          }}
        />
      </section>

      {/* Announcements Carousel */}
      <div className="container mx-auto mt-6">
        <AnnouncementCarousel />
      </div>

      {/* Customer Dashboard / Support Form Section */}
      <div className="container mx-auto px-2 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {showDashboard ? (
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl shadow-xl bg-white/90 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 relative z-0 backdrop-blur-lg"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-primary dark:text-white">Customer Dashboard</h2>
                <MotionButton
                  onClick={toggleDashboard}
                  variant="outline"
                  size="sm"
                >
                  Switch to Contact Form
                </MotionButton>
              </div>
              
              <CustomerDashboard />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="rounded-2xl shadow-xl bg-white/90 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 relative z-0 backdrop-blur-lg"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-primary dark:text-white">Contact Support</h2>
                <MotionButton
                  onClick={toggleDashboard}
                  variant="outline"
                  size="sm"
                >
                  View Dashboard
                </MotionButton>
              </div>
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="bg-green-50 dark:bg-green-900/30 rounded-lg p-6 text-center"
                  >
                    <div className="flex justify-center mb-4">
                      <CheckCircle className="h-16 w-16 text-secondary animate-pulse" />
                    </div>
                    <h3 className="text-xl font-medium text-green-800 dark:text-green-300 mb-2">Message Sent Successfully</h3>
                    <p className="text-green-600 dark:text-green-400">We'll get back to you as soon as possible.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        id="name"
                        label="Name"
                        type="text"
                        placeholder="Your name"
                        register={register("name")}
                        error={errors.name?.message}
                      />

                      <FormField
                        id="email"
                        label="Email"
                        type="email"
                        placeholder="your.email@example.com"
                        register={register("email")}
                        error={errors.email?.message}
                      />
                    </motion.div>

                    <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        id="category"
                        label="Issue Category"
                        type="select"
                        register={register("category")}
                        error={errors.category?.message}
                      >
                        <option value="" disabled>Select a category</option>
                        <option value="technical">Technical Support</option>
                        <option value="billing">Billing</option>
                        <option value="account">Account</option>
                        <option value="feature">Feature Request</option>
                        <option value="other">Other</option>
                      </FormField>

                      <FormField
                        id="priority"
                        label="Priority"
                        type="select"
                        register={register("priority")}
                        error={errors.priority?.message}
                      >
                        <option value="" disabled>Select priority</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="critical">Critical</option>
                      </FormField>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <FormField
                        id="message"
                        label="Message"
                        type="textarea"
                        placeholder="Please describe your issue in detail"
                        register={register("message")}
                        error={errors.message?.message}
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <div className="flex items-center justify-between mb-4 p-4 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
                        <div className="flex items-center gap-2">
                          <FileUp className="h-5 w-5 text-primary" />
                          <span className="text-sm text-muted-foreground">Attach files (optional)</span>
                        </div>
                        <button type="button" className="text-sm text-secondary hover:underline">
                          Browse files
                        </button>
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <MotionButton
                        type="submit"
                        disabled={isSubmitting}
                        isLoading={isSubmitting}
                        variant="primary"
                        size="lg"
                        className="w-full bg-primary text-white hover:bg-secondary hover:text-primary transition-all"
                      >
                        Submit Support Request
                      </MotionButton>
                    </motion.div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Contact Options & Knowledge Base */}
          <div className="space-y-8 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.17 }}
            >
              <h2 className="text-2xl font-bold mb-5 text-primary dark:text-white">
                Contact Options
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {contactOptions.map((option, index) => (
                  <motion.div
                    key={option.title}
                    className="bg-gradient-to-br from-white via-blue-50 to-green-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-md border hover:shadow-xl transition-all group border-gray-100 dark:border-gray-700 hover:border-primary/40 dark:hover:border-secondary/40 cursor-pointer"
                    whileHover={{
                      y: -6,
                      scale: 1.04,
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
                      <div className="p-3 mb-3 rounded-full bg-primary/10 ring-2 ring-secondary">
                        <div>{option.icon}</div>
                      </div>
                      <h3 className="font-bold mb-1 text-primary dark:text-white">{option.title}</h3>
                      <p className="text-muted-foreground text-xs mb-4 dark:text-gray-400">{option.description}</p>
                      <button className="text-secondary underline underline-offset-2 hover:text-primary transition text-sm font-medium">
                        {option.action}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Knowledge Base Section */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.33 }}
              className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-lg p-8 transition-all hover:shadow-2xl"
            >
              <h2 className="text-xl font-bold mb-6 text-primary dark:text-white flex items-center gap-2">
                <Book className="h-5 w-5" /> Knowledge Base
              </h2>
              
              <KnowledgeBase />
            </motion.div>

            {/* Personalized Help Section */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.33 }}
              className="bg-gradient-to-br from-accent to-white dark:from-gray-800 dark:to-gray-900 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-lg p-8 transition-all"
            >
              <h2 className="text-xl font-bold mb-4 text-primary dark:text-white flex items-center">
                <HelpCircle className="h-5 w-5 mr-2" /> Recommended for You
              </h2>
              
              <div className="space-y-3 mt-4">
                {personalized.map((article, index) => (
                  <motion.div
                    key={article.title}
                    className="p-4 bg-white/80 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 rounded-lg hover:bg-accent/30 dark:hover:bg-gray-700/50 transition-colors group cursor-pointer"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.39 + (index * 0.08), duration: 0.25 }
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium group-hover:text-primary transition-colors dark:text-gray-200">
                          {article.title}
                        </h4>
                        <div className="flex items-center text-xs mt-1">
                          <span className="px-2 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-300 mr-2">
                            {article.category}
                          </span>
                          <span className="text-muted-foreground dark:text-gray-400">
                            {article.views} views
                          </span>
                        </div>
                      </div>
                      <ChevronDown className="h-4 w-4 text-muted-foreground dark:text-gray-400 group-hover:text-primary dark:group-hover:text-white transition-transform group-hover:-rotate-90" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Section with Business Hours */}
      <section className="bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 py-12 mt-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center text-primary dark:text-white">Get in Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Methods */}
            <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4 text-primary dark:text-white">Contact Methods</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-primary/10 mr-3">
                      <Phone className="h-5 w-5 text-primary dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium dark:text-gray-200">+1 (800) 123-4567</p>
                      <p className="text-xs text-muted-foreground dark:text-gray-400">Toll-free support line</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-primary/10 mr-3">
                      <Mail className="h-5 w-5 text-primary dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium dark:text-gray-200">support@nexussupport.com</p>
                      <p className="text-xs text-muted-foreground dark:text-gray-400">24/7 email support</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 mt-6 justify-center">
                    <motion.button whileHover={{ scale: 1.1 }} className="p-2 bg-primary/10 hover:bg-primary/20 rounded-full">
                      <Twitter className="h-5 w-5 text-primary dark:text-blue-400" />
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} className="p-2 bg-primary/10 hover:bg-primary/20 rounded-full">
                      <Facebook className="h-5 w-5 text-primary dark:text-blue-400" />
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} className="p-2 bg-primary/10 hover:bg-primary/20 rounded-full">
                      <Instagram className="h-5 w-5 text-primary dark:text-blue-400" />
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} className="p-2 bg-primary/10 hover:bg-primary/20 rounded-full">
                      <Linkedin className="h-5 w-5 text-primary dark:text-blue-400" />
                    </motion.button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Business Hours */}
            <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center text-primary dark:text-white">
                  <Clock className="h-5 w-5 mr-2" /> Business Hours
                </h3>
                
                <div className="space-y-3">
                  {businessHours.map((item) => (
                    <div key={item.day} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                      <span className="font-medium text-sm dark:text-gray-300">{item.day}</span>
                      <span className="text-muted-foreground text-sm dark:text-gray-400">{item.hours}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                  <p className="text-xs text-center text-green-800 dark:text-green-400">
                    Average response time: <span className="font-bold">2-4 hours</span>
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Office Location */}
            <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4 text-primary dark:text-white">Main Office</h3>
                
                <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg mb-4 overflow-hidden">
                  {/* This would be a map in a real application */}
                  <div className="h-full w-full flex items-center justify-center bg-gradient-to-r from-primary/20 to-secondary/20">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Interactive Map</p>
                  </div>
                </div>
                
                <p className="text-sm dark:text-gray-300">
                  123 Innovation Drive<br />
                  Tech Valley, CA 94103<br />
                  United States
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer with links */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-6 mt-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors">
              <span className="flex items-center"><FileText className="h-4 w-4 mr-1" /> Privacy Policy</span>
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors">
              <span className="flex items-center"><FileText className="h-4 w-4 mr-1" /> Terms of Service</span>
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors">
              <span className="flex items-center"><HelpCircle className="h-4 w-4 mr-1" /> Help Center</span>
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors">
              <span className="flex items-center"><User className="h-4 w-4 mr-1" /> Accessibility</span>
            </a>
          </div>
        </div>
      </footer>
    </Layout>
  );
};

export default Support;
