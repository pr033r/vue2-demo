<template>
  <div>
    <h3>Props</h3>
    <p>
      <b>Default prop value: {{ heroName }}</b><br>
      Skills: {{ skills }}<br>
      Refers to: {{ refersToMembers.primary + ', ' + refersToMembers.secondary }}<br>
      Father: {{ father }}, Legacy: {{ legacy ? 'yes' : 'no' }}<br>
    </p>
  </div>
</template>

<script>
  import Vue from 'vue';

  // constructor function and the assertion will be made with an instanceof check
  function customType(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  export default {
    // camelCase 'heroName' should be in HTML presented as hero-name, uppercase is 
    // converted to lowercase
    // this limitation is not in string templates
    // props: ['heroName'],

    // typed props can warn user in browser if he typed a wrong type
    // useful when developing a component that’s intended to be used by others

    // props are validated before a component instance is created, so instance properties 
    // (e.g. data, computed, etc) will not be available inside default or validator functions.

    // TYPES:
    // String, Number, Boolean, Array, Object, Date, Function, Symbol
    props: {
      heroName: {
        type: String,
        default: 'Aragorn' // DEFAULT value
      },
      aragornMessages: {
        type: Object,
        default: function() { // RETURN DEFAULT OBJECT
          return {
            heroMessage: 'I am the hero',
            defaultMessage: '-',
          };
        }
      },
      isHero: {
        type: Boolean,
        required: true, // REQUIRED
      },
      age: {
        type: Number,
        validator: function(value) {
          return value > 50 ? true : false;
        },
      },
      skills: [Array, Object], // MULTIPLE types
      refersToMembers: null, // ANY type
      father: String,
      legacy: Boolean,
      fullName: {
        type: customType,
      },
    },

    data() {
      return {
        // we should not attempt to mutate a prop inside a child component.
        // mutating the object or array itself inside the child component will affect parent state!
        localSkills: this.skills, // it's not local, we're copying a reference!
      }
    },

    methods: {
      clearSkills() {
        Vue.set(this.skills, []); // it will also delete data in parent! - reference 
      }
    },
  }
</script>

<style scoped>

</style>