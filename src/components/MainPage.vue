<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div style="background: #111;width:100%;height:2000px;">
    <el-row>
      <el-col :span="8">
        <div></div>
      </el-col>
      <el-col :span="8">

      </el-col>
    </el-row>
    <el-row v-for="product in products" key="id">

    </el-row>

  </div>
</template>

<script>
  /*eslint-disable*/
  export default{
    name: 'MainPage',
    data(){
      return {
        products: [],
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
