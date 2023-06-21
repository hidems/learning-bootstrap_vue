<template>
  <div id="app">
    <myheader/>
    <router-view/>
    <button class="btn btn-primary">test</button>
  </div>
</template>

<script>
import myheader from './components/myheader';

export default {
  name: 'App',
  components: {
    myheader,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
