<template>
  <div class="container h-screen px-64 mx-auto">
    <div class="items-center justify-center text-center ">
      <h1 v-if="error.statusCode === 404">
        Page not found
      </h1>
      <h1 v-else>
        An error occurred
      </h1>
      <NuxtLink to="/">
        <h1 class="font-bold text-7xl">
          Home page
        </h1>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&family=Roboto:ital,wght@1,500&display=swap');
</style>
