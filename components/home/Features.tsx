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
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-wider">
            Why Choose Us
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Why Choose MedNova Academy?
          </h2>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Kami menghadirkan pengalaman belajar kedokteran modern yang
            menggabungkan teknologi AI dengan materi berkualitas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300"
            >
              <div className="text-5xl">{feature.icon}</div>

              <h3 className="font-bold text-xl mt-6">
                {feature.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}