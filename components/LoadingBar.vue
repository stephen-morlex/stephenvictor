<template>
  <div v-if="loading" class="loading-page">
    <div class="w-full max-w-sm p-4 mx-auto border border-blue-300 rounded-md shadow">
      <div class="flex space-x-4 animate-pulse">
        <div class="w-12 h-12 bg-blue-400 rounded-full" />
        <div class="flex-1 py-1 space-y-4">
          <div class="w-3/4 h-4 bg-blue-400 rounded" />
          <div class="space-y-2">
            <div class="h-4 bg-blue-400 rounded" />
            <div class="w-5/6 h-4 bg-blue-400 rounded" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style scoped>
  .loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding-top: 200px;
    font-size: 30px;
    font-family:rgba(116, 17, 17, 0.8)
  }
</style>
