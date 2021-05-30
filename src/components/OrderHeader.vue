<template>
  <b-container class="cnt-order-header">
    <b-row>

        <b-col>
            <div class="cnt-purchase-order">
                <p class="title">Purchase Order</p>
                <p class="order-nunber" v-for="order of orders" :key="order.id">
                    {{ order.number }}
                </p>
                <p class="serial-me" v-for="order of orders" :key="order.id">
                    SerialME: 
                    <span>{{ order.serial }}</span>
                </p>
            </div>
            <div class="cnt-logo-me">
                <img src="/logo-me.png" width="60%" />
            </div>
        </b-col>
        <b-col cols="7">
            <div class="cnt-purchase-client">
                <p class="buyer" v-for="order of orders" :key="order.id">
                    {{ order.buyer }}
                </p>
                <p>
                    <span><b-icon icon="people" font-scale="0.8" style="color:#003B71; margin-right: 4px;"></b-icon></span>
                    <span class="buyer-name" v-for="order of orders.header" :key="order.id">{{ order.name }}</span>
                    <span><b-icon icon="exclamation-circle" font-scale="0.8" style="color:#003B71; margin-left: 5px;"></b-icon></span>
                </p>
                <p>
                    <span><b-icon icon="envelope" font-scale="0.7" style="color:#003B71; margin-right: 4px;"></b-icon></span>
                    <span class="buyer-contact-infos" v-for="order of orders.header" :key="order.id">{{ order.email }}</span>
                    <span><b-icon icon="telephone" font-scale="0.7" style="color:#003B71; margin-left: 10px; margin-right: 4px;  -webkit-transform: scaleX(-1); transform: scaleX(-1);"></b-icon></span>
                    <span class="buyer-contact-infos" v-for="order of orders.header" :key="order.id">{{ order.phone }}</span>
                    <span><b-icon icon="file-earmark-break" font-scale="0.7" style="color:#003B71; margin-left: 10px; margin-right: 4px;"></b-icon></span>
                    <span class="buyer-contact-infos" v-for="order of orders.header" :key="order.id">{{ order.fax }}</span>
                </p>
            </div>
        </b-col>
        <b-col>
            <div class="cnt-purchase-value">
                <p>
                    <span class="currency-abbreviation" v-for="order of orders" :key="order.id">
                        {{ order.currency }}
                    </span>
                    <span class="currency-price" v-for="order of orders" :key="order.id">{{ order.price | currency }}</span>
                </p>
                <p class="purchase-status" v-for="order of orders" :key="order.id">{{ order.status }}</p>
                <p>
                    <span class="purchase-date" v-for="order of orders" :key="order.id">Created on {{ order.createdAt | formatDate }}</span>
                </p>
            </div>
        </b-col>

    </b-row>

    <!-- <b-col>
                <span v-for="(order, key) in orders.addresses" :key="key">
                    {{ order.name | toUpperCase }}
                </span>
            </b-col> -->

  </b-container>

</template>

<script>

    import Orders from '../services/orders';
    import moment from 'moment'


    export default  {
        

        data() {
            return {
                orders: []
            }
        },

        mounted(){
            Orders.listar().then(resposta => {
                console.log(resposta.data);
                this.orders = resposta.data;
            });
        },

        filters: {
            capitalize: function (value) {
                if (!value) return ''
                value = value.toString()
                return value.slice(-2)
            },
            formatDate: function (value) {
                if (value) {
                    return moment(String(value)).format('MM/DD/YYYY')
                }
            }
        }
    }

</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');

    .cnt-order-header {
        display: block;
        overflow: hidden;
        width: 100%;
        padding-top: 17px;

    }
    .cnt-order-header .col:first-child {
        padding-left: 0;
    }

    .cnt-purchase-order {
        display: block;
        overflow: hidden;
        width: 201px;
        height: 89px;
        background-color: #0A8CCC;
        border-radius: 0 8px 8px 0;
    }

    .cnt-purchase-order p {
        color: white;
        padding: 0;
        margin: 0;
        line-height: 25px;
    }

    .cnt-purchase-order p.title {
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        font-size: 18px;
        padding: 8px 0 0 20px;
    }

    .cnt-purchase-order p.order-nunber {
        font-family: 'Open Sans', sans-serif;
        font-weight: 700;
        font-size: 22px;
        padding: 0 0 0 20px;
    }

    .cnt-purchase-order p.serial-me {
        font-family: 'Open Sans', sans-serif;
        font-weight: 700;
        font-size: 12px;
        font-style: italic;
        padding: 0 0 0 20px;
    }

    .cnt-logo-me {
        display: block;
        overflow: hidden;
        position: absolute;
        top:15px;
        left:171px;
        width: 60px;
        height: 60px;
        background-color: #ffffff;
        border-radius: 50%;
        border: 2px solid #00426E;
        text-align: center;
        padding-top: 10px;
    }

    /*---*/

    .cnt-purchase-client {
        display: block;
        overflow: hidden;
        width: 100%;
        min-height: 10px;
    }

    .cnt-purchase-client p {
        clear: both;
        padding: 0;
        margin: 0;
    }

    .cnt-purchase-client p.buyer {
        font-family: 'Open Sans', sans-serif;
        font-weight: 700;
        font-size: 24px;
    }

    .cnt-purchase-client span.buyer-name {
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 12px;
    }

    .cnt-purchase-client span.buyer-contact-infos {
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 12px;
    }

    /*---*/

    .cnt-purchase-value {
        display: block;
        overflow: hidden;
        width: 100%;
        min-height: 10px;
        text-align: right;
        padding-right: 15px;
    }

    .cnt-purchase-value p {
        clear: both;
        padding: 0;
        margin: 0;
    }

    .cnt-purchase-value p span:nth-child(2) {
        border: 1px solid red;
        display: none;
    }
    .cnt-purchase-value p span:nth-child(3) {
        border: 1px solid red;
        display: none;
    }

    .cnt-purchase-value p span:nth-child(5) {
        border: 1px solid red;
        display: none;
    }

    .cnt-purchase-value p span:nth-child(6) {
        border: 1px solid red;
        display: none;
    }

    .cnt-purchase-value .currency-abbreviation {
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        font-size: 24px;
    }

    .cnt-purchase-value .currency-price {
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        font-size: 24px;
    }

    .cnt-purchase-value .purchase-status {
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        font-size: 16px;
        color: #F5A623;
    }

    .cnt-purchase-value .purchase-date {
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 12px;
        color: #000000;
    }
    
</style>
