import { shallowMount } from '@vue/test-utils'
import supplier from "../components/SupplierCard.vue";

describe('Testing Address', () => {
    it('renders a div', () => {
      const wrapper = shallowMount(supplier)
      expect(wrapper.contains('div')).toBe(true)
    })
  })