
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Mail, HelpCircle, CheckCircle } from "lucide-react";
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

  const onSubmit = async (data: FormValues) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
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
      <section
        className="relative overflow-hidden py-20 px-2 lg:px-0 min-h-[340px] flex flex-col justify-center"
        style={{
          background: "linear-gradient(90deg, #003296 0%, #06C286 100%)"
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
              We’re Here to Help
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Our friendly support team is always ready to assist you. Get answers, solutions, or just a bit of guidance — we’re just one message away!
            </p>
          </motion.div>
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Attractive abstract AI/ML illustration */}
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

      <div className="container mx-auto px-2 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Support Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="rounded-2xl shadow-xl bg-white/90 border border-gray-200 p-8 relative z-0 backdrop-blur-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-primary">Contact Support</h2>
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
                    <CheckCircle className="h-16 w-16 text-secondary animate-pulse" />
                  </div>
                  <h3 className="text-xl font-medium text-green-800 mb-2">Message Sent Successfully</h3>
                  <p className="text-green-600">We'll get back to you as soon as possible.</p>
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
                      className="w-full bg-primary text-white hover:bg-secondary hover:text-primary transition-all"
                    >
                      Submit Support Request
                    </MotionButton>
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Options & Recent Tickets */}
          <div className="space-y-8 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.17 }}
            >
              <h2 className="text-2xl font-bold mb-5 text-primary">
                Contact Options
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {contactOptions.map((option, index) => (
                  <motion.div
                    key={option.title}
                    className="bg-gradient-to-br from-white via-blue-50 to-green-50 p-6 rounded-xl shadow-md border hover:shadow-xl transition-all group border-gray-100 hover:border-primary/40 cursor-pointer"
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
                      <h3 className="font-bold mb-1 text-primary">{option.title}</h3>
                      <p className="text-muted-foreground text-xs mb-4">{option.description}</p>
                      <button className="text-secondary underline underline-offset-2 hover:text-primary transition text-sm font-medium">
                        {option.action}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Recent Tickets Section */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.33 }}
              className="bg-white border border-gray-100 rounded-2xl shadow-lg p-8 transition-all hover:shadow-2xl"
            >
              <h2 className="text-xl font-bold mb-4 text-primary">Recent Support Tickets</h2>
              <div className="space-y-3">
                {recentTickets.map((ticket, index) => (
                  <motion.div
                    key={ticket.id}
                    className="p-4 border border-gray-100 rounded-lg hover:bg-accent/30 transition-colors group cursor-pointer"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.39 + (index * 0.08), duration: 0.25 }
                    }}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-muted-foreground">
                            {ticket.id}
                          </span>
                          <h4 className="font-medium group-hover:text-primary transition-colors">
                            {ticket.title}
                          </h4>
                        </div>
                        <span className="text-xs text-muted-foreground">{ticket.date}</span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold
                        ${ticket.status === 'Resolved' ? 'bg-green-100 text-secondary' : ''}
                        ${ticket.status === 'In Progress' ? 'bg-blue-100 text-primary' : ''}
                        ${ticket.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : ''}
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
