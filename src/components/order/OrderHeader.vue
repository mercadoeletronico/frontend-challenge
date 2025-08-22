<template>
  <header>
    <div class="container mx-auto px-4">
      <div class="flex items-start lg:flex-row flex-col">
        <div class="bg-primary-500 p-4 rounded-r-lg min-w-full lg:min-w-[200px]">
          <h3 class="text-lg text-white font-normal leading-6">Pre-Order</h3>
          <p class="font-bold text-white text-2xl leading-8 mt-1">{{ orderNumber }}</p>
          <p class="font-normal text-white text-xs mt-1">{{ orderSerialNumberStr }}</p>
        </div>
        <div class="flex-1 flex lg:flex-row flex-col justify-between lg:pl-6 lg:mt-0 mt-6">
          <div>
            <h2 class="font-semibold text-[1.25rem] text-neutral-700">{{ orderBuyer }}</h2>
            <div class="mt-3">
              <AppContactLine :contact-value="orderBuyerContact.name" />
              <div class="flex items-center mt-1">
                <AppContactLine
                  contact-type="email"
                  :contact-url="orderBuyerContact.email"
                  :contact-value="orderBuyerContact.email"
                />
                <AppContactLine
                  class="ml-4"
                  contact-type="phone"
                  :contact-url="orderBuyerContact.phone"
                  :contact-value="orderBuyerContact.phone"
                />
                <AppContactLine
                  class="ml-4"
                  contact-type="phone"
                  :contact-url="orderBuyerContact.fax"
                  :contact-value="orderBuyerContact.fax"
                />
              </div>
            </div>
          </div>
          <div class="lg:text-right lg:mt-0 mt-4 lg:ml-4 ml-0">
            <p class="text-neutral-500 text-[1.25rem] font-semibold">{{ orderPriceStr }}</p>
            <p
              class="text-neutral-500 text-[1.25rem] font-semibold mt-1"
              :class="orderStatusClasses"
            >
              {{ orderStatus }}
            </p>
            <p class="text-neutral-500 text-xs font-normal mt-1">{{ orderCreatedAt }}</p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import { computed } from 'vue'
import AppContactLine from '../ui/AppContactLine.vue'

const props = defineProps({
  orderNumber: {
    type: String,
    default: '0000000000',
  },
  orderSerialNumber: {
    type: String,
    default: '00000000',
  },
  orderBuyer: {
    type: String,
    default: 'Buyer',
  },
  orderCurrency: {
    type: String,
    default: 'USD',
  },
  orderPrice: {
    type: Number,
    default: 0,
  },
  orderStatus: {
    type: String,
    default: 'N/A',
    validator: (value) => ['Need to confirm', 'Canceled', 'N/A'].includes(value),
  },
  orderCreatedAt: {
    type: String,
    default: 'Created at 2025-22-08T10:00:00.382',
  },
  orderBuyerContact: {
    type: Object,
    default: {
      email: 'buyer@example.com',
      phone: '000-000-0000',
      address: '123 Street, City, Country',
      name: 'Buyer (John Doe)',
      fax: '000-000-0000',
    },
  },
})

const orderSerialNumberStr = computed(() => `#ME${props.orderSerialNumber}`)
const orderPriceStr = computed(() => `${props.orderCurrency} ${props.orderPrice}`)

const orderStatusClasses = computed(() => {
  switch (props.orderStatus) {
    case 'Need to confirm':
      return 'text-success-500'
    case 'Canceled':
      return 'text-red-500'
    default:
      return 'text-neutral-500'
  }
})
</script>
