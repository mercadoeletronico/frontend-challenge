<template>
  <div class="rounded-lg bg-white p-4 shadow-level-1">
    <Skeleton width="120px" height="16px" />
    <div class="flex items-center mt-1">
      <Skeleton width="140px" height="16px" />
      <Skeleton width="60px" height="24px" class="ml-2 rounded-lg" v-if="showBadge" />
    </div>
    <div class="grid grid-cols-1  mt-4 gap-1 " :class="{ 'md:grid-cols-2': twoColumns }">
      <Skeleton v-for="i in 3" :key="i" width="300px" height="16px" />
      <Skeleton v-for="i in 3" :key="i" width="300px" height="16px" />
    </div>
  </div>
</template>
<script setup>
import { Skeleton } from '@brayamvalero/vue3-skeleton';
import '@brayamvalero/vue3-skeleton/dist/style.css'

const props = defineProps({
  showBadge: {
    type: Boolean,
    default: false
  },
  twoColumns: {
    type: Boolean,
    default: true
  }
})


</script>
