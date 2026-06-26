export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6 bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-blue-600">
          MedNova Academy
        </h1>

        <div className="space-x-8 hidden md:flex">
          <a href="#">Home</a>
          <a href="#">Courses</a>
          <a href="#">AI Tutor</a>
          <a href="#">Quiz</a>
          <a href="#">Contact</a>
        </div>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition">
          Login
        </button>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-8 py-32">

        <h2 className="text-6xl font-bold text-slate-900 mb-6">
          Learn Medicine
          <br />
          Smarter.
        </h2>

        <p className="text-slate-600 text-xl max-w-2xl leading-8">
          Platform pembelajaran kedokteran modern yang membantu mahasiswa
          memahami anatomi, fisiologi, farmakologi, patologi, hingga persiapan
          UKMPPD dengan bantuan AI.
        </p>

        <div className="mt-10 flex gap-5">

          <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl hover:bg-blue-700 transition">
            Mulai Belajar
          </button>

          <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-2xl hover:bg-blue-50 transition">
            Lihat Course
          </button>

        </div>

      </section>

    </main>
  )
}