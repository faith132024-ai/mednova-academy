export default function FAQ() {
  const faqs = [
    {
      question: "Apakah MedNova Academy gratis?",
      answer:
        "Ya. Sebagian materi dapat diakses secara gratis. Kami juga menyediakan paket Premium dengan fitur yang lebih lengkap.",
    },
    {
      question: "Apakah tersedia AI Medical Tutor?",
      answer:
        "Tersedia. AI Tutor siap membantu menjawab pertanyaan medis, menjelaskan konsep, dan memberikan panduan belajar 24/7.",
    },
    {
      question: "Apakah bisa digunakan di smartphone?",
      answer:
        "Tentu. MedNova Academy dirancang responsif sehingga nyaman digunakan di laptop, tablet, maupun smartphone.",
    },
    {
      question: "Apakah cocok untuk mahasiswa pre-klinik dan koas?",
      answer:
        "Ya. Materi kami disusun mulai dari anatomi dasar hingga simulasi kasus klinis sehingga cocok untuk semua tahap pembelajaran kedokteran.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            FAQ
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 mt-5">
            Temukan jawaban atas pertanyaan yang paling sering diajukan.
          </p>

        </div>

        <div className="space-y-6">

          {faqs.map((faq) => (

            <div
              key={faq.question}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >

              <h3 className="text-xl font-semibold text-blue-600">
                {faq.question}
              </h3>

              <p className="mt-4 text-gray-600 leading-8">
                {faq.answer}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}