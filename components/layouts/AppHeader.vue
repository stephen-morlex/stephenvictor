<template>
  <header class="fixed top-0 w-full font-sans bg-yellow-300 shadow-md z-100">
    <div class="container justify-between mx-auto sm:flex sm:items-center sm:px-32 sm:py-2">
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
            <svg class="w-6 h-6 fill-current text-primary" viewBox="0 0 24 24">
              <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <nav :class="isOpen ? 'block' : 'hidden'" class="absolute right-0 z-50 w-full px-2 pt-2 pb-4 text-lg tracking-wide sm:flex sm:p-0 sm:z-0 sm:border-t-0 sm:left-0 sm:relative">
          <ul class="capitalize sm:flex">
            <li @click="isOpen = !isOpen">
              <nuxt-link to="/services" class="block px-2 py-1 font-semibold border-black rounded-br-lg hover:rounded-br-full hover:bg-black text-primary hover:text-secondary" @click="!isOpen">
                What I Do
              </nuxt-link>
            </li>
            <li @click="isOpen = !isOpen">
              <nuxt-link to="/portfolio" class="block px-2 py-1 mt-1 font-semibold rounded text-primary hover:text-primary sm:mt-0 sm:ml-2">
                Portfolio
              </nuxt-link>
            </li>
            <li @click="isOpen = !isOpen">
              <nuxt-link to="" class="block px-2 py-1 mt-1 font-semibold rounded text-primary hover:text-primary sm:mt-0 sm:ml-2">
             Blogs
              </nuxt-link>
            </li>
            <li @click="isOpen = !isOpen">
              <nuxt-link to="/about" class="block px-2 py-1 mt-1 font-semibold rounded text-primary hover:text-primary sm:mt-0 sm:ml-2">
                About
              </nuxt-link>
            </li>
            <li @click="isOpen = !isOpen">
              <nuxt-link to="/contact" class="block px-2 py-1 mt-1 font-semibold rounded text-primary hover:text-primary sm:mt-0 sm:ml-2">
                Contact
              </nuxt-link>
            </li>
            <!-- <li class="flex items-center justify-between">
              <h1>Color mode: {{ $colorMode.value }}</h1>
             <div class="flex items-center justify-between">
              <select v-model="$colorMode.preference">
                <option value="system">System</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="sepia">Sepia</option>
              </select>
             </div>
            </li> -->
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
