<template>
  <div id="portfolio" class="pb-12">
    <svg class="sm:-mt-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,320L48,304C96,288,192,256,288,224C384,192,480,160,576,138.7C672,117,768,107,864,128C960,149,1056,203,1152,234.7C1248,267,1344,277,1392,282.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" /></svg>
    <section class="align-center">
      <h1 class="font-san text-5xl font-bold text-center sm:-mt-32">
        Portfolio
      </h1>
    </section>
    <section class="container mx-auto sm:items-center sm:px-32 sm:py-6 mt-4">
      <div class="p-6 sm:grid sm:gap-4 sm:grid-cols-3">
        <div class="bg-white rounded-md mb-4 sm:mb-0">
          <div class="image">
            <img class="w-full" src="../../assets/images/sswoco.png" alt="" srcset="">
          </div>
          <div class="porfolio-content text-center p-6">
            <h1 class="font-semibold mb-2 tracking-widest text-primary">
              <a class="" href="https://sswoco.org/">SSWOCO website</a>
            </h1>
            <p>Web application</p>
          </div>
        </div>
        <div class="bg-white rounded-md mb-4 sm:mb-0">
          <div class="image">
            <img class="w-full" src="../../assets/images/qfc.png" alt="" srcset="">
          </div>
          <div class="porfolio-content text-center p-6">
            <h1 class="font-semibold mb-2 tracking-widest text-primary">
              <a href="http://qfc.co.ke/">QFC Website</a>
            </h1>
            <p>Web application</p>
          </div>
        </div>
        <div class="bg-white rounded-md">
          <div class="image">
            <img class="w-full" src="../../assets/images/triocoders.png" alt="" srcset="">
          </div>
          <div class="porfolio-content text-center p-6">
            <h1 class="font-semibold mb-2 tracking-widest text-primary">
              <a href="http://triocoders.herokuapp.com/about-us/">Triocoders Website</a>
            </h1>
            <p>Web application</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'PortfolioHomeComponent'
}
</script>

<style lang="css" scoped>
  .slick-dots{
    text-align: center;
  }
</style>
