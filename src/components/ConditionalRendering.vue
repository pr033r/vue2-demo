<template>
  <div id="conditional-rendering">

    <!-- v-if is also lazy: if the condition is false on initial render, it will not do anything 
    - the conditional block won’t be rendered until the condition becomes true for the first time.

    So prefer v-show if you need to toggle something very often, and prefer v-if if the condition 
    is unlikely to change at runtime. -->

    <div v-if="stateOfLoginInput">
      <!-- Label is re-used - it's not using key property -->
      <label>Email:</label>
      <!-- Input is re-rendered because we defined key property -->
      <!-- Key is unique identifier -->
      <input placeholder="Enter your email" key="input-email">
    </div>

    <div v-else>
      <label>Phone:</label>
      <input placeholder="Enter your phone" key="input-phone">
    </div>
    
    <button @click="switchLoginInputs">Change input</button>

    <!-- v-show is much simpler - the element is always rendered regardless 
    of initial condition, with CSS-based toggling. -->
    <p v-show="sayHello">{{ sayHello }}</p>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        stateOfLoginInput: false,
        sayHello: 'Hell.o',
      }
    },

    methods: {
      switchLoginInputs() {
        this.stateOfLoginInput = !this.stateOfLoginInput;
      }
    },
  }
</script>

<style scoped>
</style>