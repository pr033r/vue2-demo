<template>
  <div id="properties-and-watchers">
    Current cached date: {{ cachedCurrentDate }}<br>
    Current date: {{ currentDate() }}<br>
    First name: <input v-model="firstName"><br>
    Last name: <input v-model="lastName"><br>
    Full name by watchers: {{ watchedFullName }}<br>
    Full name by computed: {{ cachedFullName }}<br>
    Question: 
    <input 
      v-model="question"
    >
    <p
      v-if="fetchedError"
      key="search-status"
    >
      {{ fetchedError }}
    </p>
    <p
      v-else
      key="search-result"
    >
      <img
        v-bind:alt="answer"
        v-bind:src="imageSource"
      >
    </p>
  </div>
</template>

<script>
export default {
  name: 'PropertiesAndWatchers',

  data: function() {
    return {
      firstName: 'Adam',
      lastName: 'Lasak',
      watchedFullName: 'Adam Lasak',
      question: '',
      fetchedError: '',
      answer: '',
      imageSource: '',
    };
  },

  created: function() {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000);
  },

  // returned values of computed method are cached -> for expence computing
  // it depends on current property, if the property has not been changed
  // then computed method returns previous state, we call it as property
  computed: { 
    cachedCurrentDate() {
      return new Date().toLocaleString();
    },
    // Computed properties are by default getter-only, but you can also 
    // provide a setter when you need it:
    cachedFullName: {
      get: function() {
        return `${this.firstName} ${this.lastName}`;
      },
      set: function(newValue) {
        const names = newValue.split(' ');
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      }
    },

  },

  // alternative to computed property, but for basics operations much worse
  // it is used for asynchronous operations which are not allowed in computed
  watch: {
    // whenever property firstName is changed
    firstName: function(newValue) {
      this.watchedFullName = `${newValue} ${this.lastName}`;
    },
    lastName: function(newValue) {
      this.watchedFullName = `${this.firstName} ${newValue}`;
    },
    // asynchronous operations are allowed in watchers
    question: function() { 
      this.answer = 'Thinking...';
      this.debouncedGetAnswer();
    },
  },

  // basic methods are always called, it doesn't depend on some property
  methods: {
    currentDate() {
      return new Date().toLocaleString();
    },

    getAnswer() {
      const me = this;
      fetch('https://yesno.wtf/api')
        .then(response => response.json())
        .then(function(response) {
          me.answer = response.answer;
          me.imageSource = response.image;
        })
        .catch(function(error) {
          me.fetchedError = error;
        });
    }
  },
};
</script>

<style scoped>
</style>