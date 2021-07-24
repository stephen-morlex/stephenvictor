<template>
  <header class="absolute top-0 w-full font-sans bg-yellow-300 shadow-md z-100">
    <div class="container justify-between mx-auto sm:flex sm:items-center sm:px-32 sm:py-2">
      <div class="flex items-center justify-between px-4 py-3 sm:p-0">
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
        <nav>
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>Articles</li>
            <li>Contact</li>
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
