<template>
  <div>

    <ul>
      <!-- for reuse and reorder existing elements, you need to provide a unique 
      key attribute for each item. -->
      <li 
      v-for="(value, key, index) in maintainer" 
      :key="key" 
      >
        {{ index }}. {{ key }} : {{ value }}
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        maintainer: {
          fullName: 'Adam Lasak',
          email: 'lasak.ad@gmail.com',          
        },
        packages: ['AngularJS', 'Angular']
      }
    }
  }
</script>

<style scoped>

</style>