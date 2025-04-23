
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Mail, HelpCircle, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import FormField from "@/components/FormField";
import MotionButton from "@/components/MotionButton";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  category: z.string().min(1, { message: "Please select a category" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const Support = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
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
      icon: <MessageCircle className="h-6 w-6" />,
      action: "Start Chat"
    },
    {
      title: "Email Support",
      description: "Send us a detailed message",
      icon: <Mail className="h-6 w-6" />,
      action: "Email Us"
    },
    {
      title: "FAQs",
      description: "Find quick answers to common questions",
      icon: <HelpCircle className="h-6 w-6" />,
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

  const onSubmit = async (data: FormValues) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <Layout>
      {/* Intro Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">We're Here to Help</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Our expert support team is always ready to assist you with any questions or concerns you might have.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Support Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8 border border-muted"
          >
            <h2 className="text-2xl font-semibold mb-6">Contact Support</h2>
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="bg-green-50 rounded-lg p-6 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <CheckCircle className="h-16 w-16 text-green-500" />
                  </div>
                  <h3 className="text-xl font-medium text-green-800 mb-2">Message Sent Successfully</h3>
                  <p className="text-green-600">We'll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={itemVariants}>
                    <FormField
                      id="name"
                      label="Name"
                      type="text"
                      placeholder="Your name"
                      register={register("name")}
                      error={errors.name?.message}
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <FormField
                      id="email"
                      label="Email"
                      type="email"
                      placeholder="your.email@example.com"
                      register={register("email")}
                      error={errors.email?.message}
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <FormField
                      id="category"
                      label="Issue Category"
                      type="select"
                      register={register("category")}
                      error={errors.category?.message}
                    >
                      <option value="" disabled>
                        Select a category
                      </option>
                      <option value="technical">Technical Support</option>
                      <option value="billing">Billing</option>
                      <option value="account">Account</option>
                      <option value="feature">Feature Request</option>
                      <option value="other">Other</option>
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
                    <MotionButton
                      type="submit"
                      disabled={isSubmitting}
                      isLoading={isSubmitting}
                      variant="primary"
                      size="lg"
                      className="w-full"
                    >
                      Submit Support Request
                    </MotionButton>
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Options */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold mb-6">Contact Options</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {contactOptions.map((option, index) => (
                  <motion.div
                    key={option.title}
                    className="bg-white p-6 rounded-lg shadow-md border border-muted hover:border-primary/20 hover:shadow-lg transition-all"
                    whileHover={{ 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.2 + (index * 0.1), duration: 0.5 }
                    }}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="p-3 rounded-full bg-primary/10 mb-4">
                        <div className="text-primary">
                          {option.icon}
                        </div>
                      </div>
                      <h3 className="font-medium mb-2">{option.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{option.description}</p>
                      <button className="text-primary hover:text-primary/80 font-medium text-sm">
                        {option.action}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Recent Tickets Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-8 border border-muted"
            >
              <h2 className="text-xl font-semibold mb-4">Recent Support Tickets</h2>
              <div className="space-y-3">
                {recentTickets.map((ticket, index) => (
                  <motion.div
                    key={ticket.id}
                    className="p-4 border border-muted rounded-lg hover:bg-muted/20 transition-colors group cursor-pointer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: 0.7 + (index * 0.1), duration: 0.3 } 
                    }}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="flex items-center">
                          <span className="text-sm font-medium text-muted-foreground mr-2">
                            {ticket.id}
                          </span>
                          <h4 className="font-medium group-hover:text-primary transition-colors">
                            {ticket.title}
                          </h4>
                        </div>
                        <span className="text-xs text-muted-foreground">{ticket.date}</span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium
                        ${ticket.status === 'Resolved' ? 'bg-green-100 text-green-800' : ''}
                        ${ticket.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : ''}
                        ${ticket.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : ''}
                      `}>
                        {ticket.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Support;
