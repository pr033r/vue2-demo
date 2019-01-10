<template>
  <div>
    <div id="blog-post">
      <h3>{{ post.title }}</h3>
      <p>
        <b>{{ post.author }}</b><br>
        {{ post.content }}
      </p>
      <button v-on:click="emitEventToChangeTextColor">Emit custom Event</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['post'],
    data() {
      return {
        redPost: false,
      }
    },

    methods: {
      emitEventToChangeTextColor() {
        const vm = this;
        vm.redPost = !vm.redPost;
        vm.$emit('changeTextColor', vm.redPost);
      }
    },
  }
</script>

<style scoped>

</style>