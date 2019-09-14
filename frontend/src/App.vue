<template>
  <div id="app" class="d-flex flex-column justify-content-center align-items-center w-100">
    <navBar />
    <transition mode="out-in" name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import navBar from './components/navBar';
import axios from 'axios';
export default {
  name: 'App',
  components: { navBar },
  methods: {
    async userData() {
      axios
        .post('/api/user/', {}, { withCredentials: true })
        .then(res => {
          this.$store.commit('SET_USER', res.data)
          this.$router.replace('/').catch(e=>{})
          })
        .catch(err => {
          console.log('User unavtoraised')
          this.$router.replace('/login').catch(e=>{})
          });
    },
  },
  mounted() {
    this.userData();
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
