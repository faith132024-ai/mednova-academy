export default function AiTutor() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">

          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            AI Medical Tutor
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Belajar Bersama Artificial Intelligence
          </h2>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Tanyakan apa pun tentang dunia kedokteran.
            AI MedNova siap membantu belajar 24 jam sehari.
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 max-w-4xl mx-auto">

          <div className="mb-8">

            <p className="font-semibold text-blue-600">
              👨‍🎓 Mahasiswa
            </p>

            <div className="bg-slate-100 rounded-2xl p-5 mt-3">
              Apa fungsi insulin pada tubuh manusia?
            </div>

          </div>

          <div>

            <p className="font-semibold text-green-600">
              🤖 MedNova AI
            </p>

            <div className="bg-blue-50 rounded-2xl p-5 mt-3 leading-8">

              Insulin adalah hormon yang diproduksi oleh
              sel beta pankreas.

              Hormon ini membantu menurunkan kadar glukosa
              darah dengan meningkatkan penyerapan glukosa
              ke dalam sel tubuh sehingga dapat digunakan
              sebagai sumber energi.

            </div>

          </div>

          <button className="mt-10 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition">
            Try AI Tutor
          </button>

        </div>

      </div>
    </section>
  );
}