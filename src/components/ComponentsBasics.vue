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
        v-for="tab in tabs"
        :key="tab.name"
        :class="['tab-button', { active: currentTab.name === tab.name }]"
        @click="currentTab = tab"
      >{{ tab.name }}</button>

      <component 
        v-bind:is="currentTab.component"
        class="tab"
      ></component><br>

      <!-- Custom directive to focus element. -->
      <input placeholder="Custom directive with focus" type="text" v-focus>

      <!-- 
      This will lead to issues when using components with elements that have such restrictions.
      <table>
        <blog-post-row></blog-post-row>
      </table>

      'is' operator is designed for that
      <table>
        <tr is="blog-post-row"></tr>
      </table> -->

    </div>
  </div>
</template>

<script>
import BlogPost from './BlogPost.vue';

// ALTERNATIVE OPTION (RUN-TIME COMPILER MUST BE ENABLED)
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
      currentTab: {},
    }
  },

  created() {
    this.currentTab = this.tabs[0];
  },

  methods: {
    changeTextColor(e) {
      // event is defined in BlogPost component, we defined only boolean value
      this.redPost = e;
    }
  },

  computed: {
    // used for Vue.component(..., {}) example
    currentTabComponent: function() {
      return `tab${this.currentTab}`;
    },
  },

  components: {
    BlogPost,
  },

  filters: {},

  directives: {
    focus: {
      inserted: function(el, /* binding, vnode, oldVnode */) {
        el.focus();
      }
    }
  },
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