<template>
  <div class="flex h-[110px] bg-white shadow overflow-hidden w-full">
    <div class="bg-blue-700 rounded-r-lg text-white flex flex-col items-center justify-center px-6 py-4 min-w-[140px]">
      <span class="text-xs font-semibold uppercase">Pre-Order</span>
      <span class="text-2xl font-bold">{{ headerData.orderNumber }}</span>
      <span class="text-xs">#{{ headerData.orderCode }}</span>
    </div>
    <div class="flex-1 flex flex-col justify-between pl-6 pb-[30px]">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between">
        <div class="mb-2 md:mb-0">
          <div class="text-lg font-semibold text-gray-800">{{ headerData.buyerName }}</div>
          <div class="flex items-center text-gray-500 text-sm mt-1">
            <span class="mr-2"><i class="fas fa-user"></i> {{ headerData.buyerGroup }}</span>
            <span class="mr-2"><i class="fas fa-envelope"></i> {{ headerData.buyerEmail }}</span>
            <span class="mr-2"><i class="fas fa-phone"></i> {{ headerData.buyerPhone }}</span>
            <span><i class="fas fa-fax"></i> {{ headerData.buyerFax }}</span>
          </div>
        </div>
        <div class="flex flex-col items-end text-2xl">
          <div class="flex"><span class="text-gray-400">USD</span>
            <span class="font-bold text-gray-700 ml-1">{{ headerData.value }}</span>
          </div>
          <div> <span class="text-green-600 font-semibold text-sm">{{ headerData.status }}</span></div>
        </div>
      </div>
      <div class="flex justify-between items-center mt-2 text-xs text-gray-500">
        <span>Created at {{ headerData.createdAt }}</span>
        <span v-if="headerData.infoIcon" class="ml-2 cursor-pointer"><i class="fas fa-info-circle"></i></span>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  headerData: {
    type: Object,
    required: true
  }
})
</script>
