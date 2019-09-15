<template>
  <form
    class="mt-5 d-flex flex-row justify-content-center align-items-center w-50"
    @submit.prevent="login"
  >
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
    async login() {
      await axios.post(
        '/api/login/',
        {
          username: this.username,
          password: this.password,
        },
        { withCredentials: true },
      );

      this.$store.dispatch('getUsers');
      await this.$store.dispatch('getCurrentUser');
      this.$store.dispatch('getUserPols');
      this.$router.replace('/');
    },
  },
};
</script>

<style >
.btnSubmit {
  background-color: #1e9fdf;
  color: #fff;
  margin-top: 15px;
  outline: none;
}
.btnSubmit:hover {
  color: #fff;
}
</style>
