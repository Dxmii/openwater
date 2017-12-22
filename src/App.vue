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
        <div class="pointer" ref="pointer"></div>

        <div @mouseenter="movePointer(item.path)" @mouseleave="movePointerDelay(selection.path||selection)"
             class='naviItem' v-bind:class="{selected:(item.path==(selection.path||selection))}" v-for="item in navi"
             :ref="item.path"
             @click="selection = item">
          <div v-if="item.children" @click="showNavi=false;showNavi2=true">{{item.name}}</div>
          <router-link v-if="item.children==null||item.children.length==0" :to="item.path" tag="div"
                       @click.native="showNavi=false;showNavi2=false">{{item.name}}
          </router-link>
        </div>
      </div>
    </div>
    <!--二级导航-->
    <div class="naviMenu2" v-bind:class="{naviShow2:showNavi2}" v-show="showNavi2">
      <div class="logo" style="color:#FFF">OpenWater</div>
      <div class="menuPanel" v-bind:class="{menuShow:showNavi}">
        <i class="back el-icon-arrow-left"
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
        <div class="yahei">
          <span class="auth">Copyright © 2017 <span class="dark_ink">广州开水信息科技有限公司</span> 版权所有</span>
          <span class="icp">粤ICP备16048076号-1</span>
        </div>
      </div>
    </div>
    <div style="position: fixed;  width: 100%;  height: 100%;  top: 0;  left: 0;  margin: 0 0;
  background: #111;  opacity: 0.5;  z-index: 30;" v-show="showNavi||showNavi2"
         @click="showNavi=false;showNavi2=false"></div>
    <div class="logowrap" ref="logowrap"><span
      class="l1"></span><span class="l2"></span></div>

  </div>
</template>

<script>
  import ajax from './assets/js/ajaxService'
  import scrollMgr from './assets/js/scrollMgr'

  let intv = 0;
  export default {
    name: 'app',
    data () {
      return {
        showNavi: false,
        showNavi2: false,
        selection: '/company',
        selection2: {},
        navi: [],
      }
    },
    watch: {
      showNavi(v){
        if (v) {
          setTimeout(() => {
            this.movePointer(this.selection.path ? this.selection.path : this.selection);
          },1000);
        }
      }
    },
    mounted(){
      ajax.get('/navi').then(r => {
        this.navi = r;
      });
      let logo = $(this.$refs.logowrap);
      let limit = logo.width() * 30;
      scrollMgr.on('app', top => {
          if (top < limit) {
            logo.css('opacity', (limit - top) / limit);

          }
        }
      );
    },
    beforeDestory(){
      scrollMgr.off('app');
    },
    methods: {
      movePointerDelay(item){
        if (intv)
          clearTimeout(intv);
        intv = setTimeout(() => {
          this.movePointer(item);
        }, 1000);
      },
      movePointer(item){
        if (intv)
          clearTimeout(intv);
        if (this.$refs[item] == null) {
          return;
        }
        let i = this.$refs[item][0];
        const pointer = this.$refs['pointer'];
        const pp = $(pointer);
        let r = $(i).offset().top - $(i.parentElement).offset().top;
        pp.animate({
          top: r + 'px'
        }, 200);
      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/css">
  @import "./assets/css/comm.scss";
</style>
