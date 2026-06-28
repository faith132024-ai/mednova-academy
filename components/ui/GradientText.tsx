interface GradientTextProps {
  children: React.ReactNode;
}

export default function GradientText({
  children,
}: GradientTextProps) {
  return (
    <span
      className="
        bg-gradient-to-r
        from-blue-600
        via-cyan-500
        to-indigo-600
        bg-clip-text
        text-transparent
      "
    >
      {children}
    </span>
  );
}