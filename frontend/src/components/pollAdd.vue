<template>
  <div>
    <form @submit.prevent="addPoll">
      <input v-model="findingUser" type="text" />
      <ul id="findUser">
        <userInList
          @userSelected="agreedUser.push($event)"
          :key="index"
          v-for="(user,index) in filtredUsers"
          :user="user"
        />
      </ul>
      <questionAdd
        @questionChanged="updateQuestion($event)"
        @filesChanged="updateFiles($event)"
        :key="index"
        v-for="(question,index) in questions"
        :questionId="index"
      />
      <ul>
        <li :key="index" v-for="(user,index) in agreedUser">{{user.name}}</li>
      </ul>
      <div @click="addQuestion">add new question</div>
      <button>Сохранить</button>
    </form>
  </div>
</template>
<script>
import axios from 'axios';
import questionAdd from '@/components/questionAdd';
import userInList from '@/components/userInList';
export default {
  name: 'pollAdd',
  components: { questionAdd, userInList },
  computed: {
    filtredUsers: function() {
      let users = this.users;
      if (this.findingUser) {
        let filtredUsers = users.filter(user => ~user.name.indexOf(this.findingUser));
        return filtredUsers;
      } else {
        return [];
      }
    },
    users: function() {
      return this.$store.state.users;
    },
  },
  data() {
    return {
      questions: [{ question: '', files: '' }],
      findingUser: '',
      agreedUser: [],
      expiredDate: '',
    };
  },
  methods: {
    updateQuestion(e) {
      console.log(e);
      let question = this.questions[e.questionId];
      question.question = e.question;
    },
    updateFiles(e) {
      let question = this.questions[e.questionId];
      question.files = e.files;
    },
    addQuestion() {
      this.questions.push({ question: '', files: '' });
    },
    async addPoll() {
      const file = this.$refs.file.files[0];
      const fileName = this.$refs.file.files[0].name;
      const disc = this.$refs.discription.value;
      const image = new FormData();
      const data = JSON.stringify({ fileName, disc });
      image.append(this.$refs.file.files[0].name, this.$refs.file.files[0]);
      image.append('data', data);
      axios.post('/api/addPool', {}, { withCredentials: true });
    },
  },
};
</script>
<style scoped>
</style>