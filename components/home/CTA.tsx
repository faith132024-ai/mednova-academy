export default function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[40px] p-16 text-center shadow-2xl">

          <p className="uppercase tracking-widest text-blue-100 font-semibold">
            Start Your Journey
          </p>

          <h2 className="text-5xl font-bold text-white mt-6">
            Ready to Become
            <br />
            The Future Doctor?
          </h2>

          <p className="text-blue-100 mt-8 max-w-3xl mx-auto leading-8 text-lg">
            Belajar bersama AI Medical Tutor, 3D Medical Learning,
            Virtual Patient, ribuan soal latihan,
            dan materi kedokteran yang selalu diperbarui.
          </p>

          <div className="mt-12">

            <button
              className="
              bg-white
              text-blue-700
              px-10
              py-4
              rounded-2xl
              font-bold
              hover:scale-105
              transition-all
              duration-300
              shadow-lg
              "
            >
              Mulai Gratis
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}