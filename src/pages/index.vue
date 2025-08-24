<template>
  <div v-if="headerData" class="p-0 lg:p-6 space-y-8">
    <CardPreOrder class="lg:pr-0 pr-2" :header="headerData.header" />
    <CardSupplierOrder class="lg:m-0 m-2" :supplier="headerData.supplier" />
    <div class="mt-8">
      <AccordionAdressesOrder class="lg:m-0 m-2" :addresses="headerData.addresses" />
    </div>
  </div>
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
