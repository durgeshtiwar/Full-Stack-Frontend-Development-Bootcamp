import React from 'react'

function Nav() {
  return (
    <div>
      <nav class="bg-white shadow-md">
        <div class="container mx-auto px-4 py-3 flex justify-between items-center">
            
            <a href="/" class="text-2xl font-bold text-blue-500">Printo</a>

            <div class="flex items-center justify-center mt-5">
  <div class="relative w-full max-w-md">
    <input
      type="text"
      placeholder="Search..."
      class="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
    <button
      type="submit"
      class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500"
    >
      <svg
        class="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 21l-4.35-4.35m0 0a7 7 0 10-9.9 9.9 7 7 0 009.9-9.9z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </button>
  </div>
</div>

            
            <div class="hidden md:flex space-x-6 items-center">
                <a href="#" class="text-gray-700 hover:text-blue-500">Home Center</a>
                <a href="#" class="text-gray-700 hover:text-blue-500">Products</a>
                <a href="#" class="text-gray-700 hover:text-blue-500">Pricing</a>
                <a href="#" class="text-gray-700 hover:text-blue-500">Contact</a>
                <a href="#" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Sign Up</a>
            </div>

            
            <div class="md:hidden flex items-center">
                <button id="menu-btn" class="text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
        </div>

        <div id="menu" class="hidden md:hidden">
            <div class="px-4 py-2 space-y-2 bg-gray-100">
                <a href="#" class="block text-gray-700 hover:text-blue-500">Home Center</a>
                <a href="#" class="block text-gray-700 hover:text-blue-500">Products</a>
                <a href="#" class="block text-gray-700 hover:text-blue-500">Pricing</a>
                <a href="#" class="block text-gray-700 hover:text-blue-500">Contact</a>
                <a href="#" class="block bg-blue-500 text-white px-4 py-2 rounded-md text-center hover:bg-blue-600">Sign Up</a>
            </div>
        </div>
    </nav>
    <div>
    <div class=" px-28 py-2 hidden md:flex space-x-6 items-center bg-gray-100">
                <a href="#" class="text-gray-700 hover:text-blue-500">Same Day Delivery</a>
                <a href="#" class="text-gray-700 hover:text-blue-500">Stationary</a>
                <a href="#" class="text-gray-700 hover:text-blue-500">Corporate Gift</a>
                <a href="#" class="text-gray-700 hover:text-blue-500">Labels & Packaging</a>
                <a href="#" class="text-gray-700 hover:text-blue-500">Apparel</a>
                <a href="#" class="text-gray-700 hover:text-blue-500">Signeges</a>
                <a href="#" class="text-gray-700 hover:text-blue-500">Markating & promo </a>
                <a href="#" class="text-gray-700 hover:text-blue-500">Photo gift</a>


            </div>
    </div>
    </div>
  )
}

export default Nav