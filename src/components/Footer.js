export function Footer() {
  return `
    <footer class="bg-gradient-to-r from-indigo-700 to-blue-700 text-white py-10 mt-20">
      <div class="container mx-auto px-6 text-center">
        <div class="text-2xl font-extrabold mb-3 tracking-tight">DhiAspire</div>
        <p class="text-gray-200 mb-5">Building the future, one aspiration at a time.</p>
        <div class="flex justify-center space-x-8 mb-3">
          <a href="#" class="text-gray-300 hover:text-white text-lg transition">Privacy</a>
          <a href="#" class="text-gray-300 hover:text-white text-lg transition">Terms</a>
          <a href="#" class="text-gray-300 hover:text-white text-lg transition">Support</a>
        </div>
        <div class="text-sm text-gray-400">&copy; ${new Date().getFullYear()} DhiAspire. All rights reserved.</div>
      </div>
    </footer>
  `;
}
