<template>
  <CardPreOrder v-if="headerData" :header="headerData.header" />
  <CardSupplierOrder v-if="headerData" :supplier="headerData.supplier" />
  <div v-else>Carregando...</div>


</template>

<script setup>
import { ref, onMounted } from 'vue'
import CardPreOrder from '@/components/cards/PreOrder.vue'
import CardSupplierOrder from '@/components/cards/SupplierOrder.vue'
import { usePreOrder } from '@/composables/api/usePreOrder'

defineOptions({
  name: 'HomePage'
})

const headerData = ref(null)
const { fetchPreOrder } = usePreOrder()

onMounted(async () => {
  // Aqui você pode tratar o retorno da API conforme necessário
  headerData.value = await fetchPreOrder()
  console.log(headerData.value.header)
})
</script>
