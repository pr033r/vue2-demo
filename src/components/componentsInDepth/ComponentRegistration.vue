<template>
  <div>
    <h3>Component Registration</h3>

    <component :is="fellowshipComponents[0]"></component>
    <component :is="fellowshipComponents[1]"></component>
  </div>
</template>

<script>
  // import/require and export is Moduling system (Babel, Webpack) 
  // available in ES2015+
  import Vue from 'vue';
  import ComponentsBasics from '../ComponentsBasics.vue';

  // Globaly registered component - can be used in the template of any 
  // root Vue instance (new Vue) created after registration,

  // See documentation for mostly used components (custom inputs, buttons, ...)
  // with Base... prefix

  // !! global registration must take place before the root Vue instance is created !!

  // Locally created component - first way
  Vue.component('ComponentRegisteredGlobaly', {
    template: `<div><h3>Globaly registered component</h3></div>`,
  });

  // Locally created components - second way, otherwise if we want to share them
  // to the particular copmonent, we're using Module (import/require)
  const fellowshipComponents = [
    {
      name: 'FrodoComponent',
      template: `<div><b>Frodo Local Component</b></div>`,
      data() {
        return {
          skills: []
        }
      },
    },
    {
      name: 'GandalfComponent',
      template: `<div><b>Gandalf Local Component</b></div>`,
      data() {
        return {
          skills: []
        }
      },
    },
  ];

  export default {
    data() {
      return {
        fellowshipComponents
      }
    },

    components: {
      // Local registration in a Module System
      ComponentsBasics,
    }
  }
</script>

<style scoped>

</style>