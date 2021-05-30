<template>
    <b-container>
        <b-row>
            <b-col style="padding-left: 20px;">
                <p>
                    <span><b-icon icon="arrow-down-circle-fill" font-scale="1" style="color:#003B71; margin-right: 4px; color: #0C8BCB;"></b-icon></span>
                    <span class="title-addresses"> Addresses</span>
                </p>
            </b-col>
        </b-row> 
        <b-row>
            <b-col style="padding-left: 5px;"><ShipTo /></b-col>
            <b-col style="padding-left: 5px;"><BillTo /></b-col>
            <b-col style="padding-left: 5px;"><ChargeTo/></b-col>
        </b-row>   
    </b-container>    
</template>

<script>

    import ShipTo from './ShipTo'
    import BillTo from './BillTo'
    import ChargeTo from './ChargeTo'

    export default {
        components: {
            ShipTo,
            BillTo,
            ChargeTo
        }
    }

</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');

    .title-addresses{
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        font-size: 16px;
        color: #000000;
    }


</style>