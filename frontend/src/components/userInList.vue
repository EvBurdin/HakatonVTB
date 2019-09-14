<template>

  <li @click="$emit('userSelected',user)">
      {{user.name}}
    </li>  
</template>
<script>
export default {
  name: 'userInList',
  props: ['user'],
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>
<style scoped>
</style>