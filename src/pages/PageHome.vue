<template>
  <main class="pt-0 pb-6 lg:py-6">

    <OrderHeader :order-number="orderData.value?.header?.number" :order-serial-number="orderData.value?.header?.serial"
      :order-buyer="orderData.value?.header?.buyer" :order-buyer-contact="orderData.value?.header?.contact"
      :order-created-at="orderData.value?.header?.createdAt" :order-status="orderData.value?.header?.status"
      :order-currency="orderData.value?.header?.currency" :order-price="orderData.value?.header?.price" />
    <section class="mt-8">
      <div class="container mx-auto lg:px-0 px-4">
        <SupplierCard :supplier="orderData.value?.supplier" />
      </div>

    </section>
    <section class="mt-8">
      <div class="container mx-auto lg:px-0 px-4">
        <AppAccordion title="Addresses">
          <template #content>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <template v-for="address in orderData.value?.addresses" :key="address.id">
                <AddressCard :supplier="orderData.value?.supplier" :address="address" />
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
const { orderData } = storeToRefs(useOrderStore())
const { getOrderById } = useOrderStore();





onMounted(() => {
  getOrderById(1);
})

</script>
