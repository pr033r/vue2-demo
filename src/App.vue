<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <br>
    <ul id="navigation-bar">
      <li>
        <router-link to="/hello-world">Home</router-link>
      </li>
      <li>
        <router-link to="/testing-vue-features">Testing Vue Features</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 50%;
  padding-top: 50px;
  margin: 0 auto;
}

a {
  color: #42b983;
}

#navigation-bar {
  list-style-type: none;
  margin: 0px;
  padding: 0px;
}
</style>
