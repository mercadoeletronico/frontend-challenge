import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import SupplierOrder from '../SupplierOrder.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

vi.mock('@/utils/dateUtils.js', () => ({
  formatDate: vi.fn((date) => '2023-05-23T12:45:20.399Z')
}))

const mockSupplier = {
  name: 'Motion Industries INC.',
  code: '101908',
  document: {
    type: 'CNPJ',
    value: '00.823.053/0001-02'
  },
  address: 'O Box 1477 - Birmingham AL - 35201-4666 - United States of America',
  contact: {
    name: 'Jack Jeff Ripple Applejack',
    email: 'jack.jeff.applejack@motion.com',
    phone: '800-296-5522',
    fax: '800-296-5522'
  },
  readAt: '2020-05-23T09:45:20.000Z'
}

describe('SupplierOrder', () => {
  const createWrapper = (props = {}) => {
    return mount(SupplierOrder, {
      props: {
        supplier: mockSupplier,
        ...props
      },
      global: {
        components: {
          FontAwesomeIcon
        },
        stubs: {
          'font-awesome-icon': true
        }
      }
    })
  }

  it('should render correctly', () => {
    const wrapper = createWrapper()
    expect(wrapper.exists()).toBe(true)
  })

  it('should display supplier name and code correctly', () => {
    const wrapper = createWrapper()

    expect(wrapper.text()).toContain('Motion Industries INC.')

    expect(wrapper.text()).toContain('#101908')

    expect(wrapper.text()).toContain('Supplier')
  })

  it('should display document information', () => {
    const wrapper = createWrapper()

    expect(wrapper.text()).toContain('CNPJ: 00.823.053/0001-02')
  })

  it('should display address information', () => {
    const wrapper = createWrapper()

    expect(wrapper.text()).toContain('O Box 1477 - Birmingham AL - 35201-4666 - United States of America')
  })

  it('should display contact information', () => {
    const wrapper = createWrapper()

    expect(wrapper.text()).toContain('Jack Jeff Ripple Applejack')
    expect(wrapper.text()).toContain('jack.jeff.applejack@motion.com')
    expect(wrapper.text()).toContain('800-296-5522')
  })

  it('should display formatted read date', () => {
    const wrapper = createWrapper()

    expect(wrapper.text()).toContain('2023-05-23T12:45:20.399Z')
  })

  it('should have correct styling classes', () => {
    const wrapper = createWrapper()

    expect(wrapper.find('.bg-white').exists()).toBe(true)
    expect(wrapper.find('.shadow-md').exists()).toBe(true)
    expect(wrapper.find('.rounded-lg').exists()).toBe(true)
    expect(wrapper.find('.p-6').exists()).toBe(true)
  })

  it('should render font-awesome icons', () => {
    const wrapper = createWrapper()

    const icons = wrapper.findAllComponents({ name: 'font-awesome-icon' })
    expect(icons.length).toBe(7)
  })

  it('should have correct icon types', () => {
    const wrapper = createWrapper()

    const icons = wrapper.findAllComponents({ name: 'font-awesome-icon' })
    const iconProps = icons.map(icon => icon.props('icon'))

    expect(iconProps).toContain('fa-regular fa-file-alt')
    expect(iconProps).toContain('fa-solid fa-map-marker-alt')
    expect(iconProps).toContain('fa-regular fa-user')
    expect(iconProps).toContain('fa-regular fa-envelope')
    expect(iconProps).toContain('fa-solid fa-phone')
    expect(iconProps).toContain('fa-solid fa-fax')
    expect(iconProps).toContain('fa-regular fa-clock')
  })

  it('should have responsive grid layout', () => {
    const wrapper = createWrapper()

    expect(wrapper.find('.grid').exists()).toBe(true)
    expect(wrapper.find('.grid-cols-1').exists()).toBe(true)
    expect(wrapper.find('.md\\:grid-cols-2').exists()).toBe(true)
  })

  it('should display supplier code with correct styling', () => {
    const wrapper = createWrapper()

    const codeElement = wrapper.find('.bg-\\[\\#EDF3FF\\]')
    expect(codeElement.exists()).toBe(true)
    expect(codeElement.text()).toContain('#101908')
    expect(codeElement.classes()).toContain('text-[#1052E0]')
  })

  it('should handle missing contact information gracefully', () => {
    const supplierWithoutContact = {
      ...mockSupplier,
      contact: {
        name: '',
        email: '',
        phone: '',
        fax: ''
      }
    }

    const wrapper = createWrapper({ supplier: supplierWithoutContact })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.text()).toContain('Motion Industries INC.')
  })

  it('should emit console log when props change', async () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => { })

    const wrapper = createWrapper()

    await wrapper.setProps({
      supplier: {
        ...mockSupplier,
        name: 'New Supplier Name'
      }
    })

    await wrapper.vm.$nextTick()

    expect(consoleSpy).toHaveBeenCalledWith(
      'Supplier data updated:',
      expect.objectContaining({
        supplier: expect.objectContaining({
          name: 'New Supplier Name'
        })
      })
    )

    consoleSpy.mockRestore()
  })

  it('should display all required props', () => {
    const wrapper = createWrapper()

    expect(wrapper.props('supplier')).toBeDefined()
    expect(wrapper.props('supplier')).toEqual(mockSupplier)
  })

  it('should have correct text colors', () => {
    const wrapper = createWrapper()

    expect(wrapper.find('.text-gray-600').exists()).toBe(true)
    expect(wrapper.find('.text-gray-800').exists()).toBe(true)
    expect(wrapper.find('.text-\\[\\#1052E0\\]').exists()).toBe(true)
  })

  it('should format date using imported function', async () => {
    const { formatDate } = await import('@/utils/dateUtils.js')

    createWrapper()

    expect(formatDate).toHaveBeenCalledWith(mockSupplier.readAt)
  })

  it('should have proper spacing between elements', () => {
    const wrapper = createWrapper()

    expect(wrapper.find('.space-y-1').exists()).toBe(true)
    expect(wrapper.find('.space-x-4').exists()).toBe(true)
    expect(wrapper.find('.gap-6').exists()).toBe(true)
  })
})
