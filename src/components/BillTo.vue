<template>
    <b-container>
        <b-row>
            <b-col>
                <div class="cnt-box-billto">

                    <p class="title-label" v-for="order in billto" :key="order.id">{{ order.label }}</p>

                    <p class="addresses-name">
                        <span v-for="order in billto" :key="order.id">{{ order.name }}</span>
                        <span class="addresses-code" v-for="order in billto" :key="order.id">{{ order.code || " " }}</span>
                    </p>
                    <div class="addresses-address">
                        <b-row>
                            <b-col cols="1" style="padding-right:0;"><b-icon icon="geo-alt" font-scale="1" style="color:#003B71;"></b-icon></b-col>
                            <b-col style="padding-left:5px;"><span v-for="order in billto" :key="order.id">{{ order.address }}</span></b-col>
                        </b-row>
                    </div>
                    <div class="addresses-person">
                        <b-row>
                            <b-col cols="1" style="padding-right:0;"><b-icon icon="person" font-scale="1"></b-icon></b-col>
                            <b-col style="padding-left:5px;"><span v-for="order in billto" :key="order.id">{{ order.contact.name }}</span></b-col>
                        </b-row>
                    </div>
                    <div class="addresses-mail">
                        <b-row>
                            <b-col cols="1" style="padding-right:0;"><b-icon icon="envelope" font-scale="1" style="color:#003B71;"></b-icon></b-col>
                            <b-col style="padding-left:5px;"><span v-for="order in billto" :key="order.id">{{ order.contact.email }}</span></b-col>
                        </b-row>
                    </div>
                    <div class="addresses-tel-fax">
                        <b-row>
                            <b-col cols="1" style="padding-right:0;"><b-icon icon="telephone" font-scale="1" style="color:#003B71; -webkit-transform: scaleX(-1); transform: scaleX(-1);"></b-icon></b-col>
                            <b-col cols="4" style="padding-left:5px;"><span v-for="order in billto" :key="order.id">{{ order.contact.phone }}</span></b-col>
                            <b-col cols="1" style="padding-right:0;"><b-icon icon="file-earmark-break" font-scale="1" style="color:#003B71;"></b-icon></b-col>
                            <b-col style="padding-left:5px;"><span v-for="order in billto" :key="order.id">{{ order.contact.fax }}</span></b-col>
                        </b-row>
                    </div>


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
                orders: [],
                billto: []
            }
        },

        mounted(){
            Order.listar().then(resposta => {
                this.orders = resposta.data.addresses;
                this.billto = this.orders.filter(lal => lal.label == 'Bill to').map(yep => yep);
                //console.log(JSON.stringify(this.orders));
                //console.log(JSON.stringify(this.shipto));
            });
        }
    }

    

</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');

    .cnt-box-billto {
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

    .cnt-box-billto p {
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
        color: #00000080;
        font-style: italic;
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
        padding-top: 10px;
    }

    .addresses-mail {
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 12px;
        color: #000000;
        padding-top: 10px;
    }

    .addresses-tel-fax {
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 12px;
        color: #000000;
        padding-top: 10px;
    }

    /* --- */

</style>