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
  Youtube,
  ShieldCheck,
  Activity,
  Cpu,
  Globe,
  Cloud,
  Settings,
  Calendar,
  UserCheck
} from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useState } from "react";
import EventPopup from "./support/EventPopup";

const testimonials = [
  {
    quote: "ContinuousIntelligence resolved my issue in under 2 minutes—amazing experience!",
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
        title: "Continuous Intelligent Validation(cIV)",
        description: "cIV simplifies and automates GxP-compliant software validation with cutting-edge AI.",
        icon: <HelpCircle className="h-10 w-10 text-primary" />,
        badgeColor: "from-indigo-200 to-indigo-100"  // Updated background color
      },
      {
        title: "Continuous Temperature Mapping (cTM)",
        description: "cTM monitors and analyzes environmental parameters in real-time - an innovative AI//ML powered app.",
        icon: <BookOpen className="h-10 w-10 text-primary" />,
        badgeColor: "from-blue-200 to-blue-100"  // Updated background color
      },
      {
        title: "Continuous Predictive Maintenance (cPdM)",
        description: "cPdM transforms preventive maintenance with AI/ML driven Predictive Maintenance.",
        icon: <MessageSquare className="h-10 w-10 text-secondary" />,
        badgeColor: "from-green-200 to-green-100"  // Updated background color
      },
      {
        title: "Continuous Environmental Monitoring System (cEMS)",
        description: "Continuous Environmental Monitoring System is an innovative platform i.e. set to transform the way environmental data is captured, analyzed, and utilized.",
        icon: <Mail className="h-10 w-10 text-primary" />,
        badgeColor: "from-pink-200 to-pink-100"  // Updated background color
      },
      {
        title: "Continuous Application Lifecycle Management (cALM)",
        description: "cALM is an innovative platform transforming software validation, qualification, and application lifecycle management for life sciences.",
        icon: <ShieldCheck className="h-10 w-10 text-primary" />,
        badgeColor: "from-indigo-300 to-indigo-200"  // Updated background color
      },
      {
        title: "Continuous Document Management (cDM)",
        description: "Equipped with cutting-edge AI technology, cDM is a premier Document Management solution tailored for life sciences organizations.",
        icon: <Activity className="h-10 w-10 text-primary" />,
        badgeColor: "from-yellow-200 to-yellow-100"  // Updated background color
      },
      {
        title: "Continuous Service Management (cSM)",
        description: "cSM is a modern platform revolutionizing how organizations manage processes, boost efficiency, and ensure compliance, especially in highly regulated GxP settings.",
        icon: <Cpu className="h-10 w-10 text-primary" />,
        badgeColor: "from-red-200 to-red-100"  // Updated background color
      },
      {
        title: "Continuous Risk Management (cRM)",
        description: "cRM is an innovative platform reshaping how organizations manage project, process, IT and operations risks.",
        icon: <Globe className="h-10 w-10 text-primary" />,
        badgeColor: "from-teal-200 to-teal-100"  // Updated background color
      },
      {
        title: "Continuous Remote Monitoring and Management (cRMM)",
        description: "cRMM is a sophisticated platform designed for the seamless management of both GxP and non-GxP IT assets.",
        icon: <Cloud className="h-10 w-10 text-primary" />,
        badgeColor: "from-cyan-200 to-cyan-100"  // Updated background color
      },
      {
        title: "Continuous IT/OT Operations and Management (cITOM)",
        description: "Continuous IT/OT Operations Management (cITOM) is a cutting-edge incident management platform built to improve operational resilience and incident response specifically within modern manufacturing.",
        icon: <Settings className="h-10 w-10 text-primary" />,
        badgeColor: "from-purple-200 to-purple-100"  // Updated background color
      },
      {
        title: "Continuous Mail Protection (cMP)",
        description: "ContinuousMP (cMP) is a revolutionary managed service that transforms email security and data protection.",
        icon: <Calendar className="h-10 w-10 text-primary" />,
        badgeColor: "from-orange-200 to-orange-100"  // Updated background color
      },
      {
        title: "Continuous Managed Threat Response (cMTR)",
        description: "cMTR is a revolutionary cybersecurity platform built to defend the manufacturing networks against today's rapidly changing cyber threats.",
        icon: <UserCheck className="h-10 w-10 text-primary" />,
        badgeColor: "from-lime-200 to-lime-100"  // Updated background color
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
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-4 top-1/4 w-64 h-64 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute right-0 top-1/2 w-96 h-96 bg-gradient-to-l from-secondary/20 to-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute left-1/3 bottom-0 w-72 h-72 bg-gradient-to-t from-accent/20 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 top-8">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2.5 rounded-full shadow-lg font-semibold text-sm tracking-wider inline-flex items-center gap-2 backdrop-blur-sm border border-white/20"
          >
            <span className="inline-block animate-bounce">🎉</span>
            Meet the new ContinuousIntelligence!
          </motion.span>
        </div>

        <div className="container mx-auto px-4 py-24 md:py-32 flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0 md:pr-10 space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Here to Help,{" "}
              <span className="bg-gradient-to-r from-primary via-primary/90 to-secondary bg-clip-text text-transparent drop-shadow-sm">
                Exceptional Support, Every Step of the Way.
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl text-muted-foreground/90 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Reach out to our dedicated team anytime, we're ready to assist you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="pt-4"
            >
              <Link 
                to="/support" 
                className="group inline-flex items-center bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-semibold hover:translate-y-[-2px] relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Contact Support
                  <motion.span 
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-6 w-6" />
                  </motion.span>
                </span>
                <div className="absolute inset-0 bg-white/20 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary via-accent to-secondary blur-xl opacity-30 group-hover:opacity-40 transition-opacity animate-pulse-slow"></div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="Modern tech workspace showcasing NexusSupport's advanced customer service platform"
                className="relative rounded-xl shadow-xl w-full max-w-lg mx-auto object-cover hover:scale-[1.03] transition-transform duration-700 border-4 border-white/80 aspect-[4/3]"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
        </div>
        <div className="container mx-auto px-4 pb-16">
          <div className="mt-2 flex flex-wrap justify-center gap-6 md:gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex items-center gap-3 bg-white/90 hover:bg-white/95 rounded-lg px-6 py-4 shadow-md hover:shadow-lg transition-all border border-gray-200 group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -2 }}
                transition={{ delay: 0.06 * i, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="group-hover:scale-110 transition-transform duration-300">{stat.icon}</span>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-primary">{stat.value}</span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
        Our Support Solutions
      </h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
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
          className={`h-full flex flex-col rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-muted hover:border-primary/20 group bg-gradient-to-br ${product.badgeColor} hover:scale-105`}
          whileHover={{ y: -4 }}
        >
          {/* Content Section */}
          <div className="flex flex-col items-center text-center space-y-4 flex-grow">
            <motion.div 
              className="mb-4 p-4 bg-white/80 rounded-full shadow-md group-hover:shadow-lg transition-all duration-300"
              whileHover={{ 
                scale: 1.1,
                rotate: 5
              }}
            >
              {product.icon}
            </motion.div>

            <h3 className="text-2xl font-semibold mb-2 text-primary group-hover:text-primary/80 transition-colors">
              {product.title}
            </h3>

            <p className="text-muted-foreground text-lg mb-6 line-clamp-4">
              {product.description}
            </p>
          </div>

          {/* Button Section */}
          <div className="mt-auto pt-4">
            <Link 
              to="/support" 
              className="text-primary hover:text-primary/80 inline-flex items-center font-medium text-lg group/link"
              aria-label={`Learn more about ${product.title}`}
            >
              Learn More 
              <ArrowRight className="ml-2 h-5 w-5 group-hover/link:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>

        </motion.div>
      ))}
    </motion.div>
  </div>
</section>


      <section className="bg-gradient-to-r from-white via-blue-50 to-purple-50 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Heart className="mx-auto h-10 w-10 text-pink-400 mb-4 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Loved by our users</h2>
            <p className="text-xl text-muted-foreground font-light">
              Real stories from people building with NexusSupport.
            </p>
          </motion.div>
          <div className="relative flex items-center">
            <button
              onClick={prevTestimonial}
              className="absolute -left-4 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-primary hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label="Previous testimonial"
            >
              <ArrowRight className="rotate-180 w-6 h-6" />
            </button>
            <motion.div
              key={testimonialIdx}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.43 }}
              className="mx-auto px-8 py-10 bg-white rounded-xl shadow-xl border border-gray-200 w-full hover:shadow-2xl transition-shadow duration-300"
              style={{ minHeight: 200 }}
            >
              <p className="text-xl md:text-2xl font-medium text-gray-700 mb-6 leading-relaxed">
                "{testimonials[testimonialIdx].quote}"
              </p>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-primary">{testimonials[testimonialIdx].name}</span>
                <span className="text-muted-foreground">·</span>
                <span className="text-muted-foreground">{testimonials[testimonialIdx].title}</span>
              </div>
            </motion.div>
            <button
              onClick={nextTestimonial}
              className="absolute -right-4 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-primary hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-6 h-6" />
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
                ContinuousIntelligence helps businesses deliver exceptional customer support with AI-powered solutions.
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
              © {new Date().getFullYear()} ContinuousIntelligence. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </Layout>
  );
};

export default Index;
