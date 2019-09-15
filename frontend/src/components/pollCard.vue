<template>
  <div class="col-12 col-md-6 col-sm-12 col-lg-4">
            <div class="card border-info mb-3" style="max-width: 20rem;">
              <div class="card-header">Активно до: {{poll.dateExpired.toString().slice(0,10)}}</div>
              <div class="card-body bodyCard">
                <h4 class="card-title">{{poll.pollName}}</h4>
                <ol><li :key="index" v-for="(question,index) in poll.questions" class="card-text">{{question.questionId.question}}</li></ol>
              </div>
          </div>
      </div>
</template>

<script>
export default {
  name: 'pollCard',
  props:['poll'],
};
</script>

<style >

.border-info {
    border-color: #1E9FDF!important;
    border-radius: 3px;
}
.bodyCard {
  max-height: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: 15px solid white;
  padding-left: 40px;
  padding-right: 40px;
}
</style>
