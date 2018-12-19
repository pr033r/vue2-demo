<template>
  <div id="testing-vue-features">
    <h2>Testing Vue Features</h2><br>
    <BasicFeatures></BasicFeatures><hr>
    <PropertiesAndWatchers></PropertiesAndWatchers><hr>
    <ClassAndStyleBingings></ClassAndStyleBingings><hr>
    <ConditionalRendering></ConditionalRendering><hr>
    <ListRendering></ListRendering><hr>
  </div>
</template>

<script>
import BasicFeatures from "./BasicFeatures.vue";
import PropertiesAndWatchers from './PropertiesAndWatchers.vue';
import ClassAndStyleBingings from './ClassAndStyleBindings.vue';
import ConditionalRendering from './ConditionalRendering.vue';
import ListRendering from './ListRendering.vue';

export default {
  name: "TestingVueFeatures",
  components: {
    BasicFeatures,
    PropertiesAndWatchers,
    ClassAndStyleBingings,
    ConditionalRendering,
    ListRendering,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#testing-vue-features {
  text-align: left;
}
</style>
