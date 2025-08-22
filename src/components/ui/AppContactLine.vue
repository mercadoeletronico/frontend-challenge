<template>
  <div class="flex items-center text-neutral-500":class="isLink && linkClasses">
  <AppIconSvg v-if="icon" :name="icon" class="mr-1 transition-all"/>
  <a
    v-if="isLink"
    :href="linkUrl"
    class=" text-xs font-normal flex items-center  "
    >{{ value }}</a
  >
  <span v-else class=" text-xs font-normal flex items-center">{{
    value
  }}</span>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import AppIconSvg from './AppIconSvg.vue'

const props = defineProps({
  type: {
    type: String,
    default: 'name',
    validator: (value) => ['email', 'phone', 'name', 'fax'].includes(value),
  },

  value: {
    type: String,
    default: 'Contact',
  },

  icon: {
    type: String,
    default: null,
  },
})

const isLink = computed(() => ['email', 'phone'].includes(props.type))
const linkClasses = computed(() => 'hover:text-primary-500')

const linkUrl = computed(() => {
  switch (props.type) {
    case 'email':
      return `mailto:${props.value}`
    case 'phone':
      return `tel:+1${props.value.replace(/[^0-9+]/g, '')}`
    default:
      return null
  }
})
</script>
