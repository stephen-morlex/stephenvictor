<template>
  <header class="shadow-lg bg-white">
    <div class="container mx-auto sm:flex justify-between sm:items-center sm:px-32 sm:py-6">
      <div class="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <ul>
            <li @click="isOpen=fales">
              <nuxt-link to="/">
                <img class="w-48 sm:w-56" src="../../assets/STEPHEN.png" alt="" srcset="">
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="sm:hidden">
          <button type="button" class="block text-primary focus:outline-none" @click="isOpen = !isOpen">
            <svg class="h-6 w-6 fill-current text-primary" viewBox="0 0 24 24">
              <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <nav :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 sm:flex sm:p-0 z-50 sm:z-0 bg-white border-t-2 sm:border-t-0 w-full right-0 sm:left-0  absolute sm:relative  text-lg tracking-wide">
          <ul class="sm:flex">
            <li @click="isOpen = !isOpen">
              <nuxt-link to="about" class="block px-2 py-1 text-gray-900 font-semibold rounded hover:text-primary" @click="!isOpen">
                What I Do
              </nuxt-link>
            </li>
            <li @click="isOpen = !isOpen">
              <nuxt-link to="/portfolio" class="mt-1 block px-2 py-1 text-gray-900 font-semibold rounded hover:text-primary sm:mt-0 sm:ml-2">
                Portfolio
              </nuxt-link>
            </li>
            <li @click="isOpen = !isOpen">
              <nuxt-link to="blog" class="mt-1 block px-2 py-1 text-gray-900 font-semibold rounded hover:text-primary sm:mt-0 sm:ml-2">
                About
              </nuxt-link>
            </li>
            <li @click="isOpen = !isOpen">
              <nuxt-link to="/contact" class="mt-1 block px-2 py-1 text-gray-900 font-semibold rounded hover:text-primary sm:mt-0 sm:ml-2">
                Contact
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
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
