<template>
  <CardPreOrder :headerData="headerData" />
</template>

<script setup>
import CardPreOrder from '@/components/cards/PreOrder.vue'

defineOptions({
  name: 'HomePage'
})

const headerData = {
  orderNumber: "4510001114",
  orderCode: "ME11223344",
  buyerName: "MTP West Buyer",
  buyerGroup: "Jacksonville Group (Jason Burn)",
  buyerEmail: "jacksonvillegroup@me.com",
  buyerPhone: "903-575-3050",
  buyerFax: "999-575-3050",
  value: "20000",
  orderStatus: "Need to confirm",
  createdAt: "2020-04-16 at 15:32:55",
  infoIcon: true,
  status: "Need to confirm"
}
</script>
