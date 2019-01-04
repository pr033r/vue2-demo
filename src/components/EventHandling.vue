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
        <td>
          <!-- 
          When a click event occurs, there are two phases: the first is called capturing, 
          the second is called bubbling. When you click on the .inner, the event traverses 
          down from the outermost container element .outer, to .inner in the capturing phase, 
          then from .inner to .outer in the bubbling phase. 
          -->
          <div class="outer divForClick" v-on:click.capture="buttonClicked">
            <div class="inner divForClick" v-on:click="buttonClicked">Capture</div>
          </div>
        </td>
        <td>
          <!-- 
          without self modifier, when we click on the child, parent will be called too 
          (must be same type of event) - so put .self to parent (only when we click on the 
          parent will be fired parent's event)

          v-on:click.prevent.self will be prevent all clicks, self.prevent only clicks 
          from that particular element
          -->
          <div class="parent divForClick" v-on:click.self.prevent="divClicked">
            <div class="child divForClick" v-on:click="divClicked">Self</div>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <button v-on:click.once="buttonClicked">Once</button>
        </td>
        <td>
          <!-- 
          .passive modifier, corresponding to addEventListener‘s passive option
          * options = listener will never call preventDefault(). If a passive listener 
            call preventDefault, the user agent will do nothing than generate a console warning.

          Don’t use .passive and .prevent together!
          -->
          <div class="divForClick" v-on:scroll.passive="onScroll ">Passive</div>
        </td>
      </tr>
    </table>
    <br>
    <!-- 
    Vue provides aliases for:
    .enter .tab .delete (captures both “Delete” and “Backspace” keys) .esc .space .up .down .left 
    .right .page-down
    
    // create own alias
    Vue.config.keyCodes.f1 = 112

    System modifier keys:
    .ctrl .alt .shift .meta (win logo)
    -->
    <input placeholder="enter" @keyup.enter="defaultAlert">
    <input placeholder="space" @keyup.32="defaultAlert">
    <input placeholder="escape" @keyup.escape="defaultAlert"><br><br>

    <input placeholder="ctrl+x" @keyup.ctrl.88="defaultAlert">
    <input placeholder="click+ctrl" @click.ctrl="defaultAlert"><br><br>

    <!-- this will fire even if Alt or Shift is also pressed -->
    <button @click.ctrl="defaultAlert">click.ctrl</button>

    <!-- this will only fire when Ctrl and no other keys are pressed -->
    <button @click.ctrl.exact="defaultAlert">click.ctrl.exact</button>

    <!-- this will only fire when no system modifiers are pressed -->
    <button @click.exact="defaultAlert">click.exact</button>
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
    created() {
      this.config.keyCodes.escape = 27; // Vue has pre-defined .esc
    },

    incrementcCounter() {
      this.counter++;
    },
    defaultAction() {
      alert(
        'The submit was canceled and event returned to previous state via preventDefault()'
      );
    },
    divClicked() {
      alert('clicked on div');
    },
    buttonClicked() {
      alert('buttton');
    },
    defaultAlert() {
      alert('some alert');
    }
  }
};
</script>

<style scoped>
.divForClick {
  padding: 10px;
  border: 1px solid gray;
  margin: 5opx;
}
</style>