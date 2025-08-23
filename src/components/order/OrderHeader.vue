<template>
  <header data-cy="order-header">
    <div class="container mx-auto px-0 md:px-6 ">
      <div class="flex items-start lg:flex-row flex-col">
        <div class="bg-primary-500 py-8 px-4 lg:p-4  md:rounded-r-lg min-w-full lg:min-w-[200px]">
          <h3 class="text-lg text-white font-normal leading-6">Pre-Order</h3>
          <p class="font-bold text-white text-2xl leading-8 mt-1" data-cy="order-number">{{ orderData.number }}</p>
          <p class="font-normal text-white text-xs mt-1" data-cy="order-serial">{{ orderSerialNumberStr }}</p>
        </div>
        <div class="w-full flex lg:flex-row flex-col justify-between lg:pl-6 lg:mt-0 mt-6 px-6 md:px-0">
          <div>
            <h2 class="font-semibold text-[1.25rem] text-neutral-700" data-cy="order-buyer-name">{{ orderData.buyer }}
            </h2>
            <OrderHeaderContact :order-buyer-contact="orderData.contact" />
          </div>
          <div class="lg:text-right lg:mt-0 mt-4 lg:ml-4 ml-0">
            <p class="text-neutral-500 text-[1.25rem] font-semibold" data-cy="order-price">{{ orderPriceStr }}</p>
            <p class="text-neutral-500 text-[1.25rem] font-semibold mt-1" :class="orderStatusClasses"
              data-cy="order-status">
              {{ orderData.status }}
            </p>
            <div class="flex items-center">
              <p class="text-neutral-500 text-xs font-normal mt-1" data-cy="order-created-at">{{ orderData.createdAt }}</p>
              <Popper :hover="true" placement="top" data-cy="order-tooltip">
                <span class=" block ml-1 transition-all cursor-pointer text-neutral-300 hover:-translate-y-1">
                  <AppIconSvg name="tip" size="16" />
                </span>
                <template #content>
                  <p class="text-xs text-white">Date and time of order creation</p>
                </template>
              </Popper>
            </div>
          </div>
        </div>
      </div>

    </div>
  </header>
</template>
<script setup>
import { computed } from 'vue'
import AppIconSvg from '../ui/AppIconSvg.vue'
import OrderHeaderContact from './OrderHeaderContact.vue'

const props = defineProps({
  orderData: {
    type: Object,
    default: {}
  },
  loading: {
    type: Boolean,
    default: false
  },
})

const orderSerialNumberStr = computed(() => `#ME${props.orderData.serial}`)
const orderPriceStr = computed(() => `${props.orderData.currency} ${props.orderData.price}`)
const orderStatusClasses = computed(() => {
  switch (props.orderData.status) {
    case 'Need to confirm':
      return 'text-success-500'
    case 'Canceled':
      return 'text-red-500'
    default:
      return 'text-neutral-500'
  }
})
</script>
