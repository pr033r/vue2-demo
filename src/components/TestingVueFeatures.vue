<template>
  <div id="testing-vue-features">
    <h2>Testing Vue Features</h2><br>
    <basic-features /><hr>
    <properties-and-watchers /><hr>
    <class-and-style-bingings /><hr>
    <conditional-rendering /><hr>

    <!-- Item in for won’t automatically pass any data to the component, because 
    components have isolated scopes of their own. In order to pass the iterated 
    data into the component, we should also use props -->
    <list-rendering v-for="item in 2" v-bind:key="item" /><hr>

    <event-handling /><hr>
    <form-input-bindings /><hr>

    <h2>Components basic</h2>
    <components-basics /><hr>

    <component-registration /><hr>

    <!-- 
    We have to bind numbers, booleans, arrays and objects!
    Err when we get to boolean a number: Expected Boolean, got Number with value 3. 

    v-bind="bindObjectToProps" is equivalent for:
    v-bind:father="bindObjectToProps.father"
    v-bind:legacy="bindObjectToProps.legacy"
    -->
    <Props 
      :age="54" 
      :is-hero="isAragornHero" 
      :skills="['sword', 'bow']"
      :refers-to-members="{
        primary: 'Gandalf',
        secondary: 'Legolas',
      }"
      v-bind="bindObjectToProps"
    ></Props>

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
import Props from './componentsInDepth/Props.vue';

export default {
  name: "TestingVueFeatures",
  data() {
    return {
      isAragornHero: true,
      bindObjectToProps: {
        father: 'Arathorn',
        legacy: true,
      }
    }
  },
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
    Props,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#testing-vue-features {
  text-align: left;
}
</style>
