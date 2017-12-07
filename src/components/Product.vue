<template>
  <div id="product">
    <div class="brand_intro">
      <img :src="brand.image">
      <div class="text content1">
        <pre>{{brand.introduce}}</pre>
      </div>
    </div>
    <div class="products">
      <el-row v-for="(p,index) in brand.products">
        <el-col :span="12">
          <img class='product_img' v-if='index%2==0' :src="p.image">

          <div v-if="index%2!=0">
            <br/><br/><br/>
            <div class="title2">产品介绍</div>
            <br/><br/><br/><br/>
            <div class="title3"><strong>{{p.title}}</strong></div>
            <div>
              <pre class="content2">{{p.intro}}</pre>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <img class='product_img' v-if='index%2!=0' :src="p.image">
          <div v-if="index%2==0">
            <br/><br/><br/>
            <div class="title2">产品介绍</div>
            <br/><br/><br/><br/>
            <div class="title3"><strong>{{p.title}}</strong></div>
            <div>
              <pre class="content2">{{p.intro}}</pre>
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
        brand: {}
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
    }
  }

</script>
