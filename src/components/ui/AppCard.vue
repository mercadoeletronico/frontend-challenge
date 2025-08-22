<template>
  <div class="rounded-lg bg-white p-4 shadow-level-1">
    <div>
      <p class="text-neutral-500 text-xs font-normal">{{ categoryTitle }}</p>
      <div class="flex items-center mt-1">
        <h3 class="text-sm text-neutral-700 font-semibold leading-[120%]">{{ title }}</h3>

        <AppBadge v-if="textBage" class="ml-2" :text="textBage" />
      </div>
    </div>
    <slot name="content"></slot>
  </div>
</template>

<script setup>
import AppBadge from './AppBadge.vue'

const props = defineProps({
  categoryTitle: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },


  textBage: {
    type: String,
    default: '',
  }
})
</script>
