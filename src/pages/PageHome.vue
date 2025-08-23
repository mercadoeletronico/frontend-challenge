<template>
  <main class="pt-0 pb-6 md:py-6 overflow-x-hidden">
    <OrderHeaderSkeleton v-if="loading" />
    <OrderHeader v-else :order-data="orderData.value?.header" />

    <section class="mt-8">
      <div class="container mx-auto px-6">
        <AppCardSkeleton v-if="loading" />
        <SupplierCard v-else :supplier="orderData.value?.supplier" />
      </div>
    </section>
    <section class="mt-8">
      <div class="container mx-auto px-6">
        <AppAccordion title="Addresses">
          <template #content>
            <div class="grid grid-cols-1 md:grid-cols-3 items-start gap-4 mt-4">
              <template v-if="loading">
                <AppCardSkeleton width-contact="100px" :show-badge="true" />
                <AppCardSkeleton width-contact="100px" :two-columns="false" />
                <AppCardSkeleton width-contact="100px" />
              </template>
              <template v-else-if="!loading && orderData.value?.addresses">
                <AddressCard v-for="address in orderData.value.addresses" :key="address.id" :address="address" />
              </template>
            </div>
          </template>
        </AppAccordion>
      </div>
    </section>
  </main>
</template>
<script setup>
import { onMounted } from 'vue';
import OrderHeader from '../components/order/OrderHeader.vue'
import { useOrderStore } from '../stores/order.store';
import { storeToRefs } from 'pinia';
import SupplierCard from '../components/supplier/SupplierCard.vue';
import AddressCard from '../components/addresses/AddressCard.vue';
import AppAccordion from '../components/ui/AppAccordion.vue';
import AppCardSkeleton from '../components/ui/AppCardSkeleton.vue';
import OrderHeaderSkeleton from '../components/order/OrderHeaderSkeleton.vue';



const { orderData, loading } = storeToRefs(useOrderStore())
const { getOrderById } = useOrderStore();





onMounted(() => {
  getOrderById(1);
})

</script>
