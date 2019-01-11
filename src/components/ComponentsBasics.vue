<template>
  <div id="components-basics">
    <BlogPost 
      v-for="post of posts"
      v-bind:key="post.title"
      v-bind:post="post"
      v-bind:style="{ color: redPost ? 'red' : '#2c3e50' }"
      v-on:changeTextColor="changeTextColor($event)"
    ></BlogPost><br>

    <div id="dynamic-component-demo" class="demo">
      <button
        v-for="tab of tabs"
        :key="tab"
        :class="['tab-button', { active: currentTab === tab }]"
        :click="currentTab = tab"
      >{{ tab }}</button>

      <component 
        :is="currentTabComponent"
        class="tab"
      ></component>
    </div>
  </div>
</template>

<script>
import BlogPost from './BlogPost.vue';
import Vue from 'vue';

// GIVES ERROR:
// You are using the runtime-only build of Vue where the template compiler is not available. 
// Either pre-compile the templates into render functions, or use the compiler-included build.
// ------------
// Vue.component('tabHome', { 
//   template: '<div>Home component</div>' 
// })
// Vue.component('tabPosts', { 
//   template: '<div>Posts component</div>' 
// })
// Vue.component('tabArchive', { 
//   template: '<div>Archive component</div>' 
// })

// RATHER USE:

export default {
  data() {
    return {
      posts: [
        { author: 'Adam Lasak', title: 'Paragraph 1', content: 'Lorem ipsum dolor sit amet.' },
        { author: 'Adam Lasak', title: 'Paragraph 2', content: 'Sed placerat, arcu ac scelerisque.' },
        { author: 'Adam Lasak', title: 'Paragraph 3', content: 'Sed vitae arcu sagittis, luctus.' },
      ],
      redPost: false,
      tabs: [
        {
          name: 'Home', 
          component: { 
            template: '<div>Home component</div>' 
          }
        },
        {
          name: 'Posts',
          component: {
            template: '<div>Posts component</div>'
          }
        },
        {
          name: 'Archive',
          component: {
            template: '<div>Archive component</div>',
          }
        }
      ],
      currentTab: 'Home',
    }
  },

  methods: {
    changeTextColor(e) {
      // event is defined in BlogPost component, we defined only boolean value
      this.redPost = e;
    }
  },

  computed: {
    currentTabComponent: function() {
      return `tab${this.currentTab}`;
    },
  },

  components: {
    BlogPost,
  },

  filters: {}
}
</script>

<style scoped>
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>