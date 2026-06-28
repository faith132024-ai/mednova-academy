import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

export default function Features() {
  const features = [
    {
      icon: "🤖",
      title: "AI Medical Tutor",
      description:
        "Belajar bersama AI yang siap menjawab pertanyaan medis kapan saja.",
    },
    {
      icon: "📚",
      title: "Structured Courses",
      description:
        "Materi lengkap dari anatomi hingga pembelajaran klinis.",
    },
    {
      icon: "🩺",
      title: "Virtual Patient",
      description:
        "Latihan mendiagnosis pasien melalui simulasi kasus nyata.",
    },
    {
      icon: "📝",
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
              <div className="text-5xl mb-6">
                {feature.icon}
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