<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div style="background: #645;width:100%;height:2000px;">
     <input v-model="test"></input>
     <h1>test的值：{{test}}</h1>

  <h2 v-for="item in items">{{item}}</h2>
  </div>
</template>

<script>
  /*eslint-disable*/
  export default{
    name: 'MainPage',
    data(){
      return { 
        test:'caiyu',
        products: [],
        items:[1,2,3,4,5]
      }
    },
    watch:{
       test(c,o){
	  console.log('current value:',c);
    	  console.log('old value:',o);
       }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
