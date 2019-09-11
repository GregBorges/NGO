import Vue from 'vue'
import {shallow, createLocalVue} from 'vue-test-utils'
import Profile from '@/components/modal/Profile'
import store from '@/store'

const localVue = createLocalVue()

describe('Profile.vue', () => {
  let wrapper

  test('can delete user', () => {
    store.state.user.uid = 1
    wrapper = shallow(Profile, {store, localVue})
    wrapper.find("[test='modal/Profile:delete-user']").trigger('click')
    Vue.nextTick(() => (expect(store.state.user.uid).toBeFalsy()))
  })
})
