import { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ children, onClick, type = 'button', className = '' }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`px-4 py-2 bg-black text-white hover:bg-white hover:text-black border-black border duration-200 transition-all rounded-md ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
