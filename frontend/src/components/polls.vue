<template>
  <div>
    <div class="row  header">
   <div class="col-12">
   <h2>Ожидают Ваш голос</h2>
  </div>
  </div>


    <div class="row  mt-5">
      <pollCard :key="index" v-for="(poll, index) in polls" :poll="poll"/>
    </div>
    <div class="row  header">
   <div class="col-12">
   <h2>Ожидают завершения</h2>
  </div>
  </div>
    <div class="row  mt-5">
      <pollCard :key="index" v-for="(poll, index) in polls" :poll="poll"/>
    </div>
  </div>
</template>

<script>
import pollCard from '@/components/pollCard';
export default {
  name: 'polls',
  components: { pollCard },
  computed: {
       polls: function() {
        return this.$store.state.userPolls;
    },
  }
};
</script>

<style >
.header {
  text-align: center;
  margin-top: 60px;
}
h2 {
  font-size: 42px;
  color: #2f3441
}
</style>
