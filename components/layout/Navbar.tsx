export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-3xl">🩺</span>

          <div>
            <h1 className="font-bold text-xl text-blue-600">
              MedNova
            </h1>

            <p className="text-xs text-gray-500">
              Academy
            </p>
          </div>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">

          <li className="cursor-pointer hover:text-blue-600 transition">
            Home
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition">
            Courses
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition">
            AI Tutor
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition">
            About
          </li>

        </ul>

        {/* Button */}
        <div className="flex gap-3">

          <button className="px-5 py-2 rounded-lg hover:bg-gray-100 transition">
            Login
          </button>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>

        </div>

      </div>
    </nav>
  );
}