export function Features() {
  return `
    <section class="bg-white py-20">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-14">Why Choose Us?</h2>
        <div class="grid md:grid-cols-3 gap-10">
          <div class="bg-indigo-50 rounded-2xl shadow p-8 flex flex-col items-center">
            <div class="w-16 h-16 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full flex items-center justify-center mb-5">
              <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2 text-indigo-700">Fast & Reliable</h3>
            <p class="text-gray-600">Lightning-fast performance with 99.9% uptime guarantee.</p>
          </div>
          <div class="bg-indigo-50 rounded-2xl shadow p-8 flex flex-col items-center">
            <div class="w-16 h-16 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full flex items-center justify-center mb-5">
              <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2 text-indigo-700">Secure</h3>
            <p class="text-gray-600">Enterprise-grade security with end-to-end encryption.</p>
          </div>
          <div class="bg-indigo-50 rounded-2xl shadow p-8 flex flex-col items-center">
            <div class="w-16 h-16 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full flex items-center justify-center mb-5">
              <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2 text-indigo-700">User Friendly</h3>
            <p class="text-gray-600">Intuitive design that puts user experience first.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
