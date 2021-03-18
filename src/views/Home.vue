<template>
  <div class="home-main">
    <Repositories />

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

</style>
