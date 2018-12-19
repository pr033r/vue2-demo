<template>
  <div id="class-and-style-bindings">
    <span 
      class="output-box"
      v-bind:class="{ active: isActive, 'text-danger': hasError }"
    >
      Today is: {{ new Date().toLocaleString() }}
    </span>

    <button 
      v-on:click="hasError = !hasError" 
    >
      change danger
    </button><br>

    <span 
      :class="outputBoxChangeStatus"
    >
      Another text...
    </span><br>
    <div v-bind:style="grayCube"></div>
    <div v-bind:style="[grayCube, {backgroundColor: '#ccc'}]"></div>
    <div v-bind:style="[grayCube, {backgroundColor: '#eee'}]"></div>
    <br><br>
  </div>
</template>

<script>
  export default {
    name: 'ClassAndStyleBindings',
    data: function() {
      return {
        hasError: null,
        isActive: true,
        grayCube: {
          width: '30px',
          height: '30px',
          float: 'left',
          'background-color': 'gray', // either kebab-case
          backgroundColor: '#aaa', // or camelCase
        },
      };
    },
    
    computed: {
      // assigning particular class to element is mostly done via computed
      outputBoxChangeStatus: function() {
        // we can also return an array of classes
        return {
          active: this.isActive && this.hasError,
          'text-danger': this.hasError,
        }
      }
    },

  }
</script>

<style scoped>
.output-box {
  padding: 5px;
  color: black;
}

.active {
  border: 2px solid gainsboro;
}

.text-danger {
  color: red;
}
</style>