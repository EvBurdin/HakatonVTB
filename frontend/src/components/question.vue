
<template>
  <div >
    <div>
        <div>{{trueornot}}</div>
<div>{{this.$attrs.data.text}}</div>
<input type="text" v-model="comment">
<div class="" @click.prevent="vote(true)">Yes</div>
<div class="" @click.prevent="vote(false)">No</div>
    </div>
  <div v-for="(item,index) in allcomments" v-bind:key="index">
        <div>
        {{item.comment.userId.firstName+" "}} 
        {{item.comment.userId.lastName}}
        </div>
        <div>{{item.comment}}</div>
        <div v-if="item.statys">{{item.statys}}</div>
        <div v-if="!item.statys">{{item.statys}}</div>
  </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'opros',
//   props:[text],
  data() {
    return { 
        comment:'',
        allcomments:this.$attrs.allcomments,
        poll:'',
    }
  },
  mounted(){
    
  },
  methods: {
      trueornot(){
        let trueAnswer = 0;
        let falseAnswer = 0
        for (let i = 0; i < allcomments.length; i++) {
            if(allcomments.status === true){ trueAnswer++}
            else{falseAnswer++}
        }
        return `+${trueAnswer}/-${falseAnswer}`
      },
    getpoll(){
      axios.get('/api/getpoll')
      .then(response =>(this.poll = response))
    },
    vote(answer){
      axios.post(`/api/vote`,{
          pollId:this.$attrs.data.pollId,
          questionId:this.$attrs.data.questionId,
          vote:answer,
          comment:this.comment
      })
      .then(response =>(console.log('sdas')))


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