<template>
  <div id="app">
    <navbar />

    <div class="app-main">
      <router-view :key="$route.fullPath" />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',

  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import '~styles/app';
</style>

<style lang="scss">
.app-main {
  padding: 20px 10px
}
</style>
