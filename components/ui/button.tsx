// components/ui/button.tsx
import React from "react";

interface ButtonProps {
  variant?: "outline" | "solid";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  size = "md",
  children,
  onClick,
  disabled = false,
}) => {
  const baseStyle = "px-4 py-2 rounded";
  const variantStyle =
    variant === "outline"
      ? "border border-gray-300 text-gray-700"
      : "bg-blue-500 text-white";
  const sizeStyle =
    size === "sm"
      ? "text-sm"
      : size === "lg"
      ? "text-lg"
      : "text-base";

  return (
    <button
      className={`${baseStyle} ${variantStyle} ${sizeStyle} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
