<template>
  <div class="article">
    <iframe class="detailPage" scrolling=auto     :src="link">
    </iframe>
    <div @click='back' class="detailClose">
    </div>
  </div>
</template>
<style scoped="">
  @import '../assets/css/detail.scss';

  .tail {
    visibility: hidden;
  }
</style>
<script>
  export default{
    data(){
      let link = this.$route.params.link;
      if (link)
        link = link.split('|').join('/');
      return {
        link,
      };
    },
    methods: {
      back(){
        window.history.back();
      }
    }
  }

</script>
