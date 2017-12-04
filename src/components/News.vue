<template>
  <div style="position:relative;width:100%">
    <div class="coverPage">
      <div class="cover mask"  ref="coverImg">
      <img :src='news.cover.image' style="position:absolute;width:100%;height:100%"/>
      </div>
      <div class="coverPanel" ref="coverPanel">
        <div class="panel coverTitle">
          {{news.cover.head}}
        </div>
        <div class="panel coverIntro">
          <div>
            {{news.cover.title}}
          </div>
          <div>
            {{news.cover.title_en}}
          </div>
          <div style="font-size: 0.6em;margin-top:0.8em">
            -- {{news.cover.time}} --
          </div>
        </div>
        <div class="panel coverButton">
          <span>详&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;情</span>
        </div>
      </div>
    </div>
    <div class="notelist">
      <div v-for="note in news.previous" key="title" class="note">
        <a @click="selectedNote=note" class="noteImage" style="position:relative;float:right;right:26vh;width:220px;height:220px;">
          <img class="wrap-img" :src="note.image"/>
        </a>
        <div class="noteTitle" style="float:left;font-weight:bold;font-size:2em">{{note.title}}</div>
        <div class="text noteAbout" style="width:50em;margin-top:1em;float:left;">{{note.about}}</div>

      </div>
    </div>
    <div class="coverPage" >
    </div>

    <div v-show="selectedNote" class="article">
     <iframe style="width:100%;height:100%;border:none" scrolling=auto :src="selectedNote?selectedNote.link:''"></iframe>
      <div @click='selectedNote=null' style="width:6em;height:2em;position:absolute;right:10%;bottom:10%;background: #123;opacity: 0.5;color:white;text-align: center;line-height: 1.7">close</div>
    </div>

  </div>
</template>
<style lang="scss" scoped="" type="text/css">
  $pageHeight:110vh;
  $left:84px;
  .coverPanel {
    position: relative;
    top: 20%;
    height: 80%;
    width: 100%;
    text-align: center;
  }

  .article{
    position:fixed;
    top:0;
    left:$left;
    width:calc(100vw - $left);
    height:100vh;
  }

  .coverButton:before {
    content: "";
    position: absolute;
    top: 0px;
    left: 1px;
    width: 10em;
    height: 2.6em;
    background: #FFF;
    z-index: -2;
    transition: opacity 1s;
    opacity: 0;
  }

  .coverButton:hover {
    color: #000;
  }

  .coverButton:hover:before {
    opacity: 1;
  }

  .panel {
    position: relative;
    text-align: center;
    margin: 0 auto;
    z-index: 1;
    top: 0;
    letter-spacing: 0.1em;
    color: #FFF;
  }

  .coverTitle {
    width: 20em;
    height: 2em;
    font-size: 1.5em;
    letter-spacing: 0.5em;
    color: RGB(192, 164, 144);
  }

  .coverIntro {
    width: 20em;
    height: 4em;
    font-size: 3em;
  }

  .coverButton {
    width: 10em;
    height: 2.5em;
    transition: color 3s;
    line-height: 2.5;
    margin-top:2em;
  }

  .coverButton:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 10em;
    height: 2.5em;
    border: solid #FFF 1px;
  }

  .coverPage {
    position: relative;
    width: calc(100% - $left);
    height: $pageHeight;
  }

  .notelist{
    position: relative;
    width: calc(100% - $left);
  }
  .note{
    height: $pageHeight/2;
  }
  .cover {
    position: absolute;
    width: 100%;
    float: left;
    height: $pageHeight;
  }

</style>
<script>
  import scrollMgr from '../assets/js/scrollMgr'
  import ajax from '../assets/js/ajaxService';

  export default{
    name: 'News',
    data(){
      return {
        selectedNote:null,
        news:{cover:{},toplines:[],previous:[]},
      };
    },
    beforeDestory(){
      scrollMgr.off('NewsCover');
    },
    mounted(){
      ajax.get('/news').then(news=>{
          this.news=news;
      });


      //首屏动画效果
      $(()=>{
          const coverPanel=$(this.$refs.coverPanel);
        const coverImg=$(this.$refs.coverImg);
        scrollMgr.on('NewsCover',top=>{
          if(top<400){
            coverImg.css("transform","translate(0px,-"+top/1.5+"px)");
            coverPanel.css('opacity',(400-top)/400);
          }
        });
      });
    }
  }
</script>
