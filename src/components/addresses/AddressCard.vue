<template>

  <AppCard :category-title="address?.label" :title="address?.name" :text-bage="addressCodeStr">
    <template #content>
      <div class="grid grid-cols-1  mt-4 gap-1 " :class="{
        'md:grid-cols-2': activeTwoColumns
      }">
        <ul>
          <li v-if="address?.address">
            <AppContactLine icon="pin" :value="address.address" class="mt-2 md:mt-1" />
          </li>
          <li v-if="address?.contact?.name">
            <AppContactLine icon="user" :value="address.contact.name" class="mt-2 md:mt-1" />
          </li>
        </ul>
        <ul>
          <li v-if="address.contact?.email">
            <AppContactLine icon="mail" type="email" :value="address.contact.email" />
          </li>
          <li v-if="address?.contact?.phone">
            <AppContactLine icon="phone" type="phone" :value="address.contact.phone" class="mt-2 md:mt-1" />
          </li>
          <li v-if="address?.contact?.fax">
            <AppContactLine icon="fax" type="phone" :value="address.contact.fax" class="mt-2 md:mt-1" />
          </li>
          <li v-if="address?.readAt">
            <AppContactLine icon="eye" :value="address.readAt" class="mt-2 md:mt-1" />
          </li>

        </ul>
      </div>

    </template>

  </AppCard>
</template>
<script setup>
import { computed } from 'vue';
import AppCard from '../ui/AppCard.vue'
import AppContactLine from '../ui/AppContactLine.vue';
const props = defineProps({
  address: {
    type: Object,
    default: {},
  },
  twoColumns: {
    type: Boolean,
    default: true
  }
})

const addressCodeStr = computed(() => {
  if (!props.address?.code) return null
  return `#${props.address.code}`
})


const activeTwoColumns = computed(() => {
  return props.address.label !== 'Bill to'
})

</script>
