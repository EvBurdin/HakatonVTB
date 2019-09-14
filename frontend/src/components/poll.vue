
<template>
  <div >
    <div v-for="(item, index) in poll" v-bind:key="index">
      <question v-bind:data="{
        text:'item.questions.questionName',
        pollId:'item._id',
        questionId:'item.questions._id',
        allcomments:'item.questions.answer',
        }"></question>
    </div>
  </div>
</template>

<script>
import question from './question'
import axios from 'axios';
export default {
  name: 'opros',
  components: {
    'question': question
  },
  data() {
    return { 
      poll:'',
      };
  },
  mounted(){
    getpoll()
  },
  methods: {
    getpoll(){
      axios.get(`/api/getpoll?id=${this.$route.params.id}`)
      .then(response =>(this.poll = response))
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