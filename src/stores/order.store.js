import { defineStore } from 'pinia';
import api from '../services/api';
import { reactive, ref } from 'vue';
import { useRoute } from 'vue-router';


export const useOrderStore = defineStore('order', () => {
  const orderData = reactive({})
  const loading = ref(false)
  const route = useRoute()


  async function getOrderById(id) {
    try {
      const _id = route.params.id ?? id
      const response = await api.get(`orders/${_id}`);
      orderData.value = response.data
    } catch (error) {
      console.warn('Failed to get order', error);
    }
  }

  return {
    orderData,
    loading,
    getOrderById
  }
})
