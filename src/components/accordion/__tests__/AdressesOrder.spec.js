import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import AdressesOrder from '../AdressesOrder.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const mockAddresses = [
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
  },
  {
    label: 'Bill to',
    name: 'Pilgrims Pride Corp.',
    code: null,
    address: '1301 Glendale Blvd, Los Angeles, CA 90026, USA',
    contact: {
      name: 'Barbara Streifes Hasseublad',
      email: 'Z01confirmations@me.com',
      phone: '222-506-8000',
      fax: '222-506-8000'
    }
  },
  {
    label: 'Charge to',
    name: 'Lorem Ipsum',
    code: null,
    address: '2222 Promontory CR, Greeley, CO 22222-9039 - EUA',
    contact: {
      name: 'Barbara Streifes Hasseublad',
      email: 'lorem.ipsum@me.com',
      phone: '970-222-8000',
      fax: '970-222-8000'
    }
  }
]

describe('AdressesOrder', () => {
  const createWrapper = (props = {}) => {
    return mount(AdressesOrder, {
      props: {
        addresses: mockAddresses,
        defaultOpen: true,
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

  it('should display "Addresses" title', () => {
    const wrapper = createWrapper()
    expect(wrapper.text()).toContain('Addresses')
  })

  it('should render accordion button with correct icon', () => {
    const wrapper = createWrapper()

    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)

    const icons = wrapper.findAllComponents({ name: 'font-awesome-icon' })
    expect(icons.length).toBeGreaterThan(0)
  })

  it('should toggle accordion when button is clicked', async () => {
    const wrapper = createWrapper({ defaultOpen: false })

    expect(wrapper.vm.isOpen).toBe(false)

    await wrapper.find('button').trigger('click')

    expect(wrapper.vm.isOpen).toBe(true)

    await wrapper.find('button').trigger('click')

    expect(wrapper.vm.isOpen).toBe(false)
  })

  it('should change chevron icon when toggling', async () => {
    const wrapper = createWrapper({ defaultOpen: true })

    let chevronIcon = wrapper.findComponent({ name: 'font-awesome-icon' })
    expect(chevronIcon.props('icon')).toBe('fa-solid fa-chevron-up')

    await wrapper.find('button').trigger('click')

    chevronIcon = wrapper.findComponent({ name: 'font-awesome-icon' })
    expect(chevronIcon.props('icon')).toBe('fa-solid fa-chevron-down')
  })

  it('should display all addresses when open', () => {
    const wrapper = createWrapper()

    expect(wrapper.text()).toContain('Ship to')
    expect(wrapper.text()).toContain('West Plant')
    expect(wrapper.text()).toContain('Bill to')
    expect(wrapper.text()).toContain('Pilgrims Pride Corp.')
    expect(wrapper.text()).toContain('Charge to')
    expect(wrapper.text()).toContain('Lorem Ipsum')
  })

  it('should display address codes when available', () => {
    const wrapper = createWrapper()

    expect(wrapper.text()).toContain('#TR01')

    expect(wrapper.text()).not.toContain('#null')
  })

  it('should display all contact information', () => {
    const wrapper = createWrapper()

    expect(wrapper.text()).toContain('Z01confirmations@me.com')
    expect(wrapper.text()).toContain('lorem.ipsum@me.com')

    expect(wrapper.text()).toContain('Brian Mazda Tetsuo')
    expect(wrapper.text()).toContain('Barbara Streifes Hasseublad')

    expect(wrapper.text()).toContain('222-575-3050')
    expect(wrapper.text()).toContain('222-506-8000')
    expect(wrapper.text()).toContain('970-222-8000')
  })

  it('should display all addresses', () => {
    const wrapper = createWrapper()

    expect(wrapper.text()).toContain('1311 W Washington Blvd, Los Angeles, CA 90006, United States')
    expect(wrapper.text()).toContain('1301 Glendale Blvd, Los Angeles, CA 90026, USA')
    expect(wrapper.text()).toContain('2222 Promontory CR, Greeley, CO 22222-9039 - EUA')
  })

  it('should render correct number of font-awesome icons', () => {
    const wrapper = createWrapper()

    const icons = wrapper.findAllComponents({ name: 'font-awesome-icon' })
    expect(icons.length).toBe(16)
  })

  it('should have correct icon types for contact information', () => {
    const wrapper = createWrapper()

    const icons = wrapper.findAllComponents({ name: 'font-awesome-icon' })
    const iconProps = icons.map(icon => icon.props('icon'))

    expect(iconProps.filter(icon => icon === 'fa-solid fa-map-marker-alt')).toHaveLength(3)
    expect(iconProps.filter(icon => icon === 'fa-regular fa-envelope')).toHaveLength(3)
    expect(iconProps.filter(icon => icon === 'fa-regular fa-user')).toHaveLength(3)
    expect(iconProps.filter(icon => icon === 'fa-solid fa-phone')).toHaveLength(3)
    expect(iconProps.filter(icon => icon === 'fa-solid fa-fax')).toHaveLength(3)
  })

  it('should have responsive grid layout', () => {
    const wrapper = createWrapper()

    const gridContainer = wrapper.find('.grid')
    expect(gridContainer.exists()).toBe(true)
    expect(gridContainer.classes()).toContain('grid-cols-1')
    expect(gridContainer.classes()).toContain('md:grid-cols-3')
    expect(gridContainer.classes()).toContain('gap-6')
  })

  it('should have correct styling classes', () => {
    const wrapper = createWrapper()

    expect(wrapper.find('.bg-white').exists()).toBe(true)
    expect(wrapper.find('.rounded-lg').exists()).toBe(true)
    expect(wrapper.find('.overflow-hidden').exists()).toBe(true)

    expect(wrapper.find('.shadow-md').exists()).toBe(true)
    expect(wrapper.find('.shadow-gray-200').exists()).toBe(true)
  })

  it('should handle empty addresses array', () => {
    const wrapper = createWrapper({ addresses: [] })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.text()).toContain('Addresses')

    const addressCards = wrapper.findAll('.shadow-md.shadow-gray-200')
    expect(addressCards).toHaveLength(0)
  })

  it('should handle address without code', () => {
    const addressWithoutCode = [{
      label: 'Test Address',
      name: 'Test Company',
      code: null,
      address: 'Test Street',
      contact: {
        name: 'Test Person',
        email: 'test@test.com',
        phone: '123-456-7890',
        fax: '123-456-7890'
      }
    }]

    const wrapper = createWrapper({ addresses: addressWithoutCode })

    expect(wrapper.text()).toContain('Test Company')
    expect(wrapper.text()).not.toContain('#null')
    expect(wrapper.text()).not.toContain('#undefined')
  })

  it('should respect defaultOpen prop', () => {

    const wrapperOpen = createWrapper({ defaultOpen: true })
    expect(wrapperOpen.find('.grid').isVisible()).toBe(true)

    const wrapperClosed = createWrapper({ defaultOpen: false })
    expect(wrapperClosed.find('.grid').isVisible()).toBe(false)
  })

  it('should have correct button styling and behavior', () => {
    const wrapper = createWrapper()

    const button = wrapper.find('button')
    expect(button.classes()).toContain('w-full')
    expect(button.classes()).toContain('pb-3')
    expect(button.classes()).toContain('text-left')
    expect(button.classes()).toContain('flex')
    expect(button.classes()).toContain('items-center')
    expect(button.classes()).toContain('justify-between')
    expect(button.classes()).toContain('bg-white')
    expect(button.classes()).toContain('transition-colors')
    expect(button.classes()).toContain('focus:outline-none')
  })

  it('should have correct chevron styling', () => {
    const wrapper = createWrapper()

    const chevronContainer = wrapper.find('.bg-\\[\\#EDF3FF\\]')
    expect(chevronContainer.exists()).toBe(true)
    expect(chevronContainer.classes()).toContain('rounded-full')
    expect(chevronContainer.classes()).toContain('p-1')
    expect(chevronContainer.classes()).toContain('w-5')
    expect(chevronContainer.classes()).toContain('h-5')
    expect(chevronContainer.classes()).toContain('flex')
    expect(chevronContainer.classes()).toContain('items-center')
    expect(chevronContainer.classes()).toContain('justify-center')
    expect(chevronContainer.classes()).toContain('hover:bg-gray-50')
  })
})
