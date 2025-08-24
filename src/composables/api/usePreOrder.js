import { ref } from 'vue'
import axios from 'axios'

export function usePreOrder() {
  const preOrder = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const fetchPreOrder = async (orderId = 1) => {
    loading.value = true
    error.value = null

    try {
      const response = await axios.get(`/api/orders/${orderId}`)
      preOrder.value = response.data
      return response.data
    } catch (err) {
      error.value = err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  return {
    preOrder,
    loading,
    error,
    fetchPreOrder
  }
}
