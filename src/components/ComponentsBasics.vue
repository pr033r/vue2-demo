<template>
  <div>
    <BlogPost 
      v-for="post of posts"
      v-bind:key="post.title"
      v-bind:post="post"
      v-bind:style="{ color: redPost ? 'red' : '#2c3e50' }"
      v-on:changeTextColor="changeTextColor($event)"
    ></BlogPost>
  </div>
</template>

<script>
  import BlogPost from './BlogPost.vue';

  export default {
    data() {
      return {
        posts: [
          { author: 'Adam Lasak', title: 'Paragraph 1', content: 'Lorem ipsum dolor sit amet.' },
          { author: 'Adam Lasak', title: 'Paragraph 2', content: 'Sed placerat, arcu ac scelerisque.' },
          { author: 'Adam Lasak', title: 'Paragraph 3', content: 'Sed vitae arcu sagittis, luctus.' },
        ],
        redPost: false,
      }
    },

    methods: {
      changeTextColor(e) {
        // event is defined in BlogPost component, we defined only boolean value
        this.redPost = e;
      }
    },

    components: {
      BlogPost,
    },
  }
</script>

<style scoped>

</style>