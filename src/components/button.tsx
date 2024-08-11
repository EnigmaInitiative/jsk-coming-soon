import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button = ({
  children,
  type = "button",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`flex select-none items-center justify-center whitespace-nowrap border-2 bg-[#372E97] p-4 text-xl font-medium  text-white transition duration-300 hover:cursor-pointer hover:border-black hover:bg-white hover:text-black active:scale-[0.98] ${
        disabled
          ? "cursor-not-allowed opacity-50 hover:bg-black hover:text-white"
          : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
