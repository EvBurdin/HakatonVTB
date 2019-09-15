<template>
  <div>
    <div class="row header">
      <div class="col-9 ">
        <h2>Заголовок</h2>
      </div>
    </div>
    <div class="cardQuestion mt-5 row">
      <voteCard class="col-9" />
    </div>
  </div>
</template>
<script>
import voteCard from '@/components/voteCard';
export default {
  name: 'voiting',
  components: {voteCard}
};
</script>
<style scoped>
.header {
  text-align: center;
  margin-top: 60px;
}
h2 {
  font-size: 42px;
  color: #2f3441
}
</style>
