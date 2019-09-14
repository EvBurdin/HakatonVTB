<template>
  <div>
    <form @submit.prevent="addPoll">
      <input v-model="findingUser" type="text" />
      <ul id="findUser">
        <userInList
          @userSelected="addToAgree($event)"
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
        <li :key="index" v-for="(user,index) in agreedUsers">{{user.firstName}} {{user.lasttName}}</li>
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
        let filtredUsers = users.filter(user => {
          console.log()
          const fisrtNameMatch=~user.firstName.toLowerCase().indexOf(this.findingUser.toLowerCase())
          const lastNameMatch=~user.lastName.toLowerCase().indexOf(this.findingUser.toLowerCase())
          return (fisrtNameMatch||lastNameMatch)
        });
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
      agreedUsers: [],
      expiredDate: '2019-09-28',
      title: 'poll',
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
      console.log(question.files.files);
    },
    addQuestion() {
      this.questions.push({ question: '', files: '' });
    },
    addToAgree(user){
      if(!this.agreedUsers.includes(user)){
        this.agreedUsers.push(user)
      }
    },
    async addPoll() {
      let poll = new FormData();
      const questions = this.questions;
      const questionsList = [];
      questions.forEach((el, index) => {
        let question = { question: '', files: [] };
        question.question = el.question;

        if (el.files.files) {
          for (let i = 0; i < el.files.files.length; i++) {
            question.files.push(el.files.files[i].name);
            poll.append(`${index}#${el.files.files[i].name}`, el.files.files[i]);
          }
        }
        questionsList.push(question);
      });
      let data = {
        questions: questionsList,
        expiredDate: this.expiredDate,
        agreedUsers: this.agreedUsers,
        title: this.title,
        creatorId: this.$store.state.curentUser._id
      };
      console.log(data);
      data = JSON.stringify(data);
      console.log(data);

      poll.append('data', data);
      axios.post('/api/addPoll', poll, { withCredentials: true });
    },
  },
};
</script>
<style scoped>
</style>