<template>
  <div id="app">
   <Checkmenu />
  </div>
</template>

<script>
import Checkmenu from '@/components/check'
export default {
  name: 'App',
  components:{Checkmenu}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
