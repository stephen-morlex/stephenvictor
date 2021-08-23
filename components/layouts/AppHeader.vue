<template>
  <div class="absolute nav">
    <nav class>
      <ul class="flex items-baseline justify-center font-bold text-blue-800">
        <li class="px-2 mr-4 bg-yellow-300 rounded-sm hover:shadow hover:bg-blue-800 hover:text-yellow-400 ">
          <NuxtLink to="/" class="cursor-pointer">
            Home
          </NuxtLink>
        </li>
        <li class="px-2 mr-4 bg-yellow-300 rounded-sm hover:shadow hover:bg-blue-800 hover:text-yellow-400">
          <NuxtLink to="/projects" class="cursor-pointer">
            Projects
          </NuxtLink>
        </li>
        <li class="px-2 mr-4 bg-yellow-300 rounded-sm hover:shadow hover:bg-blue-800 hover:text-yellow-400">
          <NuxtLink to="/articles" class="cursor-pointer">
            Articles
          </NuxtLink>
        </li>
        <li class="px-2 bg-yellow-300 rounded-sm hover:shadow hover:bg-blue-800 hover:text-yellow-400">
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
