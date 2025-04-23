
import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageSquare, BookOpen, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Index = () => {
  // Animation variants
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

  const products = [
    {
      title: "AI-Powered Support",
      description: "Instant solutions through advanced machine learning",
      icon: <HelpCircle className="h-10 w-10 text-primary" />,
      delay: 0.2
    },
    {
      title: "Knowledge Base",
      description: "Comprehensive guides and documentation",
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      delay: 0.3
    },
    {
      title: "Live Chat",
      description: "Connect with our team in real-time",
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      delay: 0.4
    },
    {
      title: "Priority Support",
      description: "Dedicated assistance for enterprise clients",
      icon: <Mail className="h-10 w-10 text-primary" />,
      delay: 0.5
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0 md:pr-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Welcome to NexusSupport
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Building Trust, One Solution at a Time
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link 
                to="/support" 
                className="group inline-flex items-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
              >
                Contact Support
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary via-accent to-secondary blur-xl opacity-30 animate-pulse-slow"></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                alt="AI Support Illustration" 
                className="relative rounded-lg shadow-xl w-full object-cover hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
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
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-muted hover:border-primary/20 group"
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div 
                    className="mb-4 p-3 bg-primary/5 rounded-full"
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
    </Layout>
  );
};

export default Index;
