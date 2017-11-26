<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <div class="navi">
      <i style="margin-left:40px;margin-top:30px"
         v-bind:class="{'el-icon-arrow-down':!showNavi,'el-icon-arrow-right':showNavi}"
         @click="showNavi = !showNavi"></i>
    </div>
    <div v-bind:class="{naviMenu:true,naviShow:showNavi}" v-show="showNavi">
      <div v-bind:class="{menuPanel:true,menuShow:showNavi}">

        <div @mouseenter="movePointer(item.path)" @mouseleave="movePointer(selection)"  v-bind:class="{menuItem:true,selected:item.path==selection}" v-for="item in menu" :ref="item.path" @click="selection = item.path">
          <router-link :to="item.path" tag="div">{{item.name}}</router-link>
        </div>
      </div>
      <div class="pointer" ref="pointer" style="position:absolute;left:0;top:0;height:2.4em;width:2px;background:#597;"></div>
    </div>
    <div class="mainPanel">
      <router-view></router-view>
    </div>
    <div class="cover" v-show="showNavi" @click="showNavi=false"></div>
  </div>
</template>

<script>
  /* eslint-disable */
  let intv=0;
  export default {
    name: 'app',
    data () {
      return {
        showNavi: false,
        selection:'/',
        menu: [
          {
            name: '公司介绍',
            path:'/',
          },
          {
            name: '品牌大事件',
            path:'/Product',
          },
          {
            name: '媒体资讯',
            path:'/News',
          }
        ],
      }
    },
    methods:{
      movePointer(item){
        let p=this.$refs[item][0];
        const pp=this.$refs['pointer'];
        let r=p.parentElement.offsetTop+p.offsetTop;
        let o=pp.offsetTop;
        let d=r>o;
        let f=()=>{
            console.log(o,r,d);
          pp.style.top=(d?o+=8:o-=8)+'px';
          if((d&&o>r)||(!d&&o<r)){
              console.log(o>r);
            window.clearInterval(intv);
          }
        };

        window.clearInterval(intv);
        intv=setInterval(f,20);
      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="" type="text/css">
  $left:120px;
  .cover{
    position:fixed;
    width:100%;
    height:100%;
    top:0;
    left:0;
    margin:0 0;
    background: #111;
    Opacity:0.5;
    z-index:30;
  }
  .mainPanel{
    position:absolute;
    left:$left;
    width:100%;
  }
  .navi {
    position: fixed;
    top: 0;
    left: 0;
    margin-top: 0;
    margin-left: 0;
    width: $left;
    height: 100%;
    background-color: #FEFEFE;
    z-index: 80;
  }

  .menuPanel {
    margin-left: 2em;
    margin-top: 10em;
  }

  .menuItem {
    margin-top: 1em;
    font-family: '微软雅黑';
    font-size: 1.8em;
  }

  .menuItem:hover {
    color: #999;
  }
  .selected{
    color: #CCC;
  }

  .naviMenu {
    position: fixed;
    top: 0;
    margin-top: 0;
    margin-left: 0;
    left: $left;
    width: 45%;
    height: 100%;
    border-left: solid 0.5px #CCC;
    background-color: #FEFEFE;
    z-index: 50;
  }

  .naviShow {
    animation: nshow 0.5s;
  }

  .menuShow {
    animation: mshow 1s;
    animation-fill-mode: both;
  }

  @keyframes mshow {
    0% {
      opacity: 0;
      transform: translate(-9em);
    }
    60% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
      transform: translate(0px);
    }
  }

  @keyframes nshow {
    from {
      width: 0
    }
    to {
      width: 45%
    }
  }

</style>
