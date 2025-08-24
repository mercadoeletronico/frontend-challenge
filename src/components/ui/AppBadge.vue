<template>
  <div class="py-1 px-[0.375rem] rounded-lg bg-primary-50 flex items-center justify-center">
    <span class="text-primary-500 text-xs font-medium">{{ text }}</span>
  </div>
</template>
<script setup>
const props = defineProps({
  text: {
    type: String,
    default: 'Badge',
  },
})
</script>
