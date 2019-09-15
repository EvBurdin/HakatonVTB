
<template>
<div>
  <div> 
    <div v-for="(item, index) in noAnsweredPoll" v-bind:key="index">
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
    </div>
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
    curentUser: this.user,
    noAnsweredPoll:[],
    answeredPoll:[],
    };
  },
  computed:{
      user: function(){
          return this.$store.state.curentUser._id
      }
  },
  mounted(){
    this.getpolls()
    // this.sort(this.polls)
  },
  methods: {
    // sort(arr){
    //     console.log(this.polls)
    //     let count = 0;
    //     for (let i = 0;i < arr.length; i++) {
    //         for (let j = 0; j < arr[i].questions.length; j++) {
    //             console.log(arr[i].questions)
    //             if(arr[i].questions[j].question.answer.userId==this.curentUser){
    //                 count++
    //                 console.log(count);
                    
    //             }
    //             if(j === arr[i].questions.length && count === arr[i].questions.length){
    //                 this.answeredPoll.push(arr[i])
    //             }
    //             if(j === arr[i].questions.length && count !== arr[i].questions.length){
    //                 this.noAnsweredPoll.push(arr[i])
    //             }
    //         }
    //         count = 0
    //     }

    // },
    getpolls(){
      axios.get(`/api/userpolls/${this.user}`)
      .then(response=>{
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
            
        }
      })
      return true
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