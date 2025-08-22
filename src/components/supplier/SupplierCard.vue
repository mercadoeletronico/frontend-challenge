<template>
  <AppCard category-title="Supplier" :title="supplier?.name" :text-bage="supplierCodeStr">
    <template #content>
      <div class="grid grid-cols-1 md:grid-cols-2 mt-4 gap-1 ">
        <ul>
          <li v-if="supplier?.document?.value">
            <AppContactLine icon="identification" :value="supplier.document.value" />
          </li>
          <li v-if="supplier?.address">
            <AppContactLine icon="pin" :value="supplier.address" class="mt-2 md:mt-1" />
          </li>

          <li v-if="supplier?.contact?.name">
            <AppContactLine icon="user" :value="supplier.contact.name" class="mt-2 md:mt-1" />
          </li>
        </ul>
        <ul>
          <li v-if="supplier.contact?.email">
            <AppContactLine icon="mail" type="email" :value="supplier.contact.email" />
          </li>
          <li v-if="supplier?.contact?.phone">
            <AppContactLine icon="phone" type="phone" :value="supplier.contact.phone" class="mt-2 md:mt-1" />
          </li>
          <li v-if="supplier?.contact?.fax">
            <AppContactLine icon="fax" type="phone" :value="supplier.contact.fax" class="mt-2 md:mt-1" />
          </li>
          <li v-if="supplier?.readAt">
            <AppContactLine icon="eye" :value="supplier.readAt" class="mt-2 md:mt-1" />
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
  supplier: {
    type: Object,
    default: {},
  },
})

const supplierCodeStr = computed(() => {
  if(!props.supplier?.code) return null
  return `#${props.supplier.code}`
})
</script>
