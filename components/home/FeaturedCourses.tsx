export default function FeaturedCourses() {
  const courses = [
    {
      icon: "🫀",
      title: "Human Anatomy",
      level: "Beginner",
      students: "5.200+",
      duration: "36 Hours",
      lessons: "120 Lessons",
      rating: "4.9",
    },
    {
      icon: "🧬",
      title: "Physiology",
      level: "Intermediate",
      students: "4.100+",
      duration: "28 Hours",
      lessons: "96 Lessons",
      rating: "4.8",
    },
    {
      icon: "💊",
      title: "Pharmacology",
      level: "Advanced",
      students: "3.800+",
      duration: "42 Hours",
      lessons: "150 Lessons",
      rating: "4.9",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-wider">
            Courses
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Featured Medical Courses
          </h2>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Pelajari materi kedokteran dari dasar hingga tingkat klinis
            melalui video, kuis, flashcard, dan AI Tutor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {courses.map((course) => (

            <div
              key={course.title}
              className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-xl transition duration-300"
            >

              <div className="text-6xl">
                {course.icon}
              </div>

              <span className="inline-block bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full mt-6">
                {course.level}
              </span>

              <h3 className="text-2xl font-bold mt-5">
                {course.title}
              </h3>

              <p className="text-yellow-500 mt-4">
                ⭐ {course.rating}
              </p>

              <div className="space-y-2 mt-5 text-gray-600">

                <p>👨‍🎓 {course.students} Students</p>

                <p>⏱️ {course.duration}</p>

                <p>📚 {course.lessons}</p>

              </div>

              <button className="w-full mt-8 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
                Start Learning
              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}