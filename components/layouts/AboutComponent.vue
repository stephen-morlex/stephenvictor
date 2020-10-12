<template>
  <div id="about">
    <main class="container mx-auto sm:mt-8 px-6 sm:flex sm:items-center sm:px-32 sm:py-6">
      <h1>hey</h1>
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
