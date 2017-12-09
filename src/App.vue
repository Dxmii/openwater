<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <div class="navi">
      <!--<i style="margin-left:40px;margin-top:30px"-->
      <!--v-bind:class="{'menu-icon':!showNavi,'el-icon-arrow-right':showNavi}"-->
      <!--@click="showNavi = !showNavi"></i>-->
      <div class="Menu_link" @click="showNavi = !showNavi;showNavi2=false">
        <span class="Menu_hamburger" v-bind:class="{'Menu_init_animateIn':!showNavi,'Menu_animateIn':showNavi}">
        </span></div>
    </div>
    <!--一级导航-->
    <div class='naviMenu' v-bind:class="{naviHide:!showNavi,naviShow:showNavi}" v-show="showNavi">
      <div class="logo">OpenWater</div>
      <div v-bind:class="{menuPanel:true,menuShow:showNavi}">

        <div @mouseenter="movePointer(item.path)" @mouseleave="movePointer(selection.path||selection)"
             class='naviItem' v-bind:class="{selected:(item.path==(selection.path||selection))}" v-for="item in navi"
             :ref="item.path"
             @click="selection = item">
          <div v-if="item.children" @click="showNavi=false;showNavi2=true">{{item.name}}</div>
          <router-link v-if="item.children==null||item.children.length==0" :to="item.path" tag="div"
                       @click.native="showNavi=false;showNavi2=false">{{item.name}}
          </router-link>
        </div>
      </div>
      <div class="pointer" ref="pointer"></div>
    </div>
    <!--二级导航-->
    <div class="naviMenu2" v-bind:class="{naviShow2:showNavi2}" v-show="showNavi2">
      <div class="logo" style="color:#FFF">OpenWater</div>
      <div class="menuPanel" v-bind:class="{menuShow:showNavi}">
        <i style="position:relative;width:20px;height:20px;color:white;" class="el-icon-arrow-left"
           @click="showNavi2=false;showNavi=true"></i>
        <div class='naviItem2' v-bind:class="{selected:(item==selection2)}" v-for="item in selection.children"
             :ref="item.path"
             @click="selection2 = item">
          <router-link :to="{path:selection.path,query:{index:item.path}}" tag="div"
                       @click.native="showNavi2=false">{{item.name}}
          </router-link>
        </div>
      </div>


    </div>
    <div class="mainPanel">
      <router-view></router-view>
      <div class="tail">
        <div>
          Copyright © 2017 <span>广州开水信息科技有限公司</span> 版权所有
        </div>
      </div>
    </div>
    <div style="position: fixed;  width: 100%;  height: 100%;  top: 0;  left: 0;  margin: 0 0;
  background: #111;  Opacity: 0.5;  z-index: 30;" v-show="showNavi||showNavi2"
         @click="showNavi=false;showNavi2=false"></div>
  </div>
</template>

<script>
  import ajax from './assets/js/ajaxService'

  let intv = 0;
  export default {
    name: 'app',
    data () {
      return {
        showNavi: false,
        showNavi2: false,
        selection: '/',
        selection2: {},
        navi: [],
      }
    },
    mounted(){
      ajax.get('/navi').then(r => {
        this.navi = r;
      });
    },
    methods: {
      movePointer(item){
        let p = this.$refs[item][0];
        const pp = this.$refs['pointer'];
        let r = p.parentElement.offsetTop + p.offsetTop;
        let o = pp.offsetTop;
        let d = r > o;
        let f = () => {
          pp.style.top = (d ? o += 8 : o -= 8) + 'px';
          if ((d && o > r) || (!d && o < r)) {
            window.clearInterval(intv);
          }
        };

        window.clearInterval(intv);
        intv = setInterval(f, 20);
      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/css">
  @import "./assets/css/comm.scss";
</style>
