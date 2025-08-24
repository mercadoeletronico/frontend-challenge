<template>
  <div class="flex lg:h-[110px] bg-whiteoverflow-hidden w-full border-none">
    <div
      class="bg-[#1052E0] rounded-r-lg text-white flex flex-col items-left justify-center px-2 lg:px-6 py-3  min-w-[140px]">
      <span class="text-xs font-semibold uppercase">Pre-Order</span>
      <span class="text-2xl font-bold">{{ header.number }}</span>
      <span class="text-xs">#ME{{ header.serial }}</span>
    </div>
    <div class="flex-1 flex flex-col justify-between pl-6 pb-[30px]">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between">
        <div class="mb-2 md:mb-0">
          <div class="text-lg font-semibold text-gray-800">{{ header.buyer }}</div>
          <div class=" items-center text-gray-500 text-sm mt-1">
            <span class="mr-4">
              <font-awesome-icon icon="fa-regular fa-user" />
              {{ header?.contact?.name }}
            </span>
            <div>
              <span class="mr-4"><font-awesome-icon class="pr-1" icon="fa-regular fa-envelope" />{{
                header?.contact?.email
                }}</span>
              <span class="mr-4"><font-awesome-icon icon="fa-solid fa-phone" /> {{ header?.contact?.phone }}</span>
              <span><font-awesome-icon icon="fa-solid fa-fax" /> {{ header?.contact?.fax }}</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-end text-2xl">
          <div class="flex">
            <span class="font-semibold text-[#566574]">{{ header.currency }}</span>
            <span class="font-semibold text-[#566574] ml-1">{{ header.price }}</span>
          </div>
          <div class="flex flex-col w-full items-end">
            <div>
              <span class="text-green-600 font-semibold text-xl">{{ header.status }}</span>
            </div>
            <div class="text-gray-500 text-xs">
              <span>Created at {{ formatDate(header.createdAt) }}</span>
              <span class="ml-1 cursor-pointer"><font-awesome-icon icon="fa-solid fa-circle-info" /></span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center mt-2 text-xs text-gray-500"></div>
    </div>
  </div>
</template>

<script setup>
import { formatDate } from '@/utils/dateUtils.js'
import { watch } from 'vue'

const props = defineProps({
  header: {
    type: Object,
    required: true
  }
})


watch(props, (newVal) => {
  console.log('Supplier data updated:', newVal)
}, { deep: true })
</script>
