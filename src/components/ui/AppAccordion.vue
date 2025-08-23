<template>
  <div>
    <div class=" cursor-pointer hover:bg-primary-50/40 p-2 transition-all duration-300" @click="toggleAccordion">
      <slot name="header">
        <div class="flex items-center ">
          <button class="rounded-full w-5 h-5 grid place-items-center bg-primary-50 mr-2 hover:bg-primary-50/70" data-cy="accordion-button">
            <AppIconSvg name="arrow" size="16" class="text-primary-500 transition-all duration-300" :class="!isOpen ? 'rotate-180' : 'rotate-0'" />
          </button>
          <p class="text-neutral-700 text-base font-semibold">{{ title }}</p>
        </div>
      </slot>
    </div>
    <Transition name="accordion-slide" data-cy="accordion-content">
      <div class="accordion-content" v-if="isOpen">
        <slot name="content"></slot>
      </div>
    </Transition>


  </div>
</template>


<script setup>
import { ref } from 'vue';
import AppIconSvg from './AppIconSvg.vue';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
})
const isOpen = ref(true)

function toggleAccordion() {
  isOpen.value = !isOpen.value
}

</script>


<style scoped>
.accordion-slide-enter-active,
.accordion-slide-leave-active {
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  overflow: hidden;
}

.accordion-slide-enter-from,
.accordion-slide-leave-to {
  max-height: 0;
  opacity: 0;
}

.accordion-slide-enter-to,
.accordion-slide-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style>
