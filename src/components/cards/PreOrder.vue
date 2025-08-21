<template>
  <div class="flex h-[110px] bg-white shadow overflow-hidden w-full">
    <div class="bg-blue-700 rounded-r-lg text-white flex flex-col items-center justify-center px-6 py-4 min-w-[140px]">
      <span class="text-xs font-semibold uppercase">Pre-Order</span>
      <span class="text-2xl font-bold">{{ header.number }}</span>
      <span class="text-xs">#ME{{ header.serial }}</span>
    </div>
    <div class="flex-1 flex flex-col justify-between pl-6 pb-[30px]">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between">
        <div class="mb-2 md:mb-0">
          <div class="text-lg font-semibold text-gray-800">{{ header.buyer }}</div>
          <div class="flex items-center text-gray-500 text-sm mt-1">
            <span class="mr-2"><i class="fas fa-user"></i> {{ header?.contact?.name }}</span>
            <span class="mr-2"><i class="fas fa-envelope"></i> {{ header?.contact?.email }}</span>
            <span class="mr-2"><i class="fas fa-phone"></i> {{ header?.contact?.phone }}</span>
            <span><i class="fas fa-fax"></i> {{ header?.contact?.fax }}</span>
          </div>
        </div>
        <div class="flex flex-col items-end text-2xl">
          <div class="flex">
            <span class="text-gray-400">{{ header.currency }}</span>
            <span class="font-bold text-gray-700 ml-1">{{ header.price }}</span>
          </div>
          <div class="flex flex-col w-full items-end">
            <div>
              <span class="text-green-600 font-semibold text-sm">{{ header.status }}</span>
            </div>
            <div class="text-gray-500 text-xs">
              <span>Created at {{ formatDate(header.createdAt) }}</span>
              <span class="ml-2 cursor-pointer"><i class="fas fa-info-circle"></i></span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center mt-2 text-xs text-gray-500"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  header: {
    type: Object,
    required: true
  }
})

function formatDate(dateStr) {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} at ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`
}
</script>
