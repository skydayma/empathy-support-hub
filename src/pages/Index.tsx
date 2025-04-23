import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  MessageSquare,
  BookOpen,
  HelpCircle,
  Users,
  Star,
  CheckCircle,
  Heart,
  Award,
  Twitter,
  Github,
  Linkedin,
  Youtube
} from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useState } from "react";
import EventPopup from "./support/EventPopup";

const testimonials = [
  {
    quote: "NexusSupport resolved my issue in under 2 minutes—amazing experience!",
    name: "Jane D.",
    title: "Project Manager"
  },
  {
    quote: "Truly 24/7 support. The live chat team made deployment smooth and easy.",
    name: "Michael S.",
    title: "Startup Founder"
  },
  {
    quote: "The knowledge base is so comprehensive, I rarely have to open a ticket.",
    name: "Chris L.",
    title: "IT Director"
  }
];

const Index = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const nextTestimonial = () =>
    setTestimonialIdx((idx) => (idx + 1) % testimonials.length);
  const prevTestimonial = () =>
    setTestimonialIdx((idx) =>
      idx === 0 ? testimonials.length - 1 : idx - 1
    );

  const products = [
    {
      title: "AI-Powered Support",
      description: "Instant solutions through advanced machine learning",
      icon: <HelpCircle className="h-10 w-10 text-primary" />,
      badgeColor: "from-indigo-100 to-indigo-50"
    },
    {
      title: "Knowledge Base",
      description: "Comprehensive guides and documentation",
      icon: <BookOpen className="h-10 w-10 text-accent" />,
      badgeColor: "from-blue-100 to-blue-50"
    },
    {
      title: "Live Chat",
      description: "Connect with our team in real-time",
      icon: <MessageSquare className="h-10 w-10 text-secondary" />,
      badgeColor: "from-green-100 to-green-50"
    },
    {
      title: "Priority Support",
      description: "Dedicated assistance for enterprise clients",
      icon: <Mail className="h-10 w-10 text-primary" />,
      badgeColor: "from-pink-100 to-pink-50"
    }
  ];

  const stats = [
    {
      label: "Customers Helped",
      value: "10,000+",
      icon: <Users className="h-7 w-7 text-primary" />
    },
    {
      label: "Avg. Rating",
      value: "4.9/5",
      icon: <Star className="h-7 w-7 text-yellow-400 fill-yellow-400" />
    },
    {
      label: "Resolution Rate",
      value: "99%",
      icon: <CheckCircle className="h-7 w-7 text-green-500" />
    },
    {
      label: "Awards Won",
      value: "Best SaaS 2025",
      icon: <Award className="h-7 w-7 text-pink-400" />
    }
  ];

  return (
    <Layout>
      <EventPopup />
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-100 overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 top-8">
          <span className="bg-gradient-to-r from-primary to-secondary text-white px-5 py-2 rounded-full shadow-lg font-semibold text-sm tracking-wide animate-pulse-slow">
            🎉 Meet the new NexusSupport!
          </span>
        </div>
        <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Welcome to <span className="font-bold text-gradient">NexusSupport</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-7"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Building Trust, One Solution at a Time.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link 
                to="/support" 
                className="group inline-flex items-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-semibold"
              >
                Contact Support
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative flex justify-center">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary via-accent to-secondary blur-xl opacity-30 animate-pulse-slow"></div>
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80"
                alt="Customer Service Support Team"
                className="relative rounded-xl shadow-xl w-full max-w-lg object-cover hover:scale-[1.03] transition-transform duration-700 border-4 border-white"
              />
            </div>
          </motion.div>
        </div>
        <div className="container mx-auto px-4 pb-10">
          <div className="mt-2 flex flex-wrap justify-center gap-6 md:gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex items-center gap-2 bg-white/90 rounded-lg px-4 py-3 shadow hover:shadow-md transition-all border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * i, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span>{stat.icon}</span>
                <span className="text-lg font-bold">{stat.value}</span>
                <span className="text-sm text-gray-500">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Support Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the tools and services designed to provide you with the smoothest support experience.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-muted hover:border-primary/20 group bg-gradient-to-br ${product.badgeColor} hover:scale-105`}
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div 
                    className="mb-4 p-3 bg-primary/10 rounded-full"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "rgba(99, 102, 241, 0.1)" 
                    }}
                  >
                    {product.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  <Link 
                    to="/support" 
                    className="text-primary hover:text-primary/80 inline-flex items-center font-medium"
                  >
                    Learn More 
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-white via-blue-50 to-purple-50 py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Heart className="mx-auto h-8 w-8 text-pink-400 mb-2 animate-pulse" />
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Loved by our users</h2>
            <p className="text-muted-foreground">
              Real stories from people building with NexusSupport.
            </p>
          </motion.div>
          <div className="relative flex items-center">
            <button
              onClick={prevTestimonial}
              className="absolute left-0 z-10 p-2 bg-white rounded-full shadow hover:bg-primary hover:text-white transition-all"
              aria-label="Previous testimonial"
            >
              <ArrowRight className="rotate-180 w-5 h-5" />
            </button>
            <motion.div
              key={testimonialIdx}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.43 }}
              className="mx-auto px-4 py-8 bg-white rounded-xl shadow-lg border border-gray-200 w-full"
              style={{ minHeight: 160 }}
            >
              <p className="md:text-lg font-medium text-gray-700 mb-4">
                “{testimonials[testimonialIdx].quote}”
              </p>
              <div>
                <span className="font-bold text-primary">{testimonials[testimonialIdx].name}</span>
                <span className="ml-1 text-sm text-gray-500">· {testimonials[testimonialIdx].title}</span>
              </div>
            </motion.div>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 z-10 p-2 bg-white rounded-full shadow hover:bg-primary hover:text-white transition-all"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-t border-gray-200">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">About Us</h3>
              <p className="text-muted-foreground">
                NexusSupport helps businesses deliver exceptional customer support with AI-powered solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Products</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Live Chat</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Knowledge Base</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Help Desk</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">API</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Tutorials</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Community</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">GDPR</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-center text-muted-foreground">
              © {new Date().getFullYear()} NexusSupport. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </Layout>
  );
};

export default Index;
