<template>
  <div class="bg-white border border-none rounded-lg overflow-hidden">
    <button @click="toggleAccordion"
      class="w-full pb-3 text-left flex items-center justify-between bg-white transition-colors border-gray-200 focus:outline-none">
      <div class="flex items-center space-x-2">
        <div class="bg-[#EDF3FF] rounded-full p-1 w-5 h-5 flex items-center justify-center hover:bg-gray-50">
          <font-awesome-icon :icon="isOpen ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'"
            class="text-[#1052E0] text-xs" />
        </div>
        <h3 class="text-lg font-medium text-gray-700">Addresses</h3>
      </div>
    </button>

    <div v-show="isOpen">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pb-4 px-1">
        <div v-for="(address, index) in addresses" :key="index"
          class="rounded-lg p-4 shadow-md shadow-gray-200 min-h-fit">
          <div class="mb-4">
            <h4 class="text-sm font-medium text-gray-500 mb-1">{{ address.label }}</h4>
            <div class="flex items-center space-x-2 flex-wrap">
              <h5 class="text-lg font-semibold text-gray-800">{{ address.name }}</h5>
              <span v-if="address.code" class="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded font-medium">
                #{{ address.code }}
              </span>
            </div>
          </div>

          <div class="space-y-3">
            <div class="flex items-start text-gray-600 text-sm">
              <font-awesome-icon icon="fa-solid fa-map-marker-alt" class="mr-2 mt-1" />
              <span class="break-words">{{ address.address }}</span>
            </div>

            <div class="flex items-center text-gray-600 text-sm">
              <font-awesome-icon icon="fa-regular fa-envelope" class="mr-2" />
              <span class="break-all">{{ address.contact.email }}</span>
            </div>

            <div class="flex items-center text-gray-600 text-sm">
              <font-awesome-icon icon="fa-regular fa-user" class="mr-2" />
              <span class="break-words">{{ address.contact.name }}</span>
            </div>

            <div class="flex items-center text-gray-600 text-sm">
              <font-awesome-icon icon="fa-solid fa-phone" class="mr-2" />
              <span>{{ address.contact.phone }}</span>
            </div>

            <div class="flex items-center text-gray-600 text-sm">
              <font-awesome-icon icon="fa-solid fa-fax" class="mr-2" />
              <span>{{ address.contact.fax }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  addresses: {
    type: Array,
    required: true,
    default: () => []
  },
  defaultOpen: {
    type: Boolean,
    default: true
  }
})

const isOpen = ref(props.defaultOpen)

const toggleAccordion = () => {
  isOpen.value = !isOpen.value
}
</script>
