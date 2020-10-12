<template>
  <div id="services" class="bg-white">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#EDF2F7" fill-opacity="1" d="M0,96L48,85.3C96,75,192,53,288,69.3C384,85,480,139,576,160C672,181,768,171,864,144C960,117,1056,75,1152,90.7C1248,107,1344,181,1392,218.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" /></svg>
    <section class="align-center sm:-mt-32">
      <h1 v-animate-onscroll.repeat="{ down: 'swing' }" class="font-san text-5xl font-bold text-center">
        What I Do
      </h1>
    </section>
    <section class="container mx-auto sm:items-center sm:px-32 sm:py-6 mt-4 sm:grid sm:gap-4 sm:grid-cols-3">
      <div class="p-6 sm:p-0">
        <div class="title flex flex-col items-center">
          <div class="rounded-full h-32 w-32 flex items-center justify-center bg-blue-100">
            <svg
              class="w-20 h-20 fill-current text-primary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
            >
              <path d="M60 8H4c-2.1 0-4 1.9-4 4v26.7c0 2.1 1.9 4 4 4h25.3v8h-8c-1.6 0-2.7 1.1-2.7 2.7s1.1 2.7 2.7 2.7h21.3c1.6 0 2.7-1.1 2.7-2.7s-1.1-2.7-2.7-2.7h-8v-8H60c2.1 0 4-1.9 4-4V12c0-2.1-1.9-4-4-4zm-1.3 29.3H5.3v-24h53.3v24z" /><path d="M46.1 25.3L42.6 29c-1.1 1.1-1.1 2.7 0 3.7.5.5 1.3.8 1.9.8.8 0 1.3-.3 1.9-.8l5.3-5.3c1.1-1.1 1.1-3.2 0-4.3l-5.3-5.3c-1.1-1.1-2.7-1.1-3.7 0-1.1 1.1-1.1 2.7 0 3.7l3.4 3.8zM18.4 33.3c.5.5 1.3.8 1.9.8s1.3-.3 1.9-.8c1.1-1.1 1.1-2.7 0-3.7l-3.7-3.7 3.5-3.5c1.1-1.1 1.1-2.7 0-3.7-1.1-1.1-2.7-1.1-3.7 0L12.8 24c-1.1 1.1-1.1 3.2 0 4.3l5.6 5zM28.8 34.4c.3 0 .5.3 1.1.3 1.1 0 2.1-.5 2.4-1.6l4.8-12c.5-1.3 0-2.9-1.6-3.5-1.3-.5-2.9 0-3.5 1.6l-4.8 12c-.3 1.1.3 2.7 1.6 3.2z" /></svg>
          </div>
          <h3  v-animate-onscroll="{down: 'animated flip'}" class="mt-4 uppercase text-2xl font-semibold">
            Web Application
          </h3>
        </div>
        <div class="content mt-4 text-center">
          Fast, Responsive and User-friendly web applications
        </div>
      </div>
      <div class="p-6 sm:p-0">
        <div class="title flex flex-col items-center">
          <div class="rounded-full h-32 w-32 flex items-center justify-center bg-blue-100">
            <svg
              class="w-20 h-20 fill-current text-primary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
            >
              <path d="M44.8 0H19.2c-3.2 0-5.9 2.9-5.9 6.2v51.7c0 3.5 2.7 6.2 5.9 6.2h25.7c3.2 0 5.9-2.9 5.9-6.2V6.2C50.7 2.9 48 0 44.8 0zm.6 58.1c0 .5-.3.8-.5.8H19.2c-.3 0-.5-.3-.5-.8V6.2c0-.5.3-.8.5-.8h25.7c.3 0 .5.3.5.8v51.9z" /><circle cx="32" cy="53.6" r="2.7" /><path d="M34.7 10.7h-5.3c-1.6 0-2.7 1.1-2.7 2.7s1.1 2.7 2.7 2.7h5.3c1.6 0 2.7-1.1 2.7-2.7s-1.1-2.7-2.7-2.7z" /></svg>
          </div>
          <h3 class="mt-4 uppercase text-2xl font-semibold">
            Mobile Application
          </h3>
        </div>
        <div class="content mt-4 text-center">
          Android, IOS mobile apps and  Hybrid App.
        </div>
      </div><div class="p-6 sm:p-0">
        <div class="title flex flex-col items-center">
          <div class="rounded-full h-32 w-32 flex items-center justify-center bg-blue-100">
            <svg
              class="w-20 h-20 fill-current text-primary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
            >
              <path d="M58.7 2.7H5.3C2.4 2.7 0 5.1 0 8v34.7C0 45.6 2.4 48 5.3 48h17.3l-2.4 8H16c-1.6 0-2.7 1.1-2.7 2.7s1.1 2.7 2.7 2.7h32c1.6 0 2.7-1.1 2.7-2.7S49.6 56 48 56h-4.3l-2.4-8h17.3c2.9 0 5.3-2.4 5.3-5.3V8c.1-2.9-2.3-5.3-5.2-5.3zM38.1 56H25.9l2.4-8h7.5l2.3 8zM5.3 42.7V8h53.3v34.7H5.3z" /></svg>
          </div>
          <h3 class="mt-4 uppercase text-2xl font-semibold">
            Desktop Application
          </h3>
        </div>
        <div class="content mt-4 text-center">
          Secure and durable desktop appilcation
        </div>
      </div><div class="p-6 sm:p-0">
        <div class="title flex flex-col items-center">
          <div class="rounded-full h-32 w-32 flex items-center justify-center bg-blue-100">
            <svg
              class="w-20 h-20 fill-current text-primary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
            >
              <path d="M53.3 38.7V26.1 13.3C53.3 5.9 44 0 32 0S10.7 5.9 10.7 13.3v37.3C10.7 58.1 20.3 64 32 64s21.3-5.9 21.3-13.3v-12zm-21.3.2c6.4 0 12-1.6 16-4.3v4.3c-.3 3.5-6.7 7.5-16 7.5s-15.7-4-16-7.5v-4.3c4 2.7 9.9 4.3 16 4.3zm-16-13v-3.7c4 2.7 9.6 4.5 16 4.5s12-1.6 16-4.5v3.7c0 1.6-1.3 2.9-2.4 3.7-2.9 2.4-8 3.7-13.6 3.7-5.3 0-10.4-1.3-13.6-3.7-1.1-.8-2.4-1.9-2.4-3.7zM32 5.3c9.3 0 16 4.3 16 8s-6.7 8-16 8-16-4.3-16-8 6.7-8 16-8zm0 53.4c-9.1 0-16-4.3-16-8v-3.2c4 2.7 9.6 4.3 16 4.3s12-1.6 16-4.3v3.2c0 3.7-6.9 8-16 8z" /></svg>
          </div>
          <h3 class="mt-4 uppercase text-2xl font-semibold">
            Database Design
          </h3>
        </div>
        <div class="content mt-4 text-center">
          Secured, Availability, and fast
        </div>
      </div><div class="p-6 sm:p-0">
        <div class="title flex flex-col items-center">
          <div class="rounded-full h-32 w-32 flex items-center justify-center bg-blue-100">
            <svg
              class="w-20 h-20 fill-current text-primary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
            >
              <path d="M63.2 38.8l-6.1-6.1-6.9 3.2c-1.3.5-1.9 2.1-1.3 3.5.5 1.3 2.1 1.9 3.5 1.3l1.1-.5c-1.6 4.3-4.5 8-8.3 10.4V42c0-5.6-4.3-10.1-9.3-10.1h-.5c3.5-1.3 5.6-4.5 5.6-8.3 0-4.8-4-8.8-8.8-8.8s-8.8 4-8.8 8.8c0 3.7 2.4 6.9 5.9 8.3H28c-5.1 0-9.3 4.5-9.3 10.1v8c-3.7-2.7-6.7-6.7-8-11.2-.5-1.3-1.9-2.1-3.5-1.6-1.3.5-2.1 1.9-1.6 3.5 3.7 11.5 14.7 19.5 26.7 19.5s22.4-7.5 26.4-18.4l.8.8c.5.5 1.3.8 1.9.8s1.3-.3 1.9-.8c1-1.1 1-2.7-.1-3.8zM32.3 20.4c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5-3.5-1.6-3.5-3.5 1.3-3.5 3.5-3.5zM24 53.5v-11c0-2.7 1.9-4.8 4-4.8h2.4l-1.1 4.5 2.7 8.5 2.7-8.5-1.1-4.8H36c2.1 0 4 2.1 4 4.8v11.2h.3c-2.4 1.1-5.3 1.6-8 1.6-3 .1-5.6-.7-8.3-1.5z"/><path d="M14.4 28.4c1.3-.8 1.9-2.4 1.1-3.7-.8-1.3-2.4-1.9-3.7-1.1l-.8.5c3.2-8.8 11.7-14.9 21.3-14.9 10.4 0 19.7 7.2 22.1 17.3.3 1.3 1.9 2.4 3.2 1.9 1.3-.3 2.4-1.9 1.9-3.2C56.3 12.7 45.1 3.9 32 3.9c-12.3 0-22.9 8-26.7 19.5l-.8-.8c-1.1-1.1-2.7-1.1-3.7 0s-1.1 2.7 0 3.7l6.1 6.1 7.5-4z" /></svg>
          </div>
          <h3 class="mt-4 uppercase text-2xl font-semibold">
            Consultancy Services
          </h3>
        </div>
        <div class="content mt-4 text-center">
          Software consultation and ICT support
        </div>
      </div><div class="p-6 sm:p-0">
        <div class="title flex flex-col items-center">
          <div class="rounded-full h-32 w-32 flex items-center justify-center bg-blue-100">
            <svg
              class="w-20 h-20 fill-current text-primary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
            >
              <path d="M50.7 39.8c1.6 0 2.7-1.1 2.7-2.7V26.6c0-1.6-1.1-2.7-2.7-2.7H40c-1.6 0-2.7 1.1-2.7 2.7v2.7H26.7v-2.7c0-1.6-1.1-2.7-2.7-2.7h-2.7v-8H24c1.6 0 2.7-1.1 2.7-2.7V2.7C26.7 1.1 25.6 0 24 0H13.3c-1.6 0-2.7 1.1-2.7 2.7v10.7c0 1.6 1.1 2.7 2.7 2.7H16v8h-2.7c-1.6 0-2.7 1.1-2.7 2.7v10.7c0 1.6 1.1 2.7 2.7 2.7H24c1.6 0 2.7-1.1 2.7-2.7v-2.7h10.7v2.7c0 1.6 1.1 2.7 2.7 2.7h2.7v8H40c-1.6 0-2.7 1.1-2.7 2.7v10.7c0 1.6 1.1 2.7 2.7 2.7h10.7c1.6 0 2.7-1.1 2.7-2.7V50.5c0-1.6-1.1-2.7-2.7-2.7H48v-8h2.7zM16 5.3h5.3v5.3H16V5.3zm5.3 29.2H16v-5.3h5.3v5.3zM48 58.4h-5.3v-5.3H48v5.3zm-5.3-29.2H48v5.3h-5.3v-5.3z" /></svg>
          </div>
          <h3 class="mt-4 uppercase text-2xl font-semibold">
            UI and UX Design
          </h3>
        </div>
        <div class="content mt-4 text-center">
          Latest trend design with professional look
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ServicesComponent'

}
</script>

<style lang="css" scoped>

</style>
