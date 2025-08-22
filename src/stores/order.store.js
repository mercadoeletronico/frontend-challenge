export const useOrderStore = defineStore('order', () => {
    const orderData = reactive({})
    const loading = ref(false)

    return {
      orderData,
    }
})
