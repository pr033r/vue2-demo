<template>
  <!-- id for el (element) property -->
  <div id="basic-features"> 
    <h2>Basic features</h2>
    <strong 
      v-bind:title="currentTime" 
      v-once
    >
      {{ fullName }}
    </strong>

    <i>&nbsp;(you cannot re-render my name by changing value - because v-once)</i><br>
    <b 
      v-if="position"
    >
      {{ position }}
    </b>
    <br>Skills:
    <ul>
      <li 
        v-for="skill in skills" 
        v-bind:key="skill"
      >
        {{ skill }}
      </li>
    </ul>

    <input 
      placeholder="PL-SQL" 
      v-model="skillToBeAdded"
    >

    <button 
      v-on:click="addSkill"
    >
      Add skill
    </button>
    <p 
      id="error-box" 
      v-if="showErrorMessage"
    >
      You have to specify the skill.
    </p>
  </div>
</template>

<script>
export default {
  name: 'BasicFeatures',

  data: function() {
    return {
      currentTime: new Date().toLocaleString(),
      fullName: 'Adam Lasak',
      position: 'full stack developer',
      skills: ['JS', 'Angular', 'Vue (new)', 'Oracle', 'ASP.NET'],
      skillToBeAdded: '',
      showErrorMessage: false
    };
  },
  
  methods: {
    addSkill: function() {
      const me = this; // 'this' refers to Vue instance
      const typedSkill = me.skillToBeAdded.trim();

      if (typedSkill) {
        me.skills.push(typedSkill);
        me.skillToBeAdded = '';
        me.showErrorMessage = false;
      } else {
        me.showErrorMessage = true;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#testing-vue-features {
  text-align: left;
}
#error-box {
  color: red;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
