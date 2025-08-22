<template>
  <svg :width="size" :height="size">
    <use :href="iconId"></use>
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: '16',
  },
})


const iconId = computed(() => `/icons/sprite.svg#icon-${props.name}`);

</script>
