<template>
  <div class="flex flex-col items-center justify-center p-8 text-center text-neutral-500">
    <svg class="w-12 h-12 text-neutral-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172A4 4 0 0112 15h0a4 4 0 012.828 1.172m-5.656 0a2 2 0 100 2a2 2 0 000-2zM12 10a2 2 0 100-4a2 2 0 000 4z"/>
    </svg>
    <p class="text-sm">{{ message }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  message: {
    type: String,
    default: 'Nenhum dado encontrado.'
  }
});
</script>