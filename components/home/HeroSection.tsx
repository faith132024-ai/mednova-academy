export default function HeroSection() {
  return (
    <section className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>

          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            🚀 Platform Belajar Kedokteran Modern
          </span>

          <h1 className="text-5xl font-bold text-slate-900 leading-tight mt-6">
            Learn Medicine
            <br />
            Smarter with AI
          </h1>

          <p className="text-gray-600 text-lg mt-6 leading-8">
            MedNova Academy membantu mahasiswa kedokteran belajar
            lebih efektif melalui AI Tutor, Video Course,
            Flashcard, Quiz, Virtual Patient,
            dan ribuan soal latihan.
          </p>

          <div className="flex gap-4 mt-10">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition">
              Mulai Belajar
            </button>

            <button className="border border-gray-300 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold transition">
              Lihat Course
            </button>
          </div>

        </div>

        {/* Right Content */}
        <div className="flex justify-center">

          <div className="bg-white rounded-3xl shadow-xl p-10 w-[420px]">

            <div className="text-8xl text-center">
              🩺
            </div>

            <h2 className="text-center font-bold text-2xl mt-6">
              AI Medical Assistant
            </h2>

            <p className="text-center text-gray-500 mt-3">
              Belajar kedokteran lebih cepat dengan AI Tutor,
              Quiz interaktif, Flashcard,
              dan simulasi Virtual Patient.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}