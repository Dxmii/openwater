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
    <div class="underCover titleText">
      <!--<div class="dark_red v_line "></div>-->
      <div>
        <div class="arrow1"></div>
        <div class="arrow1"></div>
      </div>
      <span>潜水盛事</span>
    </div>
    <div class="topline">
      <div class="tl_panel" v-for="(tl,index) in news.toplines" key="title">
        <div class="clickable" @click="jump(tl)" v-bind:class="{left:index%2==0,right:index%2!=0}">
          <img :src="tl.image">
        </div>
        <div class="top_content" v-bind:class="{left:index%2!=0,right:index%2==0}">
          <div @click="jump(tl)" class="title3"><span class="clickable">{{tl.title}}</span></div>
          <div @click="jump(tl)" class="content2"><span class="clickable">{{tl.about}}</span></div>
          <div class="content2">{{tl.time}}</div>
        </div>

      </div>

    </div>


    <div class="puzzle">
      <br/>
      <div class="plz_img  lm">
        <img class="clickable" @click="news.puzzle&&jump(news.puzzle.left)"
             :src="news.puzzle?news.puzzle.left.image:null">
        <div class="plz_img rt">
          <img class="clickable" @click="news.puzzle&&jump(news.puzzle.rightTop)"
               :src="news.puzzle?news.puzzle.rightTop.image:null">
          <div class="plz_img rb1">
            <img class="clickable" @click="news.puzzle&&jump(news.puzzle.rightButtom1)"
                 :src="news.puzzle?news.puzzle.rightButtom1.image:null">
          </div>
          <div class="plz_img rb2">
            <img class="clickable" @click="news.puzzle&&jump(news.puzzle.rightButtom2)"
                 :src="news.puzzle?news.puzzle.rightButtom2.image:null">
          </div>
        </div>
      </div>
    </div>

    <div class="notelist">
       <div class="titleText">更早资讯</div>
      <div v-for="note in news.previous" key="title" class="note">

        <div @click="jump(note)" class="noteImage">
          <img class="clickable" :src="note.image"/>
        </div>

        <div class="noteInfo">
          <span class="title3 clickable">{{note.title}}</span>
          <div class="noteAbout clickable ">{{ellipsis(note.about)}}</div>
          <div class="noteTime">{{note.time}}</div>
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

  export default{
    name: 'News',
    data(){
      return {
        reading: null,
        news: {cover: {}, toplines: [], previous: []},
        ELLIPSIS:200,
      };
    },
    beforeDestory(){
      scrollMgr.off('NewsCover');
    },
    methods: {
      jump(note){
        this.$router.push({name: 'Detail', params: {link: note.link}});
      },
      ellipsis(str){
        let l = str.length;
        let blen = 0;
        for(let i=0; i<l; i++) {
          if ((str.charCodeAt(i) & 0xff00) != 0) {
              blen++;
            }
          if(blen ++>this.ELLIPSIS){
            return str.substr(0,i)+'..';
          }
        }
        return str;
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
        });
      });
    }
  }
</script>
