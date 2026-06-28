import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

import {
  Bot,
  BookOpen,
  Stethoscope,
  ClipboardList,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Bot,
      title: "AI Medical Tutor",
      description:
        "Belajar bersama AI yang siap menjawab pertanyaan medis kapan saja.",
    },
    {
      icon: BookOpen,
      title: "Structured Courses",
      description:
        "Materi lengkap dari anatomi hingga pembelajaran klinis.",
    },
    {
      icon: Stethoscope,
      title: "Virtual Patient",
      description:
        "Latihan mendiagnosis pasien melalui simulasi kasus nyata.",
    },
    {
      icon: ClipboardList,
      title: "Question Bank",
      description:
        "Ribuan soal latihan beserta pembahasan lengkap.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          badge="Why Choose Us"
          title="Why Choose MedNova Academy?"
          description="Kami menghadirkan pengalaman belajar kedokteran modern yang menggabungkan teknologi AI dengan materi berkualitas."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature) => (
            <Card
              key={feature.title}
              className="p-8 text-center"
            >
              <div className="flex justify-center mb-6">
                <feature.icon
                  size={56}
                  className="text-blue-600"
                  strokeWidth={2}
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {feature.description}
              </p>
            </Card>
          ))}

        </div>
      </div>
    </section>
  );
}