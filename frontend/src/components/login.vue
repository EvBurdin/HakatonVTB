<template>
  <form class=" mt-5 d-flex flex-row justify-content-center align-items-center w-50" @submit.prevent="login" >
    <fieldset>
      <legend>Войти</legend>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          v-model="username"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <button type="submit" class="btn btnSubmit">Submit</button>
    </fieldset>
  </form>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      axios
        .post(
          '/api/login/',
          {
            username: this.username,
            password: this.password,
          },
          { withCredentials: true },
        )
        .then(res => {
          this.$store.dispatch('getUsers');
          this.$store.dispatch('getCurrentUser');
          this.$router.replace('/');
        });
    },
  },
};
</script>

<style >
.btnSubmit {
  background-color: #1E9FDF;
  color: #fff;
  margin-top: 15px;
  outline: none;
  }
.btnSubmit:hover {
  color: #fff
}

</style>
