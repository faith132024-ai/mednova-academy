export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-12">

          <div>

            <h2 className="text-3xl font-bold text-blue-400">
              MedNova Academy
            </h2>

            <p className="mt-6 text-slate-300 leading-8">
              The Future of Medical Education.
              Belajar kedokteran modern dengan AI,
              simulasi interaktif, dan materi berkualitas.
            </p>

          </div>

          <div>

            <h3 className="font-semibold text-xl mb-6">
              Platform
            </h3>

            <ul className="space-y-3 text-slate-300">

              <li>Courses</li>

              <li>AI Tutor</li>

              <li>Flashcards</li>

              <li>Question Bank</li>

            </ul>

          </div>

          <div>

            <h3 className="font-semibold text-xl mb-6">
              Company
            </h3>

            <ul className="space-y-3 text-slate-300">

              <li>About</li>

              <li>Contact</li>

              <li>Privacy Policy</li>

              <li>Terms of Service</li>

            </ul>

          </div>

          <div>

            <h3 className="font-semibold text-xl mb-6">
              Follow Us
            </h3>

            <ul className="space-y-3 text-slate-300">

              <li>Instagram</li>

              <li>LinkedIn</li>

              <li>GitHub</li>

              <li>YouTube</li>

            </ul>

          </div>

        </div>

        <div className="border-t border-slate-700 mt-16 pt-8 text-center text-slate-400">

          © 2026 MedNova Academy.
          All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}