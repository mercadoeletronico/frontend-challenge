import { shallowMount } from '@vue/test-utils'
import header from "../components/HeaderComponent.vue";

describe('Testing Header', () => {
    it('renders a div', () => {
      const wrapper = shallowMount(header)
      expect(wrapper.contains('div')).toBe(true)
    })
  })