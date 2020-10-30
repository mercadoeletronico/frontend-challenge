<template>
  <div id="app">
    <b-container id="bodyContainer">
      <b-card id="bodyCard">
        <b-row>
          <HeaderComponent :header="resposta.header" />
        </b-row>
        <b-row>
          <SupplierCard :supplier="resposta.supplier" />
        </b-row>
        <b-row>
          <b-container id="addressContainer">
            <b-row id="collapseContainer">
              <b-card-text icon="chevron-down"
                  v-b-toggle.collapse-3
                  variant="primary">
                <b-icon
                  icon="chevron-down"
                  v-b-toggle.collapse-3
                  variant="primary"
                ></b-icon>
                Addresses</b-card-text
              >
            </b-row>
            <b-collapse visible id="collapse-3" class="mt-2">
              <b-card-group columns>
                <b-card
                  no-body
                  id="addressCard"
                  v-for="(address, index) in resposta.addresses"
                  :key="index"
                >
                  <AddressCard :address="address" />
                </b-card>
              </b-card-group>
            </b-collapse>
          </b-container>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import RestAPI from "@/services/RestAPI";
import HeaderComponent from "./components/HeaderComponent.vue";
import SupplierCard from "./components/SupplierCard.vue";
import AddressCard from "./components/AddressCard.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    SupplierCard,
    AddressCard,
  },
  data() {
    return {
      resposta: []
    };
  },
  created() {
    RestAPI.getResponse((response) => {
      this.resposta = response.data
    });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,700&display=swap");
#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(0, 0, 0, 0.5);
  padding: 41px 114px;
  height: 100%;
}
#bodyContainer {
  padding: 0%;
}
#bodyCard {
  background-color: #ffffff;
}
#addressContainer {
  margin: 0px 0px;
}
#collapseContainer {
  font-weight: 600;
  font-size: 16px;
  text-align: left;
  position: relative;
  left: 20px;
}
#addressCard {
  font-size: 12px;
  padding: 12px 6px 16px 12px;
  margin: 0px;
}
</style>
