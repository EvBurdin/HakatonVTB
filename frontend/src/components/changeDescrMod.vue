<template>
  <div v-if="visible" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Изменить описание</h5>
          <button @click="$emit('closeModal')" type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <textarea
            ref="desc"
            class="form-control"
            id="exampleTextarea"
            rows="3"
            :value="description"
          ></textarea>
        </div>
        <div class="modal-footer">
          <button @click ="$emit('editDone',$refs.desc.value) "type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'changeDescrMod',
  props: ['description','visible'],
  components: {},
  methods: {},
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
