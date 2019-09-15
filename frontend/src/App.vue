<template>
  <div id="app" class="d-flex flex-column justify-content-center align-items-center w-100 container-fluid">
    <navBar />
    <transition  mode="out-in" name="fade">
      <router-view class="container pageContainer"/>
    </transition>
  </div>
</template>

<script>
import navBar from './components/navBar';
import axios from 'axios';
import loginVue from './components/login.vue';
export default {
  name: 'App',
  components: { navBar },
  methods: {

  },
  async mounted() {
    try {
    await this.$store.dispatch("getCurrentUser")
    await this.$store.dispatch("getUserPols")
    console.log(this.$store.state.curentUser._id)
      this.$store.dispatch("getUsers")
    } catch(e) {
      console.log(this.$store.state.curentUser._id)

      if (!this.$store.state.curentUser._id) {
        this.$router.push('/login')
      }
    }

  },
};
</script>

<style>
body {
  font-family: HelveticaRegular,Arial,Garuda,sans-serif;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
.container-fluid {
  padding-left: 0;
  padding-right: 0;
}
.pageContainer {
  padding-left: 80px;
  padding-right: 80px;
  padding-bottom: 40px;
}
</style>
