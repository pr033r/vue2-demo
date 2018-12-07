<template>
  <div id="testing-vue-features">
    <h3>Testing Vue Features</h3>
    <strong v-bind:title="currentTime">{{ fullName }}</strong>,
    <br>
    {{ position }}
    <br>Skills:
    <ul>
      <li v-for="skill in skills" :key="skill">{{ skill }}</li>
    </ul>
    <input placeholder="PL-SQL" v-model="skillToBeAdded">
    <button v-on:click="addSkill">Add skill</button>
    <p id="error-box" v-if="showErrorMessage">You have to specify the skill.</p>
  </div>
</template>

<script>
export default {
  name: "TestingVueFeatures",
  data: function() {
    return {
      currentTime: new Date().toLocaleString(),
      fullName: "Adam Lasak",
      position: "full stack developer",
      skills: ["JS", "Angular", "Vue (new)", "Oracle", "ASP.NET"],
      skillToBeAdded: "",
      showErrorMessage: false,
    };
  },
  methods: {
    addSkill: function() {
      if (this.skillToBeAdded) {
        this.skills.push(this.skillToBeAdded);
        this.skillToBeAdded = "";
        this.showErrorMessage = false;
      } else {
        this.showErrorMessage = true;
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
