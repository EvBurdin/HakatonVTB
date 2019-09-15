<template>
  <div class>
    <div class="card border-info mb-3">
      <div class="card-header">{{poll.pollName}}</div>
      <div class="input-group">

      </div>
      <div class="mb-5 " :key="index" v-for="(question,index) in poll.questions" >
        <h4 class="card-title">{{question.questionId.question}}</h4>
        <button class=" col-6 btn btn-success ">Голосовать "За"</button>
        <button class=" col-6 btn btn-danger votebtn">Голосовать "Против"</button>
        <input type="text" class="form-control w-50" placeholder="Оставьте комментарий" />
        
      </div>
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
}
</style>
