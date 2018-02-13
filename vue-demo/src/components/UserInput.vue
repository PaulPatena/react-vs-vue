<template>
  <!-- As you can see here, we use normal html attribute "class",
       no need to use special JSX attribute "className" -->
  <div class="Card">
    <h3>What's your name</h3>

    <p>
      <input type="text"
             v-on:keyup="inputChanged"
             v-bind:value="name"/>
    </p>
  </div>
</template>

<script>
    export default {
        name: "user-input",
        props: ['inputChanged', 'name']
    }
</script>

<style scoped>

</style>
