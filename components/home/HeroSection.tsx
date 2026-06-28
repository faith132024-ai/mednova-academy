import Button from "@/components/ui/Button";
import GradientText from "@/components/ui/GradientText";
import Section from "@/components/ui/Section";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-300/20 blur-3xl"></div>

      <Section>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <div>

            <p className="font-semibold uppercase tracking-[0.25em] text-blue-600">
              AI Medical Learning Platform
            </p>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-7xl">
              Learn Medicine
              <br />
              <GradientText>
                Smarter with AI
              </GradientText>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-700">
              MedNova Academy membantu mahasiswa kedokteran
              belajar lebih cepat menggunakan Artificial
              Intelligence, simulasi pasien virtual,
              serta ribuan materi interaktif.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <Button>
                Mulai Belajar
              </Button>

              <Button
                className="border border-blue-200 bg-white text-blue-600 hover:bg-blue-50"
              >
                Lihat Demo
              </Button>

            </div>

          </div>

          {/* RIGHT */}
          <div>

            <div
              className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-2xl
              "
            >

              <div className="flex items-center justify-between">

                <h3 className="text-xl font-bold text-slate-900">
                  🤖 MedNova AI
                </h3>

                <div className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  ● AI Connected
                </div>

              </div>

              <div className="mt-8 space-y-5">

                <div className="flex items-center justify-between rounded-xl bg-slate-100 p-4 transition hover:bg-slate-200">

                  <div className="flex items-center gap-3">

                    <span className="text-2xl">❤️</span>

                    <span className="font-medium text-slate-700">
                      Heart Rate
                    </span>

                  </div>

                  <span className="font-bold text-blue-600">
                    78 BPM
                  </span>

                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-100 p-4 transition hover:bg-slate-200">

                  <div className="flex items-center gap-3">

                    <span className="text-2xl">🫁</span>

                    <span className="font-medium text-slate-700">
                      Oxygen
                    </span>

                  </div>

                  <span className="font-bold text-green-600">
                    98%
                  </span>

                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-100 p-4 transition hover:bg-slate-200">

                  <div className="flex items-center gap-3">

                    <span className="text-2xl">🧠</span>

                    <span className="font-medium text-slate-700">
                      AI Status
                    </span>

                  </div>

                  <span className="font-bold text-purple-600">
                    Ready
                  </span>

                </div>

              </div>

              <div className="mt-8 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 p-4 text-white shadow-lg">

                What are the symptoms of anemia?

              </div>

              <div className="mt-6">

                <h4 className="font-semibold text-slate-900">
                  🤖 MedNova AI
                </h4>

                <p className="mt-2 text-slate-600">
                  Analyzing your question...
                </p>

              </div>

            </div>

          </div>

        </div>

      </Section>

    </section>
  );
}