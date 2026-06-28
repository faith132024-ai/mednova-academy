export default function FeaturedCourses() {
  const courses = [
    {
      icon: "🫀",
      title: "Human Anatomy",
      lessons: "120 Lessons",
      duration: "40 Hours",
      level: "Beginner",
    },
    {
      icon: "🧬",
      title: "Human Physiology",
      lessons: "100 Lessons",
      duration: "38 Hours",
      level: "Intermediate",
    },
    {
      icon: "💊",
      title: "Pharmacology",
      lessons: "150 Lessons",
      duration: "50 Hours",
      level: "Advanced",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Featured Courses
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Belajar Bersama Dokter Terbaik
          </h2>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Kurikulum lengkap mulai dari anatomi hingga ilmu klinis
            dengan metode pembelajaran modern berbasis AI.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {courses.map((course) => (

            <div
              key={course.title}
              className="bg-slate-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >

              <div className="text-6xl">
                {course.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {course.title}
              </h3>

              <div className="mt-6 space-y-2 text-gray-600">

                <p>📚 {course.lessons}</p>

                <p>⏱ {course.duration}</p>

                <p>🎯 {course.level}</p>

              </div>

              <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">
                Mulai Belajar
              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
