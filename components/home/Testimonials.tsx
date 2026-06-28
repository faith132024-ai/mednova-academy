export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Putri",
      role: "Mahasiswa Kedokteran",
      text: "MedNova Academy membantu saya memahami anatomi lebih cepat dengan AI Tutor dan materi yang terstruktur.",
    },
    {
      name: "Dr. Ahmad",
      role: "Dokter Umum",
      text: "Platform ini sangat menjanjikan. Simulasi kasus dan AI-nya sangat membantu proses belajar.",
    },
    {
      name: "Kevin",
      role: "Co-Ass",
      text: "Question Bank dan pembahasan membuat persiapan ujian menjadi jauh lebih efektif.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Testimonials
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Apa Kata Pengguna Kami?
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Dipercaya mahasiswa kedokteran dan tenaga medis untuk belajar lebih efektif dengan teknologi AI.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="bg-slate-50 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >

              <div className="text-yellow-500 text-xl">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="mt-6 text-gray-600 leading-8">
                "{item.text}"
              </p>

              <div className="mt-8">

                <h3 className="font-bold text-xl">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  {item.role}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}