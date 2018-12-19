<template>
  <div>

    <ul>
      <!-- 
      'for' reuse and reorder existing elements, you need to provide a unique 
      key attribute for each item. It is recommended to provide a key.
      'in' in for like loop through object in JS
      -->
      <li 
      v-for="(value, key, index) in maintainer"
      :key="key" 
      >
        {{ index }}. {{ key }} : {{ value }}
      </li>
    </ul>

    <u>Maintaining packages in Docker:</u>
    <ul>
      <li 
      v-for="(item, index) of packages" 
      :key="index"
      >
        {{ item }}
      </li>
    </ul>

    <!-- This is how filter is applied in Vue, just write own computed property -->
    <u>Using filter:</u>
    <ul>
      <li
      v-for="(item, index) in rangeForFilterUsage" 
      :key="index"
      >
        {{ item }}
      </li>
    </ul>

    <button v-on:click="reverseListOfPackages">Reverse List</button>
    <button v-on:click="filterOnlyBackEndPackages">Filter backend packages</button>
    <button v-on:click="highlightPackage(0)">Highlight package</button>

  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    data: function() {
      return {
        owner: {
          admin: true,
        },
        maintainer: {
          fullName: 'Adam Lasak',
          email: 'lasak.ad@gmail.com',          
        },
        packages: ['AngularJS', 'Angular', 'NodeJS'],
        rangeForFilterUsage: [1, 3, 5, 7],
      }
    },

    created: function () {
      Object.assign(this.owner, { // one way to add multiple properties
        fullName: 'Adam Lasak',
      });

      this.owner = Object.assign({}, { // ...but we should use it like this
        fullName: 'Adam Lasak',
        admin: true,
      });
    },

    computed: {
      rangeForFilterUsage: {
        get: function() {
          return this.rangeForFilterUsage;//.filter(x => x > 3);
        }, // set(newValue) {...}
      }
    },

    methods: {
      reverseListOfPackages: function () {
        // Mutation methods: push(), pop(), shift(), unshift(), splice(), sort(), reverse()
        // they DON'T return a new array
        this.packages.reverse();
      },

      filterOnlyBackEndPackages: function () {
        // Non-mutation methods: filter(), slice(), concat(), ... - they return a new array
        // Vue implements some smart heuristics to maximize DOM element reuse, so replacing an 
        // array with another array containing overlapping objects is a very efficient operation
        this.packages = this.packages.filter(item => item == 'NodeJS');
      },

      highlightPackage: function (index) {
        this.packages = this.packages.map(item => item.replace('>', ''));
        if (this.packages[index]) {
          // packages.lenght = 0 are NOT reactive too
          // this.packages[index] = `> ${this.packages[index]}`; // is NOT reactive

          // we have to use Vue.set(...) or vm.$set(...) where vm is instance of Vue
          // or vm.items.splice(indexOfItem, 1, newValue), but Vue instance needed
          Vue.set(this.packages, index, `> ${this.packages[index]}`);
          this.addAgePropertyToMaintainer(22);
        }
      },

      addAgePropertyToMaintainer: function (age) {
        // Vue does not allow dynamically adding new root-level 
        // due to limitations of modern JavaScript, Vue cannot detect property addition or deletion.
        // vm.newProperty = 1; // NOT reactive - when we want add new ROOT property into Data
        this.maintainer.age = age // into nested object it is reactive
        Vue.set(this.maintainer, 'alias', 'pr033r'); // or we can use Vue.use or vm.$use
      }
    },
  }
</script>

<style scoped>

</style>