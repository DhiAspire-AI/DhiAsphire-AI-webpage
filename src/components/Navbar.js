export function Navbar() {
  return `
    <nav class="flex items-center justify-between px-8 py-6 bg-white shadow-lg sticky top-0 z-50">
      <div class="text-3xl font-extrabold text-indigo-700 tracking-tight">DhiAspire</div>
      <div class="hidden md:flex space-x-8">
        <a href="#home" class="text-lg text-gray-700 hover:text-indigo-700 font-medium transition">Home</a>
        <a href="#about" class="text-lg text-gray-700 hover:text-indigo-700 font-medium transition">About</a>
        <a href="#services" class="text-lg text-gray-700 hover:text-indigo-700 font-medium transition">Services</a>
        <a href="#contact" class="text-lg text-gray-700 hover:text-indigo-700 font-medium transition">Contact</a>
      </div>
      <button class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-7 py-2 rounded-xl font-semibold shadow hover:scale-105 transition-transform duration-200">
        Get Started
      </button>
    </nav>
  `;
}
