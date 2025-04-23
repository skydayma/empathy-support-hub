
import { motion } from "framer-motion";

interface FormFieldProps {
  id: string;
  label: string;
  type?: "text" | "email" | "select" | "textarea";
  placeholder?: string;
  error?: string;
  register: any;
  children?: React.ReactNode;
}

const FormField = ({
  id,
  label,
  type = "text",
  placeholder,
  error,
  register,
  children
}: FormFieldProps) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium mb-1">
        {label}
      </label>
      
      {type === "textarea" ? (
        <textarea
          id={id}
          {...register}
          rows={5}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors ${
            error ? "border-red-500" : "border-gray-300"
          }`}
          placeholder={placeholder}
        ></textarea>
      ) : type === "select" ? (
        <select
          id={id}
          {...register}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        >
          {children}
        </select>
      ) : (
        <input
          id={id}
          type={type}
          {...register}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors ${
            error ? "border-red-500" : "border-gray-300"
          }`}
          placeholder={placeholder}
        />
      )}
      
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1 text-sm text-red-500"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default FormField;
