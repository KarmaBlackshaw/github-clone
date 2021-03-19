<template>
  <div>
    <template v-for="i in 5">
      <ActivtyCard :key="i" />

      <base-hr
        v-if="i < 5"
        :key="i"
        class="mx-4"
      />
    </template>
  </div>
</template>

<script>
import ActivtyCard from '@/components/ActivityCard'

export default {
  components: {
    ActivtyCard
  }
}
</script>
