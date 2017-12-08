<template>
  <div id="news">
    <div class="coverPage">
      <div class="cover mask" ref="coverImg">
        <img :src='news.cover.image' style="position:absolute;width:100%;height:100%"/>
      </div>
      <div class="fadeIn coverPanel" ref="coverPanel">
        <div class="panel coverTitle">
          <!--{{news.cover.head}}-->
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
        <div class="detailButton panel hoverButton" @click="jump(news.cover)">
          <span>详&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;情</span>
        </div>
      </div>
    </div>
    <div class="underCover text">
      <div class="dark_red v_line "></div>
      潜水盛事
    </div>
    <div class="notelist">
      <div v-for="note in news.previous" key="title" class="note">
        <a @click="jump(note)" class="noteImage">
          <img class="wrap-img" :src="note.image"/>
        </a>
        <div class="noteTitle">{{note.title}}</div>
        <div class="text noteAbout">{{note.about}}</div>

      </div>
    </div>
    <div class="logo logowrap"><span
      class="l1"></span><span class="l2"></span></div>
  </div>
</template>
<style lang="scss" scoped="" type="text/css">
  @import "../assets/css/news.scss";

</style>
<script>
  import scrollMgr from '../assets/js/scrollMgr'
  import ajax from '../assets/js/ajaxService';

  export default{
    name: 'News',
    data(){
      return {
        reading: null,
        news: {cover: {}, toplines: [], previous: []},
      };
    },
    beforeDestory(){
      scrollMgr.off('NewsCover');
    },
    methods:{
        jump(note){
          this.$router.push({name:'Detail',params:{link:note.link}});
        },
    },
    mounted(){
      ajax.get('/news').then(news => {
        this.news = news;
      });


      //首屏动画效果
      $(() => {
        const coverPanel = $(this.$refs.coverPanel);
        const coverImg = $(this.$refs.coverImg);
        scrollMgr.on('NewsCover', top => {
          if (top < 400) {
            coverImg.css("transform", "translate(0px,-" + top / 1.5 + "px)");
            coverPanel.css('opacity', (400 - top) / 400);
          }
        });
      });
    }
  }
</script>
