<template>
  <div class="article">
    <iframe class="detailPage" scrolling=auto    :src="link">

    </iframe>
    <div @click='back' class="detailClose">
      <i class="el-icon-arrow-left"></i>
    </div>
  </div>
</template>
<style scoped="">
  @import '../assets/css/detail.scss';

  .tail{
    visibility: hidden;
  }
</style>
<script>
  export default{
    data(){
      let link = this.$route.params.link;
      return {
        link,
      };
    },
    methods:{
        back(){
            window.history.back();
        }
    }
  }

</script>
