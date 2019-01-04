<template>
  <div>
    <h2>Event handling</h2>
    <button v-on:click="incrementcCounter">Increment</button>
    <!-- OR <button v-on:click="incrementcCounter($event)">Increment</button> -->
    {{ counter }}
    <br>

    <!-- 
    stopPropagation stops the event from bubbling up the event chain.
    preventDefault prevents the default action the browser makes on that event. 
    -->
    <table>
      <tr>
        <td>
          <div class="divForClick" v-on:click="divClicked">
            <!-- we can also make chain: v-on:click.stop.prevent -->
            <button v-on:click.prevent="buttonClicked">preventDefault</button>
          </div>
          <br>
        </td>
        <td>
          <div class="divForClick" v-on:click="divClicked">
            <button v-on:click.stop="buttonClicked">stopPropagation</button>
          </div>
          <br>
        </td>
      </tr>
      <tr>
        <td class="outer">
          <div class="middle">
            <div class="inner" v-on:click.capture="buttonClicked">
            </div>
          </div>
        </td>
        <td>
          <button v-on:click.self="buttonClicked">self</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    };
  },

  methods: {
    incrementcCounter() {
      this.counter++;
    },
    defaultAction() {
      alert(
        "The submit was canceled and event returned to previous state via preventDefault()"
      );
    },
    divClicked() {
      alert("clicked on div");
    },
    buttonClicked() {
      alert("buttton");
    },
    
  }
};
</script>

<style scoped>
.divForClick {
  padding: 10px;
  border: 1px solid gray;
  margin: 5opx;
}
.outer .middle .inner {
  padding: 5px;
  border: 1px solid gray;
}
</style>