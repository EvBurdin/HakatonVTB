<template >
  <!-- <nav class="align-self-stretch navbar navbar-expand navbar-dark">
    <div class="offset-2  collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav mr-auto">

        <li v-if="!user" class="nav-item">
          <router-link class="nav-link" to="/reg">Регистрация</router-link>
        </li>
        <li v-if="!user" class="nav-item">
          <router-link class="nav-link" to="/login">Войти</router-link>
        </li>
          <li v-if="user" class="nav-item">
          <router-link class="nav-link main" to="/" @click="$event.target.classList.add('active')">
            Голосования
            <span class="sr-only">(current)</span>
          </router-link>
        </li>
        <li v-if="user" class="nav-item">
          <router-link class="nav-link" to="/completed">Завершенные</router-link>
        </li>
        <li v-if="user" class="nav-item">
          <router-link class="nav-link" to="/new">Создать</router-link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <button @click="logout" v-if="user" class="mr-3 my-2 my-sm-0 btn btn-danger">Выйти</button>
        <p v-if="user" class="my-2 my-sm-0 text-white">{{user}}</p>
      </form>
    </div>
  </nav> -->
  <nav class="navbar navbar-expand-md align-self-stretch navbar-dark navstyle">
  <button  ref="button" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav mr-auto">

        <li v-if="!user" class="nav-item">
          <router-link class="nav-link" to="/reg">Регистрация</router-link>
        </li>
        <li v-if="!user" class="nav-item">
          <router-link class="nav-link" to="/login">Войти</router-link>
        </li>
          <li v-if="user" class="nav-item">
          <router-link class="nav-link main" to="/" @click="$event.target.classList.add('active')">
            Голосования
            <span class="sr-only">(current)</span>
          </router-link>
        </li>
        <li v-if="user" class="nav-item">
          <router-link class="nav-link" to="/completed">Завершенные</router-link>
        </li>
        <li v-if="user" class="nav-item">
          <router-link class="nav-link" to="/new">Создать</router-link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <button @click="logout" v-if="user" class="mr-3 my-2 my-sm-0 btn btn-danger">Выйти</button>
        <p v-if="user" class="my-2 my-sm-0 text-white">{{user}}</p>
      </form>
  </div>
</nav>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  computed: {
    user: function() {
      if (this.$store.state.curentUser) {
        return `${this.$store.state.curentUser.firstName} ${this.$store.state.curentUser.lastName}`;
      } else {
        return ''
      }
    },
  },
  methods: {
    ...mapActions({
      logout: 'logout',
    }),
  },

  name: 'navBar',
};
</script>

<style>
nav {
  background-color: #0a2896;
  color: #fff;
}
.navbar-dark .navbar-nav .nav-link{
  color: #fff;
}
.main {
  background-color: #FF0039;
}
.navstyle {
  padding-left: 90px;
  padding-right: 90px;
}
</style>
