<template>
  <div class="mt-2 lg:mt-3" data-cy="order-buyer-contact">
    <AppContactLine v-if="orderBuyerContact.name" icon="user" :value="orderBuyerContact.name" data-cy="order-buyer-contact-name" />
    <ul class="flex items-start md:items-center md:flex-row flex-col mt-2 lg:mt-1">

      <li v-if="orderBuyerContact.email" data-cy="order-buyer-contact-email" >
        <AppContactLine type="email" icon="mail" :value="orderBuyerContact.email"  />
      </li>
      <li v-if="orderBuyerContact.phone" data-cy="order-buyer-contact-phone">
        <AppContactLine class="mt-2 lg:mt-0 md:ml-4" type="phone" icon="phone" :value="orderBuyerContact.phone" />
      </li>
      <li v-if="orderBuyerContact.fax" data-cy="order-buyer-contact-fax">
        <AppContactLine class="mt-2 md:mt-0 md:ml-4" type="phone" icon="fax" :value="orderBuyerContact.fax" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import AppContactLine from '../ui/AppContactLine.vue';



const props = defineProps({
  orderBuyerContact: {
    type: Object,
    default: {},
  },
})

</script>
