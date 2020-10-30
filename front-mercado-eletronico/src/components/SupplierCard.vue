<template>
  <b-container id="supplierContainer">
    <b-card-group deck id="supplierCard">
      <b-card>
        <b-container>
          <b-row align-h="start">
            <b-col cols="12" lg="12" sm="12">
              <b-card-text id="supplierCardTitle">Supplier</b-card-text>
            </b-col>
          </b-row>
          <b-row >
            <b-col cols="12" sm="12" lg="12" id="supplierCardLine">
              <b-card-text id="supplierCardName">{{ supplier.name }}</b-card-text>
              <b-card-text id="supplierCode">Code #{{ supplier.code }}</b-card-text>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="4" lg="4" text-align="left">
              <b-row>
                <b-col>
                  <b-card-text id="supplierData">{{
                    supplier.document.value
                  }}</b-card-text>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-card-text id="supplierData">{{
                    supplier.address
                  }}</b-card-text>
                </b-col>
              </b-row>
            </b-col>
            <b-col cols="5" lg="5" text-align="left">
              <b-card-text id="supplierData"
                ><b-icon icon="person" id="bIcon"></b-icon> {{ supplier.contact.name }} -
                {{ supplier.contact.email }}</b-card-text
              >
              <b-card-text id="supplierData"
                ><b-icon icon="telephone" id="bIcon"></b-icon>
                {{ supplier.contact.phone }} - <b-icon icon="printer"></b-icon>
                {{ supplier.contact.fax }}</b-card-text
              >
            </b-col>
            <b-col cols="3" lg="3">
              <b-card-text id="supplierData"
                ><b-icon icon="eye" id="bIcon"> </b-icon>  Read: {{ supplier.readAt }}</b-card-text
              >
              <b-card-text id="supplierData"
                ><b-icon icon="reply" id="bIcon"></b-icon>
                Last Reply: {{ supplier.lastReplyAt }}</b-card-text
              >
            </b-col>
          </b-row>
        </b-container>
      </b-card>
    </b-card-group>
  </b-container>
</template>

<script>

export default {
  name: "SupplierCard",
  props: {
    supplier: {
      code: String,
      name: String,
      readAt: Date,
      lastReplyAt: Date,
      document: {
        type: String,
        value: String,
      },
      address: String,
      contact: {
        name: String,
        email: String,
        phone: String,
        fax: String,
      }
    }
  },
};
</script>

<style>
#bIcon{
  color: #919191;
}
#supplierCard {
  font-size: 12px;
}
#supplierContainer {
  margin: 31px 0px;
}
#supplierCardTitle {
  color: #919191;
  font-weight: 400;
  font-size: 12px;
  text-align: left;
}
#supplierCardLine{
  display: flex;
}
#supplierCardName {
  color: #0a8ccc;
  font-weight: 600;
  font-size: 14px;
  text-align: left;
  margin: 0px 0px 6px;
}
#supplierCode{
  color: #8A8A8A;
  font-weight: 600;
  font-size: 12px;
  text-align: center;
  position:relative;
  left:10px;
  background-color: rgb(10, 140, 204, 0.12 );
  border-radius: 12.5px;
  width: 98px;
  height: 23px;
}
#supplierData {
  font-weight: 400;
  font-size: 12px;
  text-align: left;
  margin: 2px 0px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>