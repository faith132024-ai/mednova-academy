import Button from "@/components/ui/Button";
import GradientText from "@/components/ui/GradientText";
import Section from "@/components/ui/Section";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-100 py-24">

      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl"></div>

      <div className="absolute top-40 right-0 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl"></div>

      <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-300/20 blur-3xl"></div>

      <Section>

        <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>

            <p className="text-blue-600 font-semibold uppercase tracking-widest">
              AI Medical Learning Platform
            </p>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mt-6">
              Learn Medicine
              <br />
              <GradientText>
                Smarter with AI
              </GradientText>
            </h1>

            <p className="text-gray-600 text-lg leading-8 mt-8 max-w-xl">
              MedNova Academy membantu mahasiswa kedokteran
              belajar lebih cepat menggunakan Artificial
              Intelligence, simulasi pasien virtual, serta
              ribuan materi interaktif.
            </p>

            <div className="flex gap-5 mt-10">

              <Button>
                Mulai Belajar
              </Button>

              <Button
                className="bg-white text-blue-600 border border-blue-200 hover:bg-blue-50"
              >
                Lihat Demo
              </Button>

            </div>

          </div>

          {/* RIGHT */}

<div>

  <div
    className="
      bg-white/80
      backdrop-blur-xl
      rounded-3xl
      shadow-2xl
      border
      border-white/50
      p-8
    "
  >

    {/* Header */}

    <div className="flex items-center justify-between">

      <div>

        <h3 className="text-xl font-bold">
          🤖 MedNova AI
        </h3>

        <div className="mt-2 inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
          ● AI Connected
        </div>

      </div>

      <div className="text-4xl">
        🩺
      </div>

    </div>

    {/* Statistics */}

    <div className="mt-8 space-y-4">

      <div className="flex items-center justify-between rounded-xl bg-slate-100 p-4 transition hover:bg-slate-200">

        <div className="flex items-center gap-3">

          <span className="text-2xl">
            ❤️
          </span>

          <span>
            Heart Rate
          </span>

        </div>

        <span className="font-bold text-blue-600">
          78 BPM
        </span>

      </div>

      <div className="flex items-center justify-between rounded-xl bg-slate-100 p-4 transition hover:bg-slate-200">

        <div className="flex items-center gap-3">

          <span className="text-2xl">
            🫁
          </span>

          <span>
            Oxygen
          </span>

        </div>

        <span className="font-bold text-green-600">
          98%
        </span>

      </div>

      <div className="flex items-center justify-between rounded-xl bg-slate-100 p-4 transition hover:bg-slate-200">

        <div className="flex items-center gap-3">

          <span className="text-2xl">
            🧠
          </span>

          <span>
            AI Diagnosis
          </span>

        </div>

        <span className="font-bold text-purple-600">
          Ready
        </span>

      </div>

    </div>

    {/* Chat */}

    <div className="mt-8">

      <div className="ml-auto max-w-xs rounded-2xl bg-blue-600 p-4 text-white shadow-lg">

        <p className="text-sm">
          What are the symptoms of anemia?
        </p>

      </div>

      <div className="mt-4 max-w-xs rounded-2xl bg-slate-100 p-4 shadow">

        <p className="font-semibold text-blue-600">
          🤖 MedNova AI
        </p>

        <p className="mt-2 text-sm text-gray-600">
          Analyzing your question...
        </p>

      </div>

    </div>

  </div>

</div>

        </div>

      </Section>

    </section>
  );
}