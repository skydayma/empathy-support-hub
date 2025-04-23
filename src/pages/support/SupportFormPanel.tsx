
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "@/components/FormField";
import MotionButton from "@/components/MotionButton";
import { FileUp, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  category: z.string().min(1, { message: "Please select a category" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  priority: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const SupportFormPanel = ({
  showDashboard,
  setShowDashboard,
}: {
  showDashboard: boolean;
  setShowDashboard: (v: boolean) => void;
}) => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormValues) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Support request submitted!",
      description: "We've received your message and will respond soon.",
    });
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.12 }}
      className="rounded-2xl shadow-xl bg-white/90 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 relative z-0 backdrop-blur-lg"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-primary dark:text-white">Contact Support</h2>
        <MotionButton
          onClick={() => setShowDashboard(true)}
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
  );
};

export default SupportFormPanel;
