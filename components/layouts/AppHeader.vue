<template>
  <header class="bg-gray-900 ">
    <div class="container mx-auto sm:flex sm:justify-between sm:items-center sm:px-6 sm:py-6">
      <div class="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <h1 class="text-white text-shadow-lg font-extrabold text-3xl">
            <nuxt-link to="/">
              STEPHEN
            </nuxt-link>
          </h1>
        </div>
        <div class="sm:hidden">
          <button type="button" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none" @click="isOpen = !isOpen">
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            </svg>
          </button>
        </div>
      </div>
      <nav :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 sm:flex sm:p-0 z-50">
        <nuxt-link to="about" class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800" @click="!isOpen">
          About
        </nuxt-link>
        <nuxt-link to="#" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">
          Portfolio
        </nuxt-link>
        <nuxt-link to="#" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">
          Blog
        </nuxt-link>
        <nuxt-link to="#" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">
          Contact
        </nuxt-link>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  data () {
    return {
      isOpen: false
    }
  }
}
</script>
