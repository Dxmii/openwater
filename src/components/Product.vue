<template>
  <div id="product">
    <div class="product_intro">
      <img :src="data.image">
      <div class="text content1"><pre>{{data.introduce}}</pre></div>
    </div>
    <div v-for="{p,index} in data.products">
      <div v-bind:class="{left:index%2==0,right:index%2!=0}">
        <img :src="p.image">
      </div>
      <div v-bind:class="{left:(index%2!=0),right:(index%2==0)}">
        <pre>{{p.content}}</pre>
      </div>
    </div>
  </div>
</template>
<style>
  @import "../assets/css/product.scss";

</style>
<script>
  import scrollMgr from '../assets/js/scrollMgr'
  import ajax from '../assets/js/ajaxService'
  /*eslint-disable*/
  export default{
    name: 'product',
    data(){
      return {
        key: '',
        data: {}
      }
    },
    mounted(){
      this.key = this.$route.query.index;
      ajax.get(this.key).then(d => {
        this.data = d;
      });
    }
  }

</script>
