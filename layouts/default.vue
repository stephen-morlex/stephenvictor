<template>
  <div
    class="relative font-sans antialiased leading-10 tracking-widest text-gray-900 bg-gray-200 "
  >
    <AppNav />
    <main class="z-10">
      <Nuxt />
    </main>
    <AppFooter />
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
  font-size: 1.5rem;
}

</style>
