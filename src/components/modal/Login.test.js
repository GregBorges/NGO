import Vue from 'vue'
import {shallow, createLocalVue} from 'vue-test-utils'
import App from '@/App'
import store from '@/store'

const localVue = createLocalVue()

describe('Login/Logout', () => {
  store.state.user.uid = 1
  let wrapper = shallow(App, {store, localVue})

  test('can login', () => {
    expect(wrapper.contains("[test='App.vue:logout']")).toBeTruthy()
  })

  test('can logout', () => {
    wrapper.find("[test='App.vue:logout']").trigger('click')
    Vue.nextTick(() => (expect(store.state.user.uid).toBeFalsy()))
  })
})
