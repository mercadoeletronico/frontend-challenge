<template>

  <a
    v-if="isLink"
    :href="linkUrl"
    class="text-neutral-500 text-xs font-normal flex items-center transition-all hover:text-primary-500"
    >{{ value }}</a
  >
  <span v-else class="text-neutral-500 text-xs font-normal flex items-center">{{
    value
  }}</span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    required: true,
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
