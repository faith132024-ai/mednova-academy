import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        bg-white
        rounded-3xl
        shadow-sm
        hover:shadow-2xl
        transition-all
        duration-300
        hover:-translate-y-2
        ${className}
      `}
    >
      {children}
    </div>
  );
}