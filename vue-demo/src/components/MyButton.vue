<template>
    <div>
        <!-- v-on is listening for "click" event, it is
             the default JS event emitted by the browser -->
        <button class="local_style" v-on:click="click">{{label}}</button>
    </div>
</template>

<script>
    export default {
        name: "my-button",
        props: ['click', 'label'],
    }
</script>

<style scoped>
  /* This is normal css, can be re-used anywhere css is accepted */
  .local_style {
    background-color: White;
    border: 2px solid blue;
    margin-top: 15px;
    cursor: pointer;
    box-shadow: 2px 2px 2px;
  }
</style>
