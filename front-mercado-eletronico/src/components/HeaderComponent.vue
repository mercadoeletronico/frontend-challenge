<template>
  <b-container class="bv-example-row" id="header">
    <b-row>
      <b-col cols="3" lg="3" sm="12"
        ><b-card text-variant="white" id="purchaseCard" no-body>
          <b-img
            src="../assets/logo-circle-me.png"
            width="60"
            height="60"
            id="logoImage"
            rounded="circle"
          ></b-img>
          <b-card-text id="purchase">Purchase Order</b-card-text>
          <b-card-text id="purchaseNumber">{{ header.number }}</b-card-text>
          <b-card-text id="serialNumber"
            >SerialME {{ header.serial }}</b-card-text
          >
        </b-card></b-col
      >
      <b-col cols="6" lg="6" sm="12" id="buyerColumn">
        <b-card-text id="buyer">{{ header.buyer }}</b-card-text>
        <b-card-text id="buyerData"><b-icon icon="people"></b-icon> {{ header.contact.name }} <b-icon icon="info-circle" id="info-circle"></b-icon></b-card-text>
        <b-row>
          <b-col cols="5" lg="5">
            <b-card-text id="buyerData"><b-icon icon="envelope"></b-icon> {{ header.contact.email }}</b-card-text>
          </b-col>
          <b-col cols="3" lg="3">
            <b-card-text id="buyerData"><b-icon icon="telephone"></b-icon> {{ header.contact.phone }}</b-card-text>
          </b-col>
          <b-col cols="4" lg="4">
            <b-card-text id="buyerData"><b-icon icon="printer"></b-icon> {{ header.contact.fax }}</b-card-text>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="3" lg="3" sm="12" id="transaction">
        
        <b-card-text class="text-right" id="price">
          {{ header.currency }} {{ header.price | toCurrency }}
        </b-card-text>
       
        <b-card-text class="text-right" id="status">{{
          header.status
        }}</b-card-text>
        <b-card-text class="text-right"
          >Created at {{ header.createdAt | formatDate }}</b-card-text
        >
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: {
    header: {
      number: Number,
      serial: Number,
      buyer: String,
      price: String,
      currency: String,
      createdAt: Date,
      status: String,
      contact: {
        name: String,
        email: String,
        phone: String,
        fax: String,
      },
    },
  }
};
</script>

<style>
#header {
  margin-left: 46px;
  font-size: 12px;
}
#info-circle{
  color:#0A8CCC;
  position: relative;
  left: 2px;
}
#purchaseCard {
  width: 201px;
  height: 89px;
  padding: 8px 20px 8px 20px;
  border: none;
  position: relative;
  background-color: #0a8ccc;
  margin: 0%;
  right: 67px;
}
#logoImage {
  position: absolute;
  left: 171px;
  top: 15px;
}
#purchase {
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  margin: 0%;
}
#purchaseNumber {
  font-size: 22px;
  font-weight: 700;
  text-align: left;
  margin: 0%;
}
#serialNumber {
  font-size: 12px;
  font-weight: 700;
  font-style: italic;
  text-align: left;
}
@media (min-width: 1290px) {
  #buyerColumn {
    position: relative;
    right: 80px;
  }
}
@media (max-width: 1290px) {
  #buyerColumn {
    position: relative;
    right: 60px;
  }
}
@media (max-width: 1200px) {
  #buyerColumn {
    position: relative;
    right: 50px;
  }
}
@media (max-width: 1140px) {
  #buyerColumn {
    position: relative;
    right: 30px;
  }
}
@media (max-width: 1060px) {
  #buyerColumn {
    position: relative;
    right: 10px;
  }
}
#buyer {
  font-size: 24px;
  font-weight: 600;
  text-align: left;
  margin: 0px 0px 12px;
}
#buyerData {
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  margin: 0px 0px 8px;
  text-align: left;
}

#buyerContactColumn {
    padding:0%;
}

#buyerContact {
  padding: 0px 0px 0px 15px;
}

@media (max-width: 1000px) {
  #transaction {
    text-align: left;
  }
}
#price {
  font-weight: 600;
  font-size: 24px;
  margin: 0px 0px 12px;
}
#status {
  color: #f5a623;
  font-weight: 600;
  font-size: 16px;
  margin: 0px 0px 16px;
}
b-icon{
    color: #003B71;
}
</style>