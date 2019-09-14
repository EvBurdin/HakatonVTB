<template>
  <div>
      <input v-model="question" type="text" placeholder="ввеите вопрос" />
      <input ref="file" type="file" multiple name id />
  </div>
</template>
<script>
export default {
  name: 'pollFieldAdd',
  data() {
    return {
      question: '',
    }
  },
};
</script>
<style scoped>
</style>