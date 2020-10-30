<template>
  <b-container>
    <b-row align-h="start">
      <b-col cols="12" lg="12" sm="12">
        <b-card-text id="addressCardTitle">{{ address.label }}</b-card-text>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" lg="12" id="addressCardLine">
            <b-card-text id="addressCardName">{{ address.name }}  </b-card-text>
            <b-card-text id="addressCardCode" v-if="address.code"> - ({{ address.code }})</b-card-text>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" lg="12">
        <b-card-text id="addressData"
          ><b-icon icon="geo-alt" id="bIcon"></b-icon> {{ address.address }}</b-card-text
        >
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" lg="12">
        <b-card-text id="addressData"
          ><b-icon icon="person" id="bIcon"></b-icon>
          {{ address.contact.name }}</b-card-text
        >
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" lg="12">
        <b-card-text id="addressData"
          ><b-icon icon="envelope" id="bIcon"></b-icon>
          {{ address.contact.email }}</b-card-text
        >
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="6" lg="6">
        <b-card-text id="addressData"
          ><b-icon icon="telephone" id="bIcon"></b-icon>
          {{ address.contact.phone }}</b-card-text
        >
      </b-col>
      <b-col cols="6" lg="6">
        <b-card-text id="addressData"
          ><b-icon icon="printer" id="bIcon"></b-icon>
          {{ address.contact.fax }}</b-card-text
        >
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "AddressCard",
  props: {
    address: {
      label: String,
      name: String,
      code: String,
      address: String,
      contact: {
        name: String,
        email: String,
        phone: String,
        fax: String,
      },
    },
  },
};
</script>

<style>
#bIcon{
  color: #919191;
}
#addressCardTitle {
  color: #919191;
  font-weight: 400;
  font-size: 12px;
  text-align: left;
}
#addressCardLine{
  display: flex;
}
#addressCardName {
  color: #000000;
  font-weight: 600;
  font-size: 14px;
  text-align: left;
  margin-right: 4px;
  margin-bottom: 2px;
}
#addressCardCode{
  color: rgb(0, 0, 0, 0.48);
  font-weight: 600;
  font-style: italic;
  font-size: 14px;
  text-align: left;
}
#addressCode {
  color: #8a8a8a;
  font-weight: 600;
  font-size: 12px;
  text-align: left;
  position: relative;
  right: 70px;
}
#addressData {
  font-weight: 400;
  font-size: 12px;
  text-align: left;
  margin: 1px 0px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>