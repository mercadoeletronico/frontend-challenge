<template>
  <div class="bg-white shadow-md rounded-lg p-6 w-full">
    <div class="flex justify-between items-start mb-4">
      <div>
        <h3 class="text-gray-600 text-sm font-medium mb-1">Supplier</h3>
        <div class="flex items-center space-x-4">
          <h2 class="text-lg font-semibold text-gray-800">{{ supplier.name }}</h2>
          <div class="bg-[#EDF3FF] text-[#1052E0] px-3 py-1 rounded-lg text-sm font-medium">
            #{{ supplier.code }}
          </div>
        </div>
      </div>

    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="space-y-1">
        <div class="flex items-center text-gray-600 text-sm">
          <font-awesome-icon icon="fa-regular fa-file-alt" class="mr-2" />
          <span>{{ supplier.document.type }}: {{ supplier.document.value }}</span>
        </div>
        <div class="flex items-start text-gray-600 text-sm">
          <font-awesome-icon icon="fa-solid fa-map-marker-alt" class="mr-2 mt-1" />
          <span>{{ supplier.address }}</span>
        </div>
        <div class="flex items-center text-gray-600 text-sm">
          <font-awesome-icon icon="fa-regular fa-user" class="mr-2" />
          <span>{{ supplier.contact.name }}</span>
        </div>
      </div>

      <div class="space-y-1">
        <div class="flex items-center text-gray-600 text-sm">
          <font-awesome-icon icon="fa-regular fa-envelope" class="mr-2" />
          <span>{{ supplier.contact.email }}</span>
        </div>
        <div class="flex items-center text-gray-600 text-sm">
          <font-awesome-icon icon="fa-solid fa-phone" class="mr-2" />
          <span>{{ supplier.contact.phone }}</span>
        </div>
        <div class="flex items-center text-gray-600 text-sm">
          <font-awesome-icon icon="fa-solid fa-fax" class="mr-2" />
          <span>{{ supplier.contact.fax }}</span>
        </div>

        <div class="flex items-center text-gray-600 text-sm">
          <font-awesome-icon icon="fa-regular fa-clock" class="mr-2" />
          <span>{{ formatDate(supplier.readAt) }}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { formatDate } from '@/utils/dateUtils.js'
import { watch } from 'vue'

const props = defineProps({
  supplier: {
    type: Object,
    required: true
  }
})

watch(props, (newVal) => {
  console.log('Supplier data updated:', newVal)
}, { deep: true })

</script>
