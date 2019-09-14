
<template>
  <div class="d-flex flex-column align-items-center">
    <transition mode="out-in" name="fade">
      <form
        v-if="!uploadComplit"
        @submit.prevent="fileUpload"
        style="display:flex; justify-content:center; width: 400px;"
        key="upload"
      >
        <fieldset>
          <h1 class="mb-5">Загрузить изображение:</h1>
          <div class="form-group">
            <label for="exampleTextarea">Описание</label>
            <textarea ref="discription" class="form-control" id="exampleTextarea" rows="3"></textarea>
          </div>
          <div class="form-group">
            <label for="exampleInputFile">Выберите файл</label>
            <input
              ref="file"
              type="file"
              class="form-control-file"
              id="exampleInputFile"
              aria-describedby="fileHelp"
            />
            <small id="fileHelp" class="form-text text-muted">Выберите файл и описание к нему</small>
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </fieldset>
      </form>
      <form @submit.prevent="uploadComplit=false" v-if="uploadComplit" key="uploadComplit">
        <p>Изображение успешно загружено</p>
        <button type="submit" class="btn btn-primary">Загрузить еще</button>
      </form>
    </transition>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'home',
  data() {
    return { uploadComplit: false };
  },
  methods: {
    fileUpload() {
      console.log(this.$refs.file.files);
      const file = this.$refs.file.files[0];
      const fileName = this.$refs.file.files[0].name;
      const disc = this.$refs.discription.value;
      const image = new FormData();
      const data = JSON.stringify({ fileName, disc });
      image.append(this.$refs.file.files[0].name, this.$refs.file.files[0]);
      image.append('data', data);
      axios
        .post('/api/images/', image, { withCredentials: true })
        .then((this.uploadComplit = true));
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>