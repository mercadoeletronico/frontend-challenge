<template>
  <a
    v-if="contactIsLink"
    :href="linkUrl"
    class="text-neutral-500 text-xs font-normal flex items-center transition-all hover:text-primary-500"
    >{{ contactValue }}</a
  >
  <span v-else class="text-neutral-500 text-xs font-normal flex items-center">{{
    contactValue
  }}</span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  contactType: {
    type: String,
    required: true,
    validator: (value) => ['email', 'phone', 'name', 'fax'].includes(value),
  },

  contactValue: {
    type: String,
    default: 'Contact',
  },

  contactIcon: {
    type: String,
    default: null,
  },
})

const contactIsLink = computed(() => ['email', 'phone'].includes(props.contactType))

const linkUrl = computed(() => {
  switch (props.contactType) {
    case 'email':
      return `mailto:${props.contactValue}`
    case 'phone':
      return `tel:+1${props.contactValue.replace(/[^0-9+]/g, '')}`
    default:
      return null
  }
})
</script>
