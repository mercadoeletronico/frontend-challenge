import { shallowMount } from '@vue/test-utils'
import address from "../components/AddressCard.vue";

describe('Testing Address', () => {
    it('renders a div', () => {
      const wrapper = shallowMount(address)
      expect(wrapper.contains('div')).toBe(true)
    })
  })