<template>
  <div
    class="font-sans antialiased leading-10 tracking-widest text-gray-900 bg-gray-200 "
  >
    <AppHeader />
    <main class="">
      <Nuxt />
    </main>
    <!-- <AppFooter /> -->
  </div>
</template>

<script>
export default {

}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&family=Roboto:ital,wght@1,500&display=swap');

/* home route and active route will show in bold as it matches / and /about */
a.nuxt-link-active {
  font-weight: bold;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  /* color: #fdf25c;
  background-color: #1142ff; */
}
</style>
