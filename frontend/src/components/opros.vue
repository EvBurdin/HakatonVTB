
<template>
  <div >
    <div v-for="(item, index) in poll" v-bind:key="index">
      <vopros v-bind:data="{
        text:'item.questionName',
        pollId:'item.questionName',
        questionId:'item.questionName',
        allcomments:'',
        }"></vopros>
    </div>
  </div>
</template>

<script>
import vopros from './vopros'
import axios from 'axios';
export default {
  name: 'opros',
  components: {
    'vopros': vopros
  },
  data() {
    return { 
      poll:[{
        questionName:'samd'
      },
      {
        questionName:'sjadhkasd'
      }],
      uploadComplit: false };
  },
  mounted(){
    // getpoll()
  },
  methods: {
    getpoll(){
      axios.get('/api/getpoll')
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