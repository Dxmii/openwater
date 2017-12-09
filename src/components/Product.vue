<template>
  <div id="product">
    <div class="brand_intro">
      <img :src="brand.image">
      <div class="text">
        <span>{{brand.introduce}}</span>
      </div>
    </div>
    <div class="products">
      <div class="product_panel" v-for="(p , index) in brand.products">
        <div class='product_img' v-bind:class="{left:index%2==0,right:index%2!=0}">
          <img :src="p.image">
        </div>
        <div class="product_info" v-bind:class="{left:index%2!=0,right:index%2==0}">
          <div>
            <br/><br/><br/>
            <div class="title2">产品介绍</div>
            <br/><br/><br/><br/>
            <div class="title3"><strong>{{p.title}}</strong></div>
            <div>
              <span class="content2">{{p.intro}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped="" type="text/css">

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
        brand: {},
        mobile: false,
      }
    },
    watch: {
      '$route.query.index'(val){
        this.key = this.$route.query.index;
        ajax.get(this.key).then(d => {
          this.brand = d;
        });
      }
    },
    mounted(){
      this.key = this.$route.query.index;
      ajax.get(this.key).then(d => {
        this.brand = d;
      });
      this.mobile = screen.width < 780;
    }
  }

</script>
