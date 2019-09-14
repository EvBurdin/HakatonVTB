<template>
  <div>
    <input @input="questionChange" v-model="question" type="text" placeholder="ввеите вопрос" />
    <input @change="filesChange" ref="file" type="file" multiple name id />
  </div>
</template>
<script>
export default {
  name: 'pollFieldAdd',
  props: ['questionId'],
  data() {
    return {
      question: '',
    };
  },
  methods: {
    questionChange() {
      this.$emit ('questionChanged', {questionId:this.questionId,question:this.question})
    },
    filesChange() {
      this.$emit ('filesChanged', {questionId:this.questionId, files:this.$refs.file.value})
    }
  }
};
</script>
<style scoped>
</style>