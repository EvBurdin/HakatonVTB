<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-6">
        <input @input="titleChange" class ="titleInput" v-model="title" type="text" placeholder="Заголовок" >
      </div>
      <div class="col-3">

      </div>
    </div>
    <div class="row mt-5">
      <form @submit.prevent="addPoll" class="col-9">

        <div class="row">
          <questionAdd class="col-9"
            @questionChanged="updateQuestion($event)"
            @filesChanged="updateFiles($event)"
            :key="index"
            v-for="(question,index) in questions"
            :questionId="index"
          />
          <div class="btn inputButton" @click="addQuestion">Добавить</div>
        </div>
      </form>
      <div class="col-3">
      <div class="container">
        <div class="row">
          <div class='col-12'>
                  <VueCtkDateTimePicker class="mb-5" v-model="date"  minuteInterval="10"  format="YYYY-MM-DD HH:mm" label="Дата окончания" :noButton=true color="#1E9FDF" />
          </div>
      </div>
    </div>
        <div class="row justify-content-center">
          <div class="col-12 ">
            <input class="findingUser w-100" v-model="findingUser" placeholder="Добавить участников" type="text" />
            <ul id="findUser">
                <userInList
                  @userSelected="agreedUsers.push($event)"
                  :key="index"
                  v-for="(user,index) in filtredUsers"
                  :user="user"
                />
              </ul>
              <ul>
                <li :key="index" v-for="(user,index) in agreedUsers">{{user.name}}</li>
              </ul>
              <button class="submitButton inputButton btn">Сохранить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import questionAdd from '@/components/questionAdd';
import userInList from '@/components/userInList';
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
export default {
  name: 'pollAdd',
  components: { questionAdd, userInList, VueCtkDateTimePicker },
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
      title: '',
      findingUser: '',
      agreedUsers: [],
      expiredDate: '',
      date: ""
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
    async addPoll() {
      let poll = new FormData();
      const questions = this.questions;
      const questionsList = [];
      questions.forEach((el, index) => {
        let question = { question: '', files: [] };
        question.question = el.question;


        for (let i=0;i< el.files.files.length;i++) {
          question.files.push(el.files.files[i].name);
          poll.append(`${index}#${el.files.files[i].name}`, el.files.files[i]);
        }
        questionsList.push(question);
      });
      let data = {
        questions: questionsList,
        expireDate: this.expiredDate,
        agreedUsers: this.agreedUsers,
        title: this.title,
      };
      console.log(data);
      data=JSON.stringify(data)
      console.log(data);

      poll.append('data', data);
      axios.post('/api/addPool', poll, { withCredentials: true });
    },
    titleChange() {
      this.$emit ('titleChanged', {title:this.title})
    }
  },
};
</script>
<style scoped>
.inputButton {
  display: inline-block;
    padding: 6px 15px;
    cursor: pointer;
    border-radius: 4px;
    background-color: #1E9FDF;
    font-size: 16px;
    color: #fff;
    height: 46px;
}
.titleInput {
  outline: none;
  font-size: 28px;
  border: none;
  border-bottom: 1px solid #c7c7c7;
  margin-bottom: 10px;
  margin-top: 30px;
  color: #2f3441;
}
.findingUser {
  outline: none;
  font-size: 22px;
    border: none;
    border-bottom: 1px solid #c7c7c7;
    margin-bottom: 10px;
    margin-top: 30px;
    color: #2f3441;
}

#findUser li {
  cursor: pointer;
}
.submitButton {
  margin-top: 50px;
  outline: none;
  box-shadow: none;
}
button:active {
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
}
</style>
