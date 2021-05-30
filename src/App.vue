<template>
  <div>

    <div class="pnl-ticket-order">
      <div class="cnt-ticket-order">
        <OrderHeader/>
        <OrderSupplier/>
        <OrderAddresses/>
      </div>
    </div>


  </div>
  
</template>

<script>
import OrderHeader from './components/OrderHeader.vue'
import OrderSupplier from './components/OrderSupplier.vue'
import OrderAddresses from './components/OrderAddresses.vue'

export default {
  components: {
    OrderHeader,
    OrderSupplier,
    OrderAddresses
  },

  filters: {
    reverseString(value) {
      return value.split("").reverse().join("");
    }
  }
};
</script>


<style>
  
  body {
    background-color: gray;
  }

  .pnl-ticket-order {
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    height: 100vh;

  }

  .cnt-ticket-order {
    display: block;
    overflow: hidden;
    width: 1138px;
    min-height: 500px;
    background-color: white;
    border: 1px solid #0A8CCC;
    border-radius: 8px;
    margin: 0 auto;
  }

</style>