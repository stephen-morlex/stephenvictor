<template>
  <div id="contact">
    <main class="container mx-auto mt-8 px-6">
      <div class="text-center">
        <h1 class="font-san text-5xl font-bold">
          Contact
        </h1>
        <p class="tracking-widest font-semibold border-b-2 pb-6 border-gray-300">
          <span class="text-primary font-bold tracking-widest text-2xl">Hey!
          </span> let me help you build and design your product
        </p>
      </div>
      <div class="mt-8 text-center tracking-widest">
        <ul>
          <li>+254725652675 <span class="text-primary">|</span> +211928453098</li>
          <li class="my-8">Stephenvicson@gmail.com</li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
import { gsap } from 'gsap'
export default {
  data () {
    return {

    }
  },
  mounted () {
    gsap.from('.hero', { x: -400, ease: 'bounce.in', duration: 1 })
  }
}

</script>
<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Allura&display=swap');
</style>
