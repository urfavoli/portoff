"use client";
import React from "react";
import { type LucideIcon } from "lucide-react"; // Use a more specific type from lucide-react

// --- Props Type Definition ---
type InputFieldProps = {
  field: string;
  label: string;
  icon: LucideIcon; // Use LucideIcon type for better safety
  formData: { [key: string]: string };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

// --- Main InputField Component ---
const InputField: React.FC<InputFieldProps> = ({ field, label, icon: Icon, formData, handleChange }) => {

  // A single function to render either an input or textarea
  const renderInput = () => {
    // Shared classes for all inputs, with dynamic classes for textareas
    const baseClasses = `
      w-full p-4 rounded-xl bg-gray-800 text-white placeholder-transparent 
      focus:outline-none focus:ring-2 focus:ring-indigo-500 
      focus:border-indigo-500 transition-all duration-300 peer
    `;
    const inputClasses = `${baseClasses} pl-12 border border-gray-700 hover:border-gray-600`;
    const textareaClasses = `${baseClasses} pt-12 h-52 border border-gray-700 hover:border-gray-600 resize-none`;

    if (field === "message") {
      return (
        <textarea
          id={field}
          name={field}
          placeholder={label}
          value={formData[field]}
          onChange={handleChange}
          className={textareaClasses}
          required
        />
      );
    }
    
    return (
      <input
        id={field}
        type={field === "email" ? "email" : "text"}
        name={field}
        placeholder={label}
        value={formData[field]}
        onChange={handleChange}
        className={inputClasses}
        required
      />
    );
  };

  return (
    <div className="relative w-full group">
      {/* Icon */}
      <Icon className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-hover:text-indigo-400 peer-focus:text-indigo-400 transition-colors duration-300 z-10" />

      {/* Input or Textarea */}
      {renderInput()}

      {/* Floating Label */}
      <label
        htmlFor={field}
        className={`
          absolute left-12 top-4 transform -translate-y-1/2 text-gray-400 text-sm transition-all duration-300
          peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base 
          peer-focus:top-4 peer-focus:-translate-y-1/2 peer-focus:text-indigo-400 peer-focus:text-sm
        `}
      >
        {label}
      </label>
    </div>
  );
};

export default InputField;
