<template>
  <div id="app" class="d-flex flex-column justify-content-center align-items-center w-100 container-fluid">
    <navBar />
    <transition  mode="out-in" name="fade">
      <router-view class="container"/>
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

  },
  mounted() {
    this.$store.dispatch("getUsers")
    this.$store.dispatch("getCurrentUser")
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

</style>
