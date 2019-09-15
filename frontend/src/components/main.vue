
<template>
<div>
  <div> 
    <!-- <div v-for="(item, index) in noAnsweredPoll" v-bind:key="index">
      <router-link :to="{ name: 'Poll', params: {id:index._id} }" tag="div">
      <div>{{item.pollName}}</div>
      <div>{{dateExpired}}</div>
      <div v-for="(question, index) in item.questions" v-bind:key="index">
          <div>{{index+1}}</div><div>{{question.questionName}}</div>
      </div></router-link>
    </div>

    <div v-for="(item, index) in AnsweredPoll" v-bind:key="index">
      <router-link :to="{ name: 'Poll', params: {id:index._id} }" tag="div">
      <div>{{item.pollName}}</div>
      <div>{{dateExpired}}</div>
      <div v-for="(question, index) in item.questions" v-bind:key="index">
          <div>{{index+1}}</div><div>{{question.questionName}}</div>
      </div>
      </router-link>
    </div> -->
  </div></div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'main',
  components: {
  },
  data() {
    return {
      // polls:'',
    curentUser: this.user,
    noAnsweredPoll:[],
    answeredPoll:[],
    };
  },
  computed:{
      user: function(){
          return this.$store.state.curentUser._id
      },
      polls: function(){
        return this.$store.state.userPolls
      }
  },
  mounted(){
    this.getpolls()
    this.sort(this.polls)
  },
  methods: {
    sort(response){
    console.log(response)
          let count = 0;
        for (let i = 0;i < response.length; i++) {
            for (let j = 0; j < response[i].questions.length; j++) {
                for (let g = 0; g < response[i].questions[j].answer.length; g++) {
                if(response[i].questions[j].answer[g].userId===this.user){
                    count++
                }
                if(g === response[i].questions[j].answer.length &&
                count === response[i].questions[j].answer.length){
                    this.answeredPoll.push(response[i])
                }
                if(g === response[i].questions[j].answer.length &&
                count !== response[i].questions[j].answer.length){
                    this.answeredPoll.push(response[i])
                }
                }
                count = 0
            }
            
        }return true
      },
      
    
    async getpolls(){      
      // let thisuser = await this.curentUser
      axios.get(`/api/userpolls/${this.user}`)
      .then(response=>(this.polls = response))
      console.log('qqqqq')
    },
  }}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.true{
  color: blue
}
</style>