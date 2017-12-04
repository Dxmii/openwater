<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div  id="container">
    <div style="background: #FFF;width:100%;height:100%;" class="company">
      <div ref="companyImage"  class="company_image mask">
      <img  :src="company.image" style="width:100%;height:100%;"></div>
      <div ref="companyInfo" class="company_info">
        <div class="text title1">{{company.name}}</div>
        <div style="width:25em;" class="text content2">{{company.intro}}</div>
      </div>
    </div>
    <div class="plank"></div>
    <div class="letter">
      <div class="text title2">我们的故事</div>
      <div class="text content1">{{company.story}}</div>
    </div>
  </div>
</template>

<script>
  import scrollMgr from '../assets/js/scrollMgr'
  import ajax from '../assets/js/ajaxService'
  /*eslint-disable*/
  export default{
    name: 'MainPage',
    data(){
      return {
        company: {},
      }
    },
    beforeDestroy(){
      //监听在界面销毁的时候关闭
      scrollMgr.off('CompanyInfo');
    },
    mounted(){
      ajax.get('/company').then(company => {
        this.company = company;
      });

      //滚屏动画效果
      $(()=>{
        const info=$(this.$refs.companyInfo);
        scrollMgr.on('CompanyInfo',top=>{
          if(top<400){
            info.css("transform","translate(0px,"+top/2+"px)");
            info.css('opacity',(400-top)/400);
          }
        });
      });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="" type="text/css">
  $pageHeight:110vh;
  $left:84px;
  #container{
    background: #111;
    width:calc(100% - #{$left});
    height:2000px;
  }
  .company_image {
    position: fixed;
    width: 50%;
    height: 90vh;
    float: left;
    margin:0 0 0 0;
  }



  .company_info{
    position: relative;
    top:160px;
    right:10vw;
    height: 90vh;
    float:right;
  }
  .letter{
    position:absolute;
    top:70vh;
    width:70vw;
    left:5%;
    height:40vh;
    text-align: center;
    background: #FBFBFD;
    border:solid 1px #C0A490;
    padding:3em 5em 5em 5em;
  }

  .letter:after{
    content:"";
    position:absolute;
    bottom:50px;
    left:50%;
    width:1px;
    height:70px;
    background: #C0A490 100%;
  }

  .letter div{
    margin-top:50px;
  }

  .plank{
    position:absolute;
    width:100vw;
    height:2000px;
    background: #FFF;
    top:90vh;
    left:0;
  }
</style>
