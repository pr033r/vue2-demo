<template>
  <div>
    <h2>Form Input Bindings</h2>

    <!-- 
    Interpolation on textareas (<textarea>{{text}}</textarea>) won't work. 
    Use v-model instead. 
    -->
    <textarea v-model="multilineText" placeholder="enter multiline text"></textarea>
    <p style="white-space: pre-line;">{{ multilineText }}</p>

    <input type="checkbox" id="trueFalseCheckbox" v-model="trueFalseCheckbox">
    <label for="trueFalseCheckbox">{{ trueFalseCheckbox }}</label>

    <div>
      <input type="checkbox" id="frodo" value="Frodo" v-model="fellowshipMembers">
      <label for="frodo">Frodo</label>

      <input type="checkbox" id="aragorn" value="Aragorn" v-model="fellowshipMembers">
      <label for="aragorn">Aragorn</label>

      <input type="checkbox" id="gandalf" value="Gandalf" v-model="fellowshipMembers">
      <label for="gandalf">Gandalf</label>

      <p>Fellowship members: {{ fellowshipMembers }}</p>
    </div>

    <input type="radio" name="firstChoose" id="firstChoosenRadio" value="Yes" v-model="choosen">
    <label for="firstChoosenRadio">First method</label>

    <input type="radio" name="secondChoose" id="secondChoosenRadio" value="No" v-model="choosen">
    <label for="secondChoosenRadio">Second method</label>

    <p>You choose: {{ choosen }}</p>

    <select v-model="selected">
      <option disabled value="">Choose member</option>
      <option>Frodo</option>
      <option>Aragorn</option>
      <option>Gandalf</option>
    </select>

    Selected: {{ selected }}<br><br>

    <select v-model="selectedMultiple" multiple>
      <option>Frodo</option>
      <option>Aragorn</option>
      <option>Gandalf</option>
    </select><br>

    Selected multiple: {{ selectedMultiple }}<br><br>

    <input 
      type="checkbox" 
      v-model="toggle" 
      true-value="yeah"
      false-value="nope"
    > Custom boolean value: 
    {{ toggle }}

    <!-- lazy modifier sync after change events instead input events -->
    <!-- If you want whitespace from user input to be trimmed automatically -->
    <input 
      v-model.lazy.trim="toggle"
      v-bind:placeholder="bindedPlaceholder"
    ><br>

    <input 
      v-model.number="defaultConvertedNumber"
    >&nbsp;Converted number:{{ defaultConvertedNumber }}<br>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        multilineText: '',
        trueFalseCheckbox: false,
        fellowshipMembers: [],
        choosen: '',
        selected: '',
        selectedMultiple: [],
        toggle: '',
        bindedPlaceholder: 'LAZY binded placeholder',
        defaultConvertedNumber: 5,
      }
    },
  }
</script>

<style scoped>

</style>