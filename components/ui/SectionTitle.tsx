interface SectionTitleProps {
  badge: string;
  title: string;
  description: string;
}

import Badge from "./Badge";

export default function SectionTitle({
  badge,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="text-center mb-16">

      <Badge>{badge}</Badge>

      <h2 className="text-4xl font-bold mt-6">
        {title}
      </h2>

      <p className="text-gray-600 mt-5 max-w-2xl mx-auto leading-8">
        {description}
      </p>

    </div>
  );
}