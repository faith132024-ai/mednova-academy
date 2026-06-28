import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex
        items-center
        justify-center
        rounded-xl
        bg-blue-600
        px-6
        py-3
        text-white
        font-semibold
        shadow-lg
        transition-all
        duration-300
        hover:bg-blue-700
        hover:shadow-2xl
        hover:-translate-y-1
        active:scale-95
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}