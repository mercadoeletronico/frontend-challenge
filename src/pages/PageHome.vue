<template>
  <main class="pt-0 pb-6 md:py-6 overflow-x-hidden" data-cy="order-page">
    <OrderHeaderSkeleton v-if="loading" />
    <OrderHeader v-else-if="!loading && orderData.value?.header" :order-data="orderData.value?.header" />
    <AppNoData v-else-if="!loading && !orderData.value?.header" class="col-span-3" message="No order found." />


    <section class="mt-8">
      <div class="container mx-auto px-6">
        <AppCardSkeleton v-if="loading" data-cy="supplier-card-skeleton" />
        <SupplierCard v-else-if="!loading && orderData.value?.supplier" :supplier="orderData.value.supplier" />
        <AppNoData v-else-if="!loading && !orderData.value?.supplier" class="col-span-3" message="No supplier found." />
      </div>
    </section>

    <section class="mt-8">
      <div class="container mx-auto px-6">
        <AppAccordion title="Addresses">
          <template #content>
            <div class="grid grid-cols-1 md:grid-cols-3 items-start gap-4 mt-4">
              <template v-if="loading">
                <AppCardSkeleton width-contact="100px" :show-badge="true" data-cy="address-card-skeleton" />
                <AppCardSkeleton width-contact="100px" :two-columns="false" data-cy="address-card-skeleton" />
                <AppCardSkeleton width-contact="100px" data-cy="address-card-skeleton" />
              </template>
              <template v-else-if="!loading && !orderData.value?.addresses?.length">
                <AppNoData class="col-span-3" message="No addresses found." />
              </template>
              <template v-else-if="!loading && orderData.value?.addresses">
                <AddressCard v-for="address in orderData.value.addresses" :key="address.id" :address="address"
                  data-cy="address-card" />
              </template>
            </div>
          </template>
        </AppAccordion>
      </div>
    </section>
  </main>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import AddressCard from '../components/addresses/AddressCard.vue';
import OrderHeader from '../components/order/OrderHeader.vue';
import OrderHeaderSkeleton from '../components/order/OrderHeaderSkeleton.vue';
import SupplierCard from '../components/supplier/SupplierCard.vue';
import AppAccordion from '../components/ui/AppAccordion.vue';
import AppCardSkeleton from '../components/ui/AppCardSkeleton.vue';
import AppNoData from '../components/ui/AppNoData.vue';
import { useOrderStore } from '../stores/order.store';


const { orderData, loading } = storeToRefs(useOrderStore())
const { getOrderById } = useOrderStore();





onMounted(() => {
  getOrderById(1);
})

</script>
