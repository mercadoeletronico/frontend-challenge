<template>
  <main class="pt-0 lg:pt-6">
    <OrderHeader />
  </main>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import OrderHeader from '../components/order/OrderHeader.vue'
import {useOrderStore} from '../stores/order.store';
const {getOrderById} = useOrderStore();





onMounted(()=>{
  getOrderById(1);
})

</script>
