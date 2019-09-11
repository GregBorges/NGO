<template lang="pug">
  .modal(:class='{active: isLoginModalActive}')
    .modal-overlay(@click='closeModal')
    .modal-container
      .modal-header
        button.btn.btn-clear.float-right(@click='closeModal')
        .modal-title.h5 Sign In / Register
      .modal-body
        .content
          p Thanks for taking the first steps towards becoming a <strong>Nonprofiter</strong>! We have a <a href="https://trello.com/b/Jopi5Zxg/development">ton of features</a> lined up for both our users and volunteers.
          blockquote.warning Please note that we're still in the early stages of development; there's not much you'll be able to do right now.
      .modal-footer
        button.btn.btn-primary(@click='twitterLogin' :class='{loading: isLoading}') Twitter Sign In
</template>





<script>
  import firebase from '@/service/firebase'
  import {mapState} from 'vuex'

  export default {
    name: 'modal-login',

    data () {
      return {
        isLoading: false
      }
    },

    computed: mapState([
      'isLoginModalActive'
    ]),

    methods: {
      closeModal () {
        this.$store.commit('toggleLoginModal')
      },

      twitterLogin () {
        let provider = new firebase.auth.TwitterAuthProvider()
        this.isLoading = true

        firebase.auth().signInWithPopup(provider)
          // @TODO Let's add a welcome message if result.additionalUserInfo.isNewUser
          // @TODO We should make stay connected opt-in: https://firebase.google.com/docs/auth/web/auth-state-persistence
          .then((result) => {
            this.$store.commit('setUser', result.user)
          })
          // @TODO Let's toast the error message (test by turning off connection or temp disabling authorized domains)
          .catch((err) => {
            console.error(err)
          })
          .then(() => {
            this.isLoading = false
            this.$store.commit('toggleLoginModal')
          })
      }
    }
  }
</script>
