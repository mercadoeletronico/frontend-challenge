import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import PreOrder from '../PreOrder.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

vi.mock('@/utils/dateUtils.js', () => ({
  formatDate: vi.fn((date) => '04/16/2020, 12:32:55 PM')
}))

const mockHeader = {
  number: '4510001114',
  serial: '1223344',
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
  createdAt: '2020-05-23T12:45:20.399Z'
}

describe('PreOrder', () => {
  const createWrapper = (props = {}) => {
    return mount(PreOrder, {
      props: {
        header: mockHeader,
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

  it('should display pre-order information correctly', () => {
    const wrapper = createWrapper()

    expect(wrapper.text()).toContain('4510001114')

    expect(wrapper.text()).toContain('#ME1223344')

    expect(wrapper.text()).toContain('MTP West Buyer')
  })

  it('should display contact information', () => {
    const wrapper = createWrapper()

    expect(wrapper.text()).toContain('Jacksonville Group (Jason Burn)')
    expect(wrapper.text()).toContain('jacksonvillegroup@me.com')
    expect(wrapper.text()).toContain('903-575-3050')
    expect(wrapper.text()).toContain('999-575-3050')
  })

  it('should display price and currency', () => {
    const wrapper = createWrapper()

    expect(wrapper.text()).toContain('USD')
    expect(wrapper.text()).toContain('20000')
  })

  it('should display status', () => {
    const wrapper = createWrapper()

    expect(wrapper.text()).toContain('Need to confirm')
  })

  it('should display formatted creation date', () => {
    const wrapper = createWrapper()

    expect(wrapper.text()).toContain('Created at 04/16/2020, 12:32:55 PM')
  })

  it('should have correct styling classes', () => {
    const wrapper = createWrapper()
    expect(wrapper.find('.bg-\\[\\#1052E0\\]').exists()).toBe(true)
    expect(wrapper.find('.text-white').exists()).toBe(true)
    expect(wrapper.find('.rounded-r-lg').exists()).toBe(true)
  })

  it('should render font-awesome icons', () => {
    const wrapper = createWrapper()
    const icons = wrapper.findAllComponents({ name: 'font-awesome-icon' })
    expect(icons.length).toBeGreaterThan(0)
  })

  it('should handle missing contact information gracefully', () => {
    const headerWithoutContact = {
      ...mockHeader,
      contact: null
    }

    const wrapper = createWrapper({ header: headerWithoutContact })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.text()).toContain('MTP West Buyer')
  })

  it('should emit console log when props change', async () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => { })

    const wrapper = createWrapper()

    await wrapper.setProps({
      header: {
        ...mockHeader,
        buyer: 'New Buyer Name'
      }
    })

    await wrapper.vm.$nextTick()

    expect(consoleSpy).toHaveBeenCalledWith(
      'Supplier data updated:',
      expect.objectContaining({
        header: expect.objectContaining({
          buyer: 'New Buyer Name'
        })
      })
    )

    consoleSpy.mockRestore()
  })

  it('should have responsive classes', () => {
    const wrapper = createWrapper()
    expect(wrapper.find('.lg\\:h-\\[110px\\]').exists()).toBe(true)
    expect(wrapper.find('.flex-col').exists()).toBe(true)
    expect(wrapper.find('.md\\:flex-row').exists()).toBe(true)
  })
})
