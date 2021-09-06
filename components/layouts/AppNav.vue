<template>
  <div class="absolute right-0 z-50">
    <nav class="sticky bg-transparent">
      <ul class="items-baseline justify-center block font-bold text-gray-400 font-hero">
        <li class="px-2 mr-4 rounded-sm shadow-md hover:shadow hover:text-grey-300">
          <a href="/" class="cursor-pointer">
            Home
          </a>
        </li>
        <li class="px-2 mr-4 rounded-sm shadow-md hover:shadow hover:text-grey-300">
          <NuxtLink to="/projects" class="cursor-pointer">
            Projects
          </NuxtLink>
        </li>
        <li class="px-2 mr-4 rounded-sm shadow-md hover:shadow hover:text-grey-300">
          <NuxtLink to="/articles" class="cursor-pointer">
            Articles
          </NuxtLink>
        </li>
        <li class="px-2 mr-4 rounded-sm shadow-md hover:shadow hover:text-grey-300">
          <NuxtLink to="/contact" class="cursor-pointer">
            Contact
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
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
