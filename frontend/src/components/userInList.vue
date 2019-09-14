<template>

  <li @click="$emit('userSelected',user)">
      {{user.firstName}} {{user.lastName}}
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