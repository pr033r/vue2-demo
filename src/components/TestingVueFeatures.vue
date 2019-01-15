<template>
  <div id="testing-vue-features">
    <h2>Testing Vue Features</h2><br>
    <BasicFeatures></BasicFeatures><hr>
    <PropertiesAndWatchers></PropertiesAndWatchers><hr>
    <ClassAndStyleBingings></ClassAndStyleBingings><hr>
    <ConditionalRendering></ConditionalRendering><hr>

    <!-- Item in for won’t automatically pass any data to the component, because 
    components have isolated scopes of their own. In order to pass the iterated 
    data into the component, we should also use props -->
    <ListRendering v-for="item in 2" v-bind:key="item"></ListRendering><hr>

    <EventHandling></EventHandling><hr>
    <FormInputBindings></FormInputBindings><hr>

    <h2>Components basic</h2>
    <ComponentsBasics></ComponentsBasics><hr>

    <ComponentRegistration></ComponentRegistration>

  </div>
</template>

<script>
import BasicFeatures from "./BasicFeatures.vue";
import PropertiesAndWatchers from './PropertiesAndWatchers.vue';
import ClassAndStyleBingings from './ClassAndStyleBindings.vue';
import ConditionalRendering from './ConditionalRendering.vue';
import ListRendering from './ListRendering.vue';
import EventHandling from './EventHandling.vue';
import FormInputBindings from './FormInputBindings.vue';
import ComponentsBasics from './ComponentsBasics.vue';
import ComponentRegistration from './componentsInDepth/ComponentRegistration.vue';

export default {
  name: "TestingVueFeatures",
  components: {
    BasicFeatures,
    PropertiesAndWatchers,
    ClassAndStyleBingings,
    ConditionalRendering,
    ListRendering,
    EventHandling,
    FormInputBindings,
    ComponentsBasics,
    ComponentRegistration,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#testing-vue-features {
  text-align: left;
}
</style>
