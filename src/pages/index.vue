<template>
  <CardPreOrder v-if="headerData" :header="headerData.header" />
  <CardSupplierOrder v-if="headerData" :supplier="headerData.supplier" />
  <AccordionAdressesOrder v-if="headerData" :addresses="headerData.addresses" />
  <div v-else>Carregando...</div>


</template>

<script setup>
import { ref, onMounted } from 'vue'
import { usePreOrder } from '@/composables/api/usePreOrder'

import CardPreOrder from '@/components/cards/PreOrder.vue'
import CardSupplierOrder from '@/components/cards/SupplierOrder.vue'
import AccordionAdressesOrder from '@/components/accordion/AdressesOrder.vue'


defineOptions({
  name: 'HomePage'
})

const headerData = ref(null)
const { fetchPreOrder } = usePreOrder()

onMounted(async () => {
  headerData.value = await fetchPreOrder()
  console.log(headerData.value.header)
})
</script>
