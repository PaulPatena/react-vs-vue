<template>
  <!--As you can see, this section is pure html compatible-->
  <div id="app" class="App">

    <img src="./assets/paul_logo_1440.png" width="400px" alt=""/>

    <!-- v-bind means bind the html attribute to a data/method/property from the Vue object-->
    <!--as shorthand for writing v-bind:attribute, you can simply type :attribute-->
    <UserInput v-bind:inputChanged="inputChangedHandler" :name="name"></UserInput>

    <!--HTML specifications doesn't use camelCase/PascalCase for tags, VueJS automatically creates html compliant tags for you-->
    <my-button :click="resetNameHandler" label="Reset Name"></my-button>

    <!--As you can see, you can still use PascalCase if you insist-->
    <MyButton :click="toggleHandler" label="Toggle OutputDiv"></MyButton>
    <template v-if="showOutput">
      <user-output :name="name" ></user-output>
    </template>
  </div>
</template>

<script>
  // Paul: I like VUE because there is clear separation between view(html),
  // model(js) and styling(css). Everything within <template> tag is html
  // and format, you can easily copy-paste your existing html code.

  // Everything within the script tag is plain Javascript, no special stuff
  import UserInput from './components/UserInput';
  import MyButton from './components/MyButton.vue';
  import UserOutput from './components/UserOutput.vue';

  export default {
    name: 'app',
    data: () => ({
      name: 'Paul Michael',
      showOutput: true
    }),
    methods: {
      resetNameHandler() {
        this.name = 'Paul Michael';
      },
      toggleHandler() {
        this.showOutput = !this.showOutput;
      },
      inputChangedHandler(event) {
        this.name = event.target.value;
      }
    },
    components: {
      UserInput,
      UserOutput,
      MyButton,
    },
  }
</script>

<style lang="scss">
/* Styling is also pure css compatible and you can reuse existing css code (eg. style guide)
   Have a look at ./components/MyButton.vue for an example. */
</style>
