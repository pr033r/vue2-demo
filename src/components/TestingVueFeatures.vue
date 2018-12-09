<template>
  <div id="testing-vue-features">
    <h2>Testing Vue Features</h2><br>
    <BasicFeatures></BasicFeatures><hr>
    <PropertiesAndWatchers></PropertiesAndWatchers><hr>
    <ClassAndStyleBingings></ClassAndStyleBingings><hr>
  </div>
</template>

<script>
import BasicFeatures from "./BasicFeatures.vue";
import PropertiesAndWatchers from './PropertiesAndWatchers.vue';
import ClassAndStyleBingings from './ClassAndStyleBindings.vue';

export default {
  name: "TestingVueFeatures",
  components: {
    BasicFeatures,
    PropertiesAndWatchers,
    ClassAndStyleBingings,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#testing-vue-features {
  text-align: left;
}
</style>
