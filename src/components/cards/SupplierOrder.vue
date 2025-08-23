<template>
  <div class="bg-white shadow-md  rounded-lg p-6 w-full">
    <!-- Header -->
    <div class="flex justify-between items-start mb-4">
      <div>
        <h3 class="text-gray-600 text-sm font-medium mb-1">Supplier</h3>
        <h2 class="text-lg font-semibold text-gray-800">{{ supplier.name }}</h2>
      </div>
    </div>

    <!-- Content Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Left Column -->
      <div class="space-y-3">
        <!-- Document -->
        <div class="flex items-center text-gray-600 text-sm">
          <i class="fas fa-file-alt mr-2"></i>
          <span>{{ supplier.document.type }}: {{ supplier.document.value }}</span>
        </div>

        <!-- Address -->
        <div class="flex items-start text-gray-600 text-sm">
          <i class="fas fa-map-marker-alt mr-2 mt-1"></i>
          <span>{{ supplier.address }}</span>
        </div>

        <!-- Contact Name -->
        <div class="flex items-center text-gray-600 text-sm">
          <i class="fas fa-user mr-2"></i>
          <span>{{ supplier.contact.name }}</span>
        </div>
      </div>

      <!-- Right Column -->
      <div class="space-y-3">
        <!-- Email -->
        <div class="flex items-center text-gray-600 text-sm">
          <i class="fas fa-envelope mr-2"></i>
          <span>{{ supplier.contact.email }}</span>
        </div>

        <!-- Phone -->
        <div class="flex items-center text-gray-600 text-sm">
          <i class="fas fa-phone mr-2"></i>
          <span>{{ supplier.contact.phone }}</span>
        </div>

        <!-- Fax -->
        <div class="flex items-center text-gray-600 text-sm">
          <i class="fas fa-fax mr-2"></i>
          <span>{{ supplier.contact.fax }}</span>
        </div>

        <!-- Read At -->
        <div class="flex items-center text-gray-600 text-sm">
          <i class="fas fa-clock mr-2"></i>
          <span>{{ formatDate(supplier.readAt) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  supplier: {
    type: Object,
    required: true
  }
})

// Função para formatar a data
function formatDate(dateStr) {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}T${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`
}
</script>
