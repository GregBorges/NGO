<template lang="pug">
  .modal(:class='{active: isProfileModalActive}')
    .modal-overlay(@click='closeModal')
    .modal-container
      .modal-header
        button.btn.btn-clear.float-right(@click='closeModal')
        .modal-title.h5 Profile
      .modal-body
        blockquote.info To change your account information, please update it on <a href="https://twitter.com/settings/account">Twitter</a> and reload this page.
      .modal-footer
        button.btn.btn-error(@click='deleteAccount' :class='{loading: isLoading}' test='modal/Profile:delete-user') Delete Account
</template>





<script>
  import {mapState} from 'vuex'

  export default {
    name: 'modal-profile',

    computed: mapState([
      'isProfileModalActive'
    ]),

    data () {
      return {
        isLoading: false
      }
    },

    methods: {
      closeModal () {
        this.$store.commit('toggleProfileModal')
      },
      deleteAccount () {
        this.$store.commit('deleteUser')
      }
    }
  }
</script>
