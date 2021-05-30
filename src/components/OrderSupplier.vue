<template>
    <b-container class="cnt-supplier">
        <b-row>
            <b-col >
                <div class="cnt-supplier-box">
                    <p class="cnt-title">Supplier</p>
                    <p>
                        <span class="supplier-name" v-for="order of orders" :key="order.supplier">{{ order.name }}</span>
                        <span>
                            <b-badge v-for="order of orders" :key="order.supplier" class="supplier-code">
                                Code #
                                {{ order.code }}
                            </b-badge>
                        </span>
                    </p>
                    <b-row>
                        <b-col fluid="sm">
                            <p class="supplier-document-number" v-for="order of orders.supplier" :key="order.document">{{ order.value }}</p>
                            <p class="supplier-address" v-for="order of orders" :key="order.supplier">{{ order.address | truncate(55, '...') }}</p>
                        </b-col>
                        <b-col fluid="sm">
                            <p>
                                <span><b-icon icon="person" font-scale="0.8" style="color:#003B71; margin-right: 4px;"></b-icon></span>
                                <span class="supplier-document-number" v-for="order of orders.supplier" :key="order.contact">{{ order.name }}</span>
                                - <a :href="'mailto:${order.email}'" v-for="order of orders.supplier" :key="order.contact">{{ order.email | truncate(55, '...') }}</a>
                            </p>
                            <p>
                                <span><b-icon icon="telephone" font-scale="0.8" style="color:#003B71; margin-right: 4px;  -webkit-transform: scaleX(-1); transform: scaleX(-1);"></b-icon></span>
                                <span class="supplier-contact-name-phone-fax" v-for="order of orders.supplier" :key="order.contact">{{ order.phone }}</span>
                                <b-icon icon="receipt-cutoff" font-scale="0.7" style="color:#003B71; margin-left: 10px; margin-right: 4px;" title="Fax"></b-icon>
                                <span class="supplier-contact-name-phone-fax" v-for="order of orders.supplier" :key="order.contact" title="Fax">{{ order.fax }}</span>
                            </p>
                        </b-col>
                        <b-col fluid="sm">
                            <p>
                                <span><b-icon icon="eye" font-scale="0.8" style="color:#003B71; margin-right: 4px;"></b-icon></span>
                                <span class="supplier-read-reply">Read: </span>
                                <span class="supplier-read-reply" v-for="order of orders" :key="order.supplier">{{ order.readAt | formatDate }}</span>
                            </p>
                            <p>
                                <span><b-icon icon="reply" font-scale="0.8" style="color:#003B71; margin-right: 4px;  -webkit-transform: scaleX(-1); transform: scaleX(-1);"></b-icon></span>
                                <span class="supplier-read-reply">Last Reply: </span>
                                <span class="supplier-read-reply" v-for="order of orders" :key="order.supplier">{{ order.lastReplyAt | formatDate }}</span>
                            </p>
                        </b-col>
                    </b-row>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>

    import Order from '../services/orders';
    import moment from 'moment'

    export default {
        data() {
            return {
                orders: []
            }
        },

        mounted(){
            Order.listar().then(resposta => {
                this.orders = resposta.data;
            });
        },
        filters: {
            formatDate: function (value) {
                if (value) {
                    return moment(String(value)).format('MM/DD/YYYY HH:HH')
                }
            }
        }
    }

</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');

    .cnt-supplier {
        display: block;
        overflow: hidden;
        padding: 30px 20px;
    }

    .cnt-supplier .cnt-supplier-box {
        display: block;
        overflow: hidden;
        border-radius: 6px;
        padding: 5px 15px;
        -webkit-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.28);
        -moz-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.28);
        box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.28);
    }

    .cnt-supplier .cnt-supplier-box p {
        color: #000000;
        padding: 0;
        margin: 0;
        line-height: 25px;
    }
    .cnt-supplier .cnt-supplier-box p.cnt-title {
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 12px;
        color: #919191;
    }

    .cnt-supplier .cnt-supplier-box .supplier-name {
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        font-size: 14px;
        color: #0A8CCC;
    }

    .cnt-supplier .cnt-supplier-box p:nth-child(2) span:nth-child(4) span:nth-child(1) {
        display: none;
    }

    .cnt-supplier .cnt-supplier-box p:nth-child(2) span:nth-child(4) span:nth-child(3) {
        display: none;
    }

    .cnt-supplier .cnt-supplier-box .supplier-code {
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        font-size: 12px;
        color: #8A8A8A;
        background-color: rgba(10,139,204,0.20);
        border-radius: 12px;
        padding: 5px 10px;
        margin-left: 10px;
    }

    .cnt-supplier .cnt-supplier-box .supplier-document-number {
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 12px;
        color: #000000;
    }

    .cnt-supplier .cnt-supplier-box p:nth-child(8) {
        display: none;
    }
    .cnt-supplier .cnt-supplier-box p:nth-child(10) {
        display: none;
    }

    .cnt-supplier .cnt-supplier-box .supplier-address {
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 12px;
        color: #000000;
    }

    .cnt-supplier .cnt-supplier-box .supplier-contact-name-phone-fax {
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 12px;
        color: #000000;
    }

    .cnt-supplier .cnt-supplier-box a {
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 12px;
        color: #0A8CCC;
    }

    .cnt-supplier .cnt-supplier-box a:hover {
        text-decoration: underline;
    }
    .cnt-supplier .cnt-supplier-box a:nth-child(9) {
        display: none;
    }
    .cnt-supplier .cnt-supplier-box a:nth-child(10) {
        display: none;
    }
    .cnt-supplier .cnt-supplier-box a:nth-child(11) {
        display: none;
    }
    .cnt-supplier .cnt-supplier-box a:nth-child(12) {
        display: none;
    }
    .cnt-supplier .cnt-supplier-box a:nth-child(13) {
        display: none;
    }
    .cnt-supplier .cnt-supplier-box a:nth-child(14) {
        display: none;
    }
    .cnt-supplier .cnt-supplier-box a:nth-child(16) {
        display: none;
    }
    .cnt-supplier .cnt-supplier-box a:nth-child(17) {
        display: none;
    }

    .cnt-supplier .cnt-supplier-box .supplier-read-reply {
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 12px;
        color: #000000;
    }


</style>