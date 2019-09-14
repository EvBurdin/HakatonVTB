<template>
  <div class="row newQuestion">
    <div class="col-12 ">
      <div class="input-group mb-1">
      <input @input="questionChange" class ="questionInput form-control" v-model="question" type="text" placeholder="Вопрос" >
      <!-- <div class="input-group-append">
        <button class="btn inputButton" type="button">Добавить</button>
      </div> -->
</div>
    </div>
  <div class="col-6">
    <input @change="filesChange" ref="file" type="file" class="" id="my-file" multiple>
    <label tabindex="0" for="my-file" class="new-button">Выбрать файл</label>
  </div>

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
.questionInput {
  outline: none;
  font-size: 22px;
  border: none;
  border-bottom: 1px solid #c7c7c7;
  margin-bottom: 10px;
  color: #2f3441

}
.newQuestion {
  margin: 10px;
}
.fileInput {
  position: absolute;
  top: 0; left: 0;
  width: 225px;
  opacity: 0;
  padding: 14px 0;
  cursor: pointer;
}
.new-button {
    display: inline-block;
    padding: 4px 9px;
    cursor: pointer;
    border-radius: 4px;
    background-color: #1E9FDF;
    font-size: 14px;
    color: #fff;
}
.inputButton {
  display: inline-block;
    padding: 6px 15px;
    cursor: pointer;
    border-radius: 4px;
    background-color: #1E9FDF;
    font-size: 16px;
    color: #fff;
    height: 46px;
}
input[type="file"] {
  position: absolute;
  z-index: -1;
  top: 4px;
  left: 30px;
  font-size: 11px;
  color: rgb(104, 104, 104);
}
.button-wrap {
  position: relative;
}
input {
   outline: none;
}
.form-control:focus {
  box-shadow: none
}
.btn {
  box-shadow: none;
}
</style>
