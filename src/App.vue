<template>
  <div id="app">
    
    <!-- 相当于首页容器wrap -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='stylus'>
*{
  margin: 0px;
  padding: 0px;
}
html,body,#app{
  width: 100%;
  height: 100%;
}
body{
  font-size : 0.16rem
}
#app{
  display:flex;
  flex-direction :column
}


</style>
