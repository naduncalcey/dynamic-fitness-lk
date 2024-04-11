import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "danger";
  className?: string;
  onClick?: () => void; // Make onClick optional
};
const Button: React.FC<ButtonProps> = ({ children, variant, onClick }) => {
  // Define variant styles using Tailwind CSS
  const variantStyles = {
    primary: "bg-brand-primary hover:bg-brand-secondary text-white transition-all duration-300",
    secondary: "bg-gray-500 hover:bg-gray-700 text-white",
    danger: "bg-red-500 hover:bg-red-700 text-white",
  };

  // Combine base styles with variant-specific styles
  const buttonClasses = `px-4 py-2 rounded focus:outline-none focus:shadow-outline ${variantStyles[variant]}`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
