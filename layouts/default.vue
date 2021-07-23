<template>
  <div class="antialiased font-sans  leading-10 tracking-widest text-gray-900 bg-gray-200 ">
    <AppHeader />
    <main class="pt-16">
      <Nuxt />
    </main>
    <AppFooter />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Monoton&family=Philosopher:wght@700&family=Varela&display=swap');
html {
  scroll-behavior: smooth;
}
/* home route and active route will show in bold as it matches / and /about */
a.nuxt-link-active {
  font-weight: bold;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: #FDF25C;
  background-color:#1142FF;
}

</style>
