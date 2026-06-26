export default function Statistics() {
  const stats = [
    {
      icon: "👨‍🎓",
      number: "10.000+",
      label: "Mahasiswa Aktif",
    },
    {
      icon: "📚",
      number: "500+",
      label: "Materi Belajar",
    },
    {
      icon: "📝",
      number: "100.000+",
      label: "Soal Latihan",
    },
    {
      icon: "🤖",
      number: "24/7",
      label: "AI Tutor",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item) => (
            <div
              key={item.label}
              className="bg-slate-50 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition duration-300"
            >
              <div className="text-5xl">{item.icon}</div>

              <h2 className="text-3xl font-bold text-blue-600 mt-4">
                {item.number}
              </h2>

              <p className="text-gray-600 mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
