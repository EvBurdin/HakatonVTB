<template>
  <div class>
    <div class="card border mb-3">
      <h3 class="card-header">{{poll.pollName}}</h3>
      <div class="input-group">

      </div>
      <div class="row">
        <div class="mb-5 col-lg-12" :key="index" v-for="(question,index) in poll.questions" >
      <h4 class="card-title">{{question.questionId.question}}</h4>

      <div class="row justify-content-center"><button class=" col-5 btn btn-success votebtn">Голосовать "За"</button>
      <button class=" col-5 btn btn-danger votebtn">Голосовать "Против"</button></div>
      <div class="row justify-content-center">
        <input type="text" class="form-control w-50" placeholder="Оставьте комментарий" />
      </div>


      </div></div>
    </div>
    <div class="row"></div>
  </div>
</template>
<script>
export default {
  name: 'voteCard',
  props: ['poll'],
};
</script>
<style scoped>
.border-info {
  border-color: #1e9fdf !important;
  border-radius: 3px;
}
.bodyCard {
  max-height: 140px;
  overflow: hidden;
  border-bottom: 15px solid white;
  padding-left: 40px;
  padding-right: 40px;
}
.votebtn {
  cursor: pointer;
  margin: 10px;
  margin-bottom: 10px;
}
h4 {
  margin-left: 50px;
  margin: 25px;
}
.pageContainer {
  margin-left: 70px;
  margin-right: 70px;
}
.btn-success {
  background-color: #1e9fdf;
  border-color: #1e9fdf
}
.btn-danger {
   background-color: #FF0039;
  border-color: #FF0039;
}
</style>
