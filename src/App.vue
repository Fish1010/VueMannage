<template>
  <div id="app">
    <Index />
  </div>
</template>

<script>
import Index from './index.vue'
export default {
  name: 'App',
  components: {
    Index
  },

}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  background-color: #eee;
}
a{
  text-decoration: none;
}
ul, li{
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
