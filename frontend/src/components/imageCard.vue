<template>
  <div class="card bg-light mb-3" style="max-width: 20rem;">
    <div class="card-header bg-primary text-white">{{description}}</div>
    <div class="card-body">
      <img :src="src" :alt="description" />
    </div>
    <div class="d-flex justify-content-between">
      <button @click="deleteImage" class="align-self-stretch d-block btn btn-danger ">␡</button>
      <button @click="editDescr" class="align-self-stretch d-block btn btn-primary ">⌥</button>
      <button class="align-self-stretch d-block btn btn-success ">⌘</button>
      <changeDescrMod @editDone="editImage" @closeModal="editMode=false" :description="description" :visible="editMode"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import changeDescrMod from '@/components/changeDescrMod.vue';

export default {
  name: 'imageCard',
  props: ['src', 'description','id'],
  data() {
    return {
        editMode:false
    }
  },
  components: {changeDescrMod },
  methods: {
    async deleteImage() {
      axios.delete(`/api/images/?id=${this.id}`)
         .then(res=>{
           this.$emit('updateData')
           })
    },
    async editDescr() {
      this.editMode=!this.editMode;
    },
    async editImage(text) {
      this.editDescr();
      axios.put(`/api/images/`,{_id:this.id, text})
         .then(res=>{
           this.$emit('updateData')
           })
    }
  },
  mounted() {},
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
