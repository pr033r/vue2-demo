<template>
  <div id="testing-vue-features">
    <h3>Testing Vue Features</h3><br>
    <BasicFeatures></BasicFeatures>
  </div>
</template>

<script>
import BasicFeatures from "./BasicFeatures.vue";

export default {
  name: "TestingVueFeatures",
  components: {
    BasicFeatures
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#testing-vue-features {
  text-align: left;
}
h3 {
  margin: 40px 0 0;
}
</style>
