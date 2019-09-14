<template>
  <form @submit.prevent="registration" class="d-flex flex-row justify-content-center align-items-center w-50">
    <fieldset>
      <legend>Зарегистрироваться</legend>
      <p class="text-danger">{{error}}</p>
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
      <button type="submit" class="btn btn-primary">Submit</button>
    </fieldset>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      username: '',
      password: '',
      error:'',
    };
  },
  methods: {
     registration () {
         axios.post('/api/registration/',{
           username: this.username,
           password: this.password
           }
         )
         .then(res=>{
           if (res.data){
             console.log(res.data)
           this.$router.replace('/gallery')
           } else {
            this.error='Данное имя пользователя занято.'
           }
           })
     } 
  }
};
</script>

<style >
</style>