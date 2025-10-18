document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <!-- Navigation -->
    <nav class="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <div class="text-2xl font-bold text-indigo-600">DhiAspire</div>
      <div class="hidden md:flex space-x-6">
        <a href="#home" class="text-gray-600 hover:text-indigo-600 transition-colors">Home</a>
        <a href="#about" class="text-gray-600 hover:text-indigo-600 transition-colors">About</a>
        <a href="#services" class="text-gray-600 hover:text-indigo-600 transition-colors">Services</a>
        <a href="#contact" class="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
      </div>
      <button class="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
        Get Started
      </button>
    </nav>

    <!-- Hero Section -->
    <section class="container mx-auto px-6 py-20 text-center">
      <h1 class="text-5xl font-bold text-gray-800 mb-6">
        Welcome to <span class="text-indigo-600">DhiAspire</span>
      </h1>
      <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Empowering your aspirations with innovative solutions and cutting-edge technology
      </p>
      <div class="flex justify-center space-x-4">
        <button class="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors">
          Explore Now
        </button>
        <button class="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition-colors">
          Learn More
        </button>
      </div>
    </section>

    <!-- Features Section -->
    <section class="bg-white py-20">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose Us?</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center p-6">
            <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Fast & Reliable</h3>
            <p class="text-gray-600">Lightning-fast performance with 99.9% uptime guarantee</p>
          </div>
          <div class="text-center p-6">
            <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Secure</h3>
            <p class="text-gray-600">Enterprise-grade security with end-to-end encryption</p>
          </div>
          <div class="text-center p-6">
            <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">User Friendly</h3>
            <p class="text-gray-600">Intuitive design that puts user experience first</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto px-6 text-center">
        <div class="text-2xl font-bold mb-4">DhiAspire</div>
        <p class="text-gray-400 mb-4">Building the future, one aspiration at a time</p>
        <div class="flex justify-center space-x-6">
          <a href="#" class="text-gray-400 hover:text-white transition-colors">Privacy</a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">Terms</a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">Support</a>
        </div>
      </div>
    </footer>
  </div>
`

import { Navbar } from './components/Navbar.js';
import { Footer } from './components/Footer.js';
import { Home } from './pages/Home.js';
import { Features } from './pages/Features.js';

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    ${Navbar()}
    ${Home()}
    ${Features()}
    ${Footer()}
  </div>
`;
