import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Twitter, Facebook, Instagram, Linkedin, Clock } from "lucide-react";
import { motion } from "framer-motion";

const businessHours = [
  { day: "Monday - Friday", hours: "8:00 AM - 8:00 PM EST" },
  { day: "Saturday", hours: "9:00 AM - 5:00 PM EST" },
  { day: "Sunday", hours: "Closed" }
];

const ContactSection = () => (
  <section className="bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 py-8 mt-6">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-primary dark:text-white">Get in Touch</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
);

export default ContactSection;
