<template>
  <div id="product">
    <div class="brand_intro">
      <img :src="brand.image">
      <div class="text content1">
        <span>{{brand.introduce}}</span>
      </div>
    </div>
    <div class="products">
      <el-row v-for="(p,index) in brand.products" key="title">
        <el-col :span="mobile?24:10">
          <div>
            <img class='product_img' v-if='mobile||index%2==0' :src="p.image">
          </div>
          <div v-if="!mobile&&index%2!=0">
            <br/><br/><br/>
            <div class="title2">产品介绍</div>
            <br/><br/><br/><br/>
            <div class="title3"><strong>{{p.title}}</strong></div>
            <div>
              <span class="content2">{{p.intro}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="mobile?24:14">
          <img class='product_img' v-if='!mobile&&index%2!=0' :src="p.image">
          <div class="product_panel" v-if="mobile||index%2==0">
            <br/><br/><br/>
            <div class="title2">产品介绍</div>
            <br/><br/><br/><br/>
            <div class="title3"><strong>{{p.title}}</strong></div>
            <div>
              <span class="content2">{{p.intro}}</span>
            </div>
          </div>
        </el-col>
      </el-row>
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
