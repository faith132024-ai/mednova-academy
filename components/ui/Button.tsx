import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
};

export default function Button({
  children,
  className = "",
}: ButtonProps) {
  return (
    <button
      className={`px-6 py-3 rounded-xl font-semibold transition-all ${className}`}
    >
      {children}
    </button>
  );
}