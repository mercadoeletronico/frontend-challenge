<template>
  <header>
    <div class="container mx-auto ">
      <div class="flex items-start lg:flex-row flex-col">
        <Skeleton class="lg:rounded-r-lg w-full lg:w-[200px]" height="110px" />
        <div class="w-full flex lg:flex-row flex-col justify-between lg:pl-6 lg:mt-0 mt-6 px-6">
          <div>
            <Skeleton width="194px" height="28px" />
            <div class="mt-2 lg:mt-3">
              <Skeleton width="194px" height="16px" class="mt-1" />
              <div class="grid grid-cols-1 md:grid-cols-3 mt-2 lg:mt-1 gap-2 md:gap-4">
                <Skeleton v-for="i in 3" :key="i" width="194px" height="16px" />
              </div>
            </div>
          </div>
          <div class="lg:text-right lg:mt-0 mt-4 lg:ml-4 ml-0">
            <Skeleton width="120px" height="28px" />
            <Skeleton width="160px" height="28px" class="mt-1" />
            <Skeleton width="200px" height="16px" class="mt-1" />
          </div>

        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import { Skeleton } from '@brayamvalero/vue3-skeleton';
import '@brayamvalero/vue3-skeleton/dist/style.css'

</script>
