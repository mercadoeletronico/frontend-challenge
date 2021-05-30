<template>
    <b-container>
        <b-row>
            <b-col>
                <div class="cnt-box-shipto" >
                    <!-- <p class="title-label" v-for="order of orders.addresses" :key="order.label">{{ order.label }}</p> -->
                    <!-- <p class="title-label">Ship to</p> -->
                    <p class="title-label">
                        <span v-for="order in orders" :key="order.id">{{ order.label }}</span>
                    </p>
                    <p class="addresses-name">
                        <span v-for="order in orders" :key="order.id">{{ order.name }} -</span>
                        <span class="addresses-code" v-for="order in orders" :key="order.id">{{ order.code }}</span>
                    </p>
                    <div class="addresses-address">
                        <span class="addresses-ico"><b-icon icon="geo-alt" font-scale="1" style="color:#003B71; margin-right: 4px;"></b-icon></span>
                        <span v-for="order in orders" :key="order.id">{{ order.address }}</span>
                    </div>
                    <p class="addresses-person" >
                        <span><b-icon icon="person" font-scale="1" style="color:#003B71; margin-right: 4px;"></b-icon></span>
                        <span v-for="order in orders" :key="order.id">{{ order.contact.name }}</span>
                    </p> 
                    <p class="addresses-mail" >
                        <span><b-icon icon="envelope" font-scale="1" style="color:#003B71; margin-right: 4px;"></b-icon></span>
                        <span v-for="order in orders" :key="order.id">{{ order.contact.email }}</span>
                    </p> 
                    <p class="addresses-tel-fax" >
                        <span><b-icon icon="telephone" font-scale="1" style="color:#003B71; margin-right: 4px;  -webkit-transform: scaleX(-1); transform: scaleX(-1);"></b-icon></span>
                        <span v-for="order in orders" :key="order.id">{{ order.contact.phone }}  </span>
                        <span><b-icon icon="file-earmark-break" font-scale="1" style="color:#003B71; margin-left: 10px; margin-right: 4px;"></b-icon></span>
                        <span v-for="order in orders" :key="order.id">{{ order.contact.fax }}</span>
                    </p> 
                </div>
            </b-col>
        </b-row>   
    </b-container>    
</template>

<script>
    
    import Order from '../services/orders';

    export default {
        data() {
            return {
                orders: []
            }
        },

        mounted(){
            Order.listar().then(resposta => {
                this.orders = resposta.data.addresses;
                console.log(resposta.data.addresses[0].label);
            });
        }
    }

</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');

    .cnt-box-shipto {
        display: block;
        overflow: hidden;
        border-radius: 6px;
        padding: 15px;
        margin-bottom: 25px;
        height: 220px;
        -webkit-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.28);
        -moz-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.28);
        box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.28);
    }

    .title-label {
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 12px;
        color: #919191;
    }

    .cnt-box-shipto p {
        padding: 0;
        margin: 0;
        line-height: 30px;
    }

    .addresses-name {
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        font-size: 14px;
        color: #000000;
    }

    .addresses-code {
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 12px;
        color: #000000;
    }

    .addresses-ico {
        display: block;
        float: left;
        max-height: 110px;
        margin-top: 0;
        border: 1px solid #ffffff;
    }

    .addresses-address {
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 12px;
        color: #000000;
    }

    .addresses-person {
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 12px;
        color: #000000;
    }

    .addresses-mail {
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 12px;
        color: #000000;
    }

    .addresses-tel-fax {
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 12px;
        color: #000000;
    }

    /* --- */

    .cnt-box-shipto .title-label span:nth-child(2){
        display: none;
    }
    .cnt-box-shipto .title-label span:nth-child(3){
        display: none;
    }

    .cnt-box-shipto .addresses-name span:nth-child(2){
        display: none;
    }
    .cnt-box-shipto .addresses-name span:nth-child(3){
        display: none;
    }

    .cnt-box-shipto .addresses-address span:nth-child(3){
        display: none;
    }
    .cnt-box-shipto .addresses-address span:nth-child(4){
        display: none;
    }

    .cnt-box-shipto .addresses-person span:nth-child(3){
        display: none;
    }
    .cnt-box-shipto .addresses-person span:nth-child(4){
        display: none;
    }

    .cnt-box-shipto .addresses-mail span:nth-child(3){
        display: none;
    }
    .cnt-box-shipto .addresses-mail span:nth-child(4){
        display: none;
    }

    .cnt-box-shipto .addresses-tel-fax span:nth-child(3){
        display: none;
    }
    .cnt-box-shipto .addresses-tel-fax span:nth-child(4){
        display: none;
    }
    .cnt-box-shipto .addresses-tel-fax span:nth-child(7){
        display: none;
    }
    .cnt-box-shipto .addresses-tel-fax span:nth-child(8){
        display: none;
    }

</style>