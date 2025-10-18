export function Home() {
  return `
    <section class="container mx-auto px-6 py-24 text-center flex flex-col items-center justify-center min-h-[60vh]">
      <h1 class="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
        Welcome to <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-500">DhiAspire</span>
      </h1>
      <p class="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
        Empowering your aspirations with innovative solutions and cutting-edge technology.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <button class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-10 py-4 rounded-xl text-lg font-bold shadow-lg hover:scale-105 transition-transform duration-200">
          Explore Now
        </button>
        <button class="border-2 border-indigo-500 text-indigo-500 px-10 py-4 rounded-xl text-lg font-bold hover:bg-indigo-50 transition-colors">
          Learn More
        </button>
      </div>
    </section>
  `;
}
