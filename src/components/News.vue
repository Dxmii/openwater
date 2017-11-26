<template>
  <div style="position:relative;width:100%">
    <div class="coverPage">
      <div class="cover"  ref="coverImg">
      <img src='../assets/image/cover.jpg' style="position:absolute;width:100%;height:100%"/>
      <div class="mask" style="position:absolute;width:100%;height:100%"></div>
      </div>
      <div class="coverPanel" ref="coverPanel">
        <div class="panel coverTitle">
          回顾盛事
        </div>
        <div class="panel coverIntro">
          <div>
            PADI潜水嘉年华
          </div>
          <div>
            Diving Festval For PADI
          </div>
          <div style="font-size: 0.6em;margin-top:0.8em">
            -- 2017/11/15 --
          </div>
        </div>
        <div class="panel coverButton">
          <span>详&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;情</span>
        </div>
      </div>
    </div>
    <div class="notelist">
      <div v-for="note in notes" key="title" class="note"><a class="noteImage" style="position:relative;float:right;right:26vh;width:220px;height:220px;">
        <img class="wrap-img" :src="note.image"/>
      </a>
        <div class="noteTitle" style="float:left;font-weight:bold;font-size:2em">{{note.title}}</div>
        <div class="text noteAbout" style="width:50em;margin-top:1em;float:left;">{{note.about}}</div>

      </div>
    </div>
    <div class="coverPage" style="background:#C23"></div>
  </div>
</template>
<style lang="scss" scoped="" type="text/css">
  $pageHeight:110vh;
  .coverPanel {
    position: relative;
    top: 20%;
    height: 80%;
    width: 100%;
    text-align: center;
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
    transition: color 1s;
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
    width: calc(100% - 120px);
    height: $pageHeight;
  }

  .notelist{
    position: relative;
    width: calc(100% - 120px);
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

  .mask {
    background-color: #111;
    opacity: 0.8;
  }
</style>
<script>
  import scrollMgr from '../assets/js/commons'

  export default{
    name: 'News',
    data(){
      return {
        cover: {
          type: 'text',//text/img
          url: null,//for img
        },
        notes:[
          {
              title:"爱上潜水 盘点广州殿堂级潜水胜地",
              about:'一说起潜水胜地，大多数潜水爱好者一定会联想到东南亚、澳洲欧洲那些极富盛名的殿堂级潜水胜地。然而，大多数人都不知道的是，广州也有极富盛名的殿堂级潜水胜地，和潜伴在此间潜水，可以体会到广州浓厚的历史积淀和水上文化底蕴，享受独特、富有浪漫情怀的潜水体验。广州开水信息科技有限公司为您盘点一二：',
              image:'http://openwater.com.cn/uploads/picture/20171116/e4524d5412368b4eced883a016221613.jpg',
              link:'',

          },{
            title:'考潜水证应该知道的潜水教学真相',
            about:'想要考潜水证的朋友可以看这篇文章，了解一些PADI的教学要求，用来做选择潜水课程的参考，以免踩雷。考过证书的朋友可以看下，看有没有遇到这种比较不合理的潜水教学',
            image:'http://openwater.com.cn/uploads/picture/20171121/71c999a8c06a9510234f28719882ea64.jpg',
            link:'',
          },{
            title:'女性“潜规则”——广州帕迪7·15女士潜水日泳池体验',
            about:'2017年7月15号下午四点，广州开水信息科技有限公司联合广州潜水专业玩家——帕迪潜水为大家带来的Summer Pool Party–PADI女士潜水日盛夏泳池趴在广州海角红楼游泳场盛大开场！',
            image:'http://openwater.com.cn/uploads/picture/20171121/776534d4f5e3981244cf16b93d021461.jpg',
            link:'',
          }
        ]
      };
    },
    beforeDestory(){
      scrollMgr.off('NewsCover');
    },
    mounted(){
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
