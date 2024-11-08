import React from 'react'

function Footer() {
  return (
    <div>
      <footer class="bg-gray-800 text-gray-300 py-10">
  <div class="container mx-auto px-4 lg:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    
    <div>
      <h2 class="text-2xl font-bold text-white mb-4">Printo</h2>
      <p class="text-gray-400">
        Your one-stop solution for high-quality printing needs, from business cards to custom merchandise.
      </p>
    </div>


    <div>
      <h3 class="text-lg font-semibold text-white mb-4">Quick Links</h3>
      <ul class="space-y-2">
        <li><a href="#" class="hover:text-white">Home</a></li>
        <li><a href="#" class="hover:text-white">Products</a></li>
        <li><a href="#" class="hover:text-white">Pricing</a></li>
        <li><a href="#" class="hover:text-white">Contact</a></li>
      </ul>
    </div>

  
    <div>
      <h3 class="text-lg font-semibold text-white mb-4">Contact Us</h3>
      <ul class="space-y-2">
        <li><span>Address: 123 Printo Street, Print City</span></li>
        <li><span>Email: support@printo.in</span></li>
        <li><span>Phone: +91 123 456 7890</span></li>
      </ul>
    </div>


    <div>
      <h3 class="text-lg font-semibold text-white mb-4">Follow Us</h3>
      <div class="flex space-x-4">
        <a href="#" class="text-gray-400 hover:text-white">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      
            <path d="M22 12.07C22 6.6 17.52 2 12 2S2 6.6 2 12.07c0 5.03 3.66 9.18 8.43 9.93v-7.03h-2.54v-2.9h2.54v-1.88c0-2.5 1.49-3.87 3.77-3.87 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.8h2.77l-.44 2.9h-2.33v7.03C18.34 21.25 22 17.1 22 12.07z"/>
          </svg>
        </a>
        <a href="#" class="text-gray-400 hover:text-white">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c13 8 20-6 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
          </svg>
        </a>
        <a href="#" class="text-gray-400 hover:text-white">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        
            <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM12 8.75a3.25 3.25 0 110 6.5 3.25 3.25 0 010-6.5zm4.5-2.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm2.5 10a4.75 4.75 0 01-4.75 4.75h-5a4.75 4.75 0 01-4.75-4.75v-5A4.75 4.75 0 017.75 4.25h5a4.75 4.75 0 014.75 4.75v5z"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
  <div class="text-center text-gray-500 text-sm mt-8">
    &copy; 2024 Printo. All rights reserved.
  </div>
</footer>

    </div>
  )
}

export default Footer