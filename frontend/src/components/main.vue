
<template>
  <div name="ne golosoval"> 
    <div v-for="(item, index) in noAnsweredPoll" v-bind:key="index">
      <router-link :to="{ name: 'Poll', params: {id:index._id} }" tag="div">
      <div>{{item.pollName}}</div>
      <div>{{dateExpired}}</div>
      <div v-for="(question, index) in item.questions" v-bind:key="index">
          <div>{{index}}</div><div>{{question.questionName}}</div>
      </div></router-link>
    </div>
    
    <div v-for="(item, index) in AnsweredPoll" v-bind:key="index">
      <router-link :to="{ name: 'Poll', params: {id:index._id} }" tag="div">
      <div>{{item.pollName}}</div>
      <div>{{dateExpired}}</div>
      <div v-for="(question, index) in item.questions" v-bind:key="index">
          <div>{{index}}</div><div>{{question.questionName}}</div>
      </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'main',
  components: {
  },
  data() {
    return { 
      polls:'',
      noAnsweredPoll:[],
      answeredPoll:[],
      };
  },
  mounted(){
    getpolls()
  },
  methods: {
      route(id){

      },
    sort(arr){
        let count = 0;
        for (let i = 0;i <= arr.length; i++) {
            for (let ii = 0; ii < arr[i].questions.length; ii++) {
                if(arr[i].questions[ii].question.answer.userId===this.$state.curentUser._id){
                    count++
                }
                if(ii === arr[i].questions.length && count === arr[i].questions.length){
                    this.answeredPoll.push(arr[i])
                }
                if(ii === arr[i].questions.length && count !== arr[i].questions.length){
                    this.noAnsweredPoll.push(arr[i])
                }
            }
            count = 0
        }

    },
    getpolls(){
      axios.get('/api/getpolls')
      .then(response =>(sort(response)))
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.true{
  color: blue
}
</style>