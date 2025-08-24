import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import axios from 'axios'
import { usePreOrder } from '../usePreOrder.js'

vi.mock('axios')
const mockedAxios = vi.mocked(axios)

const mockPreOrderData = {
  id: 1,
  number: '4510001114',
  serial: 'ME1223344',
  buyer: 'MTP West Buyer',
  contact: {
    name: 'Jacksonville Group (Jason Burn)',
    email: 'jacksonvillegroup@me.com',
    phone: '903-575-3050',
    fax: '999-575-3050'
  },
  currency: 'USD',
  price: '20000',
  status: 'Need to confirm',
  createdAt: '2020-05-23T12:45:20.399Z',
  supplier: {
    name: 'Motion Industries INC.',
    code: '101908'
  },
  addresses: [
    {
      label: 'Ship to',
      name: 'West Plant',
      code: 'TR01',
      address: '1311 W Washington Blvd, Los Angeles, CA 90006, United States',
      contact: {
        name: 'Brian Mazda Tetsuo',
        email: 'Z01confirmations@me.com',
        phone: '222-575-3050',
        fax: '222-575-3050'
      }
    }
  ]
}

describe('usePreOrder', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should initialize with correct default values', () => {
    const { preOrder, loading, error } = usePreOrder()

    expect(preOrder.value).toBe(null)
    expect(loading.value).toBe(false)
    expect(error.value).toBe(null)
  })

  it('should fetch pre-order data successfully', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: mockPreOrderData
    })

    const { preOrder, loading, error, fetchPreOrder } = usePreOrder()

    const result = await fetchPreOrder(1)

    expect(mockedAxios.get).toHaveBeenCalledWith('/api/orders/1')
    expect(mockedAxios.get).toHaveBeenCalledTimes(1)

    expect(preOrder.value).toEqual(mockPreOrderData)
    expect(result).toEqual(mockPreOrderData)
    expect(loading.value).toBe(false)
    expect(error.value).toBe(null)
  })

  it('should use default orderId when not provided', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: mockPreOrderData
    })

    const { fetchPreOrder } = usePreOrder()

    await fetchPreOrder()

    expect(mockedAxios.get).toHaveBeenCalledWith('/api/orders/1')
  })

  it('should use provided orderId', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: mockPreOrderData
    })

    const { fetchPreOrder } = usePreOrder()

    await fetchPreOrder(123)

    expect(mockedAxios.get).toHaveBeenCalledWith('/api/orders/123')
  })

  it('should handle loading state correctly', async () => {
    const mockPromise = new Promise((resolve) => {
      setTimeout(() => resolve({ data: mockPreOrderData }), 100)
    })

    mockedAxios.get.mockReturnValueOnce(mockPromise)

    const { loading, fetchPreOrder } = usePreOrder()

    const fetchPromise = fetchPreOrder(1)

    expect(loading.value).toBe(true)

    await fetchPromise

    expect(loading.value).toBe(false)
  })

  it('should handle errors correctly', async () => {
    const errorMessage = 'Network Error'
    const mockError = new Error(errorMessage)

    mockedAxios.get.mockRejectedValueOnce(mockError)

    const { preOrder, loading, error, fetchPreOrder } = usePreOrder()

    await expect(fetchPreOrder(1)).rejects.toThrow(errorMessage)

    expect(error.value).toBe(errorMessage)
    expect(loading.value).toBe(false)
    expect(preOrder.value).toBe(null)
  })

  it('should reset error state on new request', async () => {
    const { error, fetchPreOrder } = usePreOrder()

    mockedAxios.get.mockRejectedValueOnce(new Error('First error'))

    try {
      await fetchPreOrder(1)
    } catch (e) {
    }

    expect(error.value).toBe('First error')

    mockedAxios.get.mockResolvedValueOnce({
      data: mockPreOrderData
    })

    await fetchPreOrder(2)

    expect(error.value).toBe(null)
  })

  it('should set loading to false even when error occurs', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('Test error'))

    const { loading, fetchPreOrder } = usePreOrder()

    try {
      await fetchPreOrder(1)
    } catch (e) {
    }

    expect(loading.value).toBe(false)
  })

  it('should handle multiple consecutive requests', async () => {
    const { preOrder, fetchPreOrder } = usePreOrder()

    const firstData = { ...mockPreOrderData, id: 1 }
    mockedAxios.get.mockResolvedValueOnce({ data: firstData })

    await fetchPreOrder(1)
    expect(preOrder.value).toEqual(firstData)

    const secondData = { ...mockPreOrderData, id: 2 }
    mockedAxios.get.mockResolvedValueOnce({ data: secondData })

    await fetchPreOrder(2)
    expect(preOrder.value).toEqual(secondData)

    expect(mockedAxios.get).toHaveBeenCalledTimes(2)
    expect(mockedAxios.get).toHaveBeenNthCalledWith(1, '/api/orders/1')
    expect(mockedAxios.get).toHaveBeenNthCalledWith(2, '/api/orders/2')
  })

  it('should return reactive references', () => {
    const { preOrder, loading, error } = usePreOrder()

    expect(preOrder.value).toBeDefined()
    expect(loading.value).toBeDefined()
    expect(error.value).toBeDefined()

    preOrder.value = { test: 'data' }
    expect(preOrder.value).toEqual({ test: 'data' })

    loading.value = true
    expect(loading.value).toBe(true)

    error.value = 'test error'
    expect(error.value).toBe('test error')
  })

  it('should handle axios response structure correctly', async () => {
    const mockResponse = {
      data: mockPreOrderData,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {}
    }

    mockedAxios.get.mockResolvedValueOnce(mockResponse)

    const { preOrder, fetchPreOrder } = usePreOrder()

    const result = await fetchPreOrder(1)

    expect(preOrder.value).toEqual(mockPreOrderData)
    expect(result).toEqual(mockPreOrderData)
    expect(result).toHaveProperty('id')
    expect(result).toHaveProperty('number')
  })

  it('should handle different error types', async () => {
    const { error, fetchPreOrder } = usePreOrder()

    const errorWithMessage = new Error('Custom error message')
    mockedAxios.get.mockRejectedValueOnce(errorWithMessage)

    try {
      await fetchPreOrder(1)
    } catch (e) { }

    expect(error.value).toBe('Custom error message')

    const errorWithoutMessage = new Error()
    mockedAxios.get.mockRejectedValueOnce(errorWithoutMessage)

    try {
      await fetchPreOrder(2)
    } catch (e) { }

    expect(error.value).toBe('')
  })
})
