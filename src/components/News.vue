<template>
  <div id="news">
    <div class="coverPage">
      <div class="cover mask" ref="coverImg">
        <img :src='news.cover.image'/>
      </div>
      <div class="fadeIn coverPanel" ref="coverPanel">
        <div class="panel coverTitle">
          <!--{{news.cover.head}}-->
        </div>
        <div class="coverIntro">
          <div class="info">
            {{news.cover.title}}
          </div>
          <div class="info">
            {{news.cover.title_en}}
          </div>
          <div class="time">
            {{news.cover.time}}
          </div>
          <div class="detailButton hoverButton" @click="jump(news.cover)">
            <span>查看详情</span>
          </div>
        </div>
      </div>
    </div>
    <div class="underCover titleText">
      <!--<div class="dark_red v_line "></div>-->
      <div class="arrow1"></div>
      <span>潜水盛事</span>
    </div>
    <div class="topline">
      <div class="tl_panel" v-for="(tl,index) in news.toplines" key="title">
        <div class="tl_image" @click="jump(tl)" v-bind:class="{left:index%2==0,right:index%2!=0}">
          <div class="scalable" style="cursor:pointer;width:100%;height:100%;">
            <img :src="tl.image">
          </div>
        </div>
        <div class="top_content" v-bind:class="{left:index%2!=0,right:index%2==0}">
          <div @click="jump(tl)" class="title  songti bold"><span class="clickable">{{tl.title}}</span></div>
          <div class="info light_brown songti"><span>{{ellipsis(tl.about, 180)}}</span></div>
          <div class="light_gray time">发表日期：{{tl.time}}</div>
          <div class="readBtn">查看详情</div>
        </div>

      </div>

    </div>


    <div class="puzzle" ref="puzzle">
      <br/>
      <div class="plz_img  lm">
        <div class="img">
          <img class="" @click="news.puzzle&&jump(news.puzzle.left)"
               :src="news.puzzle?news.puzzle.left.image:null">
        </div>
        <div class="plz_img rt">
          <div class="img">
            <img class="" @click="news.puzzle&&jump(news.puzzle.rightTop)"
                 :src="news.puzzle?news.puzzle.rightTop.image:null">
          </div>
          <div class="plz_img rb1">
            <img class="" @click="news.puzzle&&jump(news.puzzle.rightButtom1)"
                 :src="news.puzzle?news.puzzle.rightButtom1.image:null">
          </div>
          <div class="plz_img rb2">
            <img class="" @click="news.puzzle&&jump(news.puzzle.rightButtom2)"
                 :src="news.puzzle?news.puzzle.rightButtom2.image:null">
          </div>
        </div>
      </div>
    </div>

    <div class="notelist">
      <div class="titleText" style=" margin: 0 auto;">
        <div class="arrow1" style=" margin: 0 auto;"></div>
        <span>更早资讯</span>
      </div>
      <div v-for="note in news.previous" key="title" class="note">

        <div @click="jump(note)" class="noteImage">
          <div class="scalable" style="cursor:pointer;width:100%;height:100%;">
            <img :src="note.image"/>
          </div>
        </div>

        <div class="noteInfo">
          <span @click="jump(note)" class="songti bold font16 clickable">{{note.title}}</span>
          <div class="noteAbout songti light_brown">{{ellipsis(note.about)}}</div>
          <div class="noteTime">发表日期：{{note.time}}</div>
        </div>
      </div>
    </div>
    <div class="logo logowrap" ref="logowrap"><span
      class="l1"></span><span class="l2"></span></div>
  </div>
</template>
<style lang="scss" scoped="" type="text/css">
  @import "../assets/css/news.scss";

</style>
<script>
  import scrollMgr from '../assets/js/scrollMgr'
  import ajax from '../assets/js/ajaxService';
  import util from '../assets/js/util';

  export default{
    name: 'News',
    data(){
      return {
        reading: null,
        news: {cover: {}, toplines: [], previous: []},
        screen: screen.width,
      };
    },
    beforeDestory(){
      scrollMgr.off('NewsCover');
    },
    methods: {
      jump(note){
        this.$router.push({name: 'Detail', params: {link: note.link}});
      },
      ellipsis(str, l = 200){
        return util.ellipsis(str, l);
      },
    },
    mounted(){

      ajax.get('/news').then(news => {
        this.news = news;
      });


      //首屏动画效果
      $(() => {
        const coverPanel = $(this.$refs.coverPanel);
        const logowrap = $(this.$refs.logowrap);
        const coverImg = $(this.$refs.coverImg);
        const puzzle = $(this.$refs.puzzle);

        const puzzleOffset = puzzle.offset().top;

        scrollMgr.on('NewsCover', top => {
          if (top < 200) {
            logowrap.css("transform", "translate(0px,-" + top / 2 + "px)");
          } else {
            logowrap.css("transform", "translate(0px,-300px)");
          }
          if (top < 400) {
            coverImg.css("transform", "translate(0px,-" + top / 1.5 + "px)");
            coverPanel.css('opacity', (400 - top) / 400);
          }
          let off1 = top - puzzleOffset;
          if (off1 > -200) {
            puzzle.css("transform", "translate(0px,-" + off1 / 1.5 + "px)");
          }
        });
      });
    }
  }
</script>
