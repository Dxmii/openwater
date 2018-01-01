<template>
  <div id="product">
    <div class="brand_intro">
      <img :src="brand.image">
      <div class="text">
        <p>{{brand.introduce}}</p>
      </div>
    </div>
    <div class="products">
      <div class="product_panel" v-for="(p , index) in brand.products">
        <div class='product_img' v-bind:class="{left:index%2==0,right:index%2!=0}">
          <img :src="p.image">
        </div>
        <div class="product_info" v-bind:class="{left:index%2!=0,right:index%2==0}">
          <div class="panel">
            <div class="title2">产品介绍</div>
            <div class="product_name font16 songti bold dark_ink"><strong>{{p.title}}</strong></div>
            <div class="product_desc">
              <span class="font12 light_brown songti">{{p.intro}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" type="text/css">

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
        brand: {},
        mobile: false,
      }
    },
    watch: {
      '$route.fullPath'(val){

        ajax.get('/' + this.$route.params.brand).then(d => {
          this.brand = d;
        });
      }
    },
    computed: {},
    mounted(){
      ajax.get('/' + this.$route.params.brand).then(d => {
        this.brand = d;
      });
      this.mobile = screen.width < 780;
    }
  }

</script>
