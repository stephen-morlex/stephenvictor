<template>
  <div id="heroComponent">
   <div class="grid items-center grid-cols-2 gap-4 ">
     <div class="hero-content">
        <ul class="self-center inline-block w-auto">
                    <li>
                     <span class="relative inline-block w-full h-16 mt-24 -ml-2 bg-yellow-300"></span>
                     <span class="leading-normal tracking-widest text-7xl font-hero">Hey, I'm </span>
                    </li>
        </ul>
        <p class="text-5xl leading-loose tracking-widest text-left font-body font-hero">Stephen Victor a full-stack developer</p>
     </div>
     </div>
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
.hero-content h1{

 }
</style>
