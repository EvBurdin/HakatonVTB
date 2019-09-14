
<template>
  <div class="d-flex flex-column align-items-center w-75">
    <h1>{{isLogin}}</h1>
    <p>{{msg}}</p>
    <div class="d-flex flex-wrap justify-content-between w-75">
      <imageCard  @updateData="getData" v-if="$store.state.curentUser":key =image._id v-for="image in images" :src="image.tmb_src" :description="image.description" :id="image._id"></imageCard>
    </div>
    
  </div>
</template>
<script>
import axios from 'axios';

import imageCard from '@/components/imageCard.vue';
export default {
  name: 'secret',
  components: { imageCard},
  data() {
    return {
      msg: 'Совсем ничего',
      images: [],
    };
  },
  computed: {
    isLogin: function() {
      if (!this.$store.state.curentUser) {
        this.msg = 'либо вы не авторизованы';
        return 'Здесь ничего нет!';
      } else {
        return 'Вы можете увидеть секретную информацию!';
      }
    },
  },
  methods: {
    async getData() {
      try {
        let result = await axios.post('/api/secret/', {}, { withCredentials: true });
        console.log(result.data);

        this.images = result.data;
        this.msg = '';
      } catch (e) {
        this.msg = 'Либо вы не авторизованы';
      }
    },
    /* deleteImage(id) {
      for (let i = 0; i < this.images.length; i++) {
        if (this.images[i]._id=id) {
          this.images.splice(this.images.indexOf)
        }
        
      }
    } */
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
</style>