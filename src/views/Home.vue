<template>
  <div class="home-main">
    <div class="home__repositories">
      <Repositories />
    </div>

    <Wall />
  </div>
</template>

<script>

import Repositories from '@/components/Repositories'
import Wall from '@/components/Wall'

export default {
  components: {
    Repositories,
    Wall
  }
}
</script>

<style lang="scss" scoped>
.home__repositories {
  margin-bottom: 20px;
}
</style>
